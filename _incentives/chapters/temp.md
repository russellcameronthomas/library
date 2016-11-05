
~~~~
// Global parameters:
var N = 30;  // number of team decisions; Best to keep this below 40 to avoid excess run times
var K = 5;   // number of designers ("actors")
var n = Math.round(N / K);  // number of decisions assigned to each actor
// Experimental variables:
var hierarchical = true;
var tightlyCoupled = true;

var lambda = 4; // rate in poisson distribution that generates random dependencies

// Helper functions:
// binaryFlip(); arrayGet(arr,index); removeDups(arr); convertBinaryToInt(arr);
// flatten1(); pickN();
///fold:
//###########################################
var binaryFlip = function(){return flip() ? 1 : 0;}

// The following is necessary because of WebPPL's rule against using 
// Javascript libraries within WebPPL functions
var power = function(x,y) {return Math.pow(x,y);}

// Array get by index number
var arrayGet = function(arr,index){
   return arr[index];
}

var arrayConcat= function(arrA, arrB){
   return Array.prototype.concat(arrA,arrB);
}

var arrayLen = function(arr){
    return arr.length;
}

// pick k unique random elements from an array
//  This is a recursive function, with safety counter
var addUniqueRandomElement = function(arr,k,acc,count){
   if (count <= 0 || acc.length < k){
      var x = sample(RandomInteger({n:arr.length}));
      var newAcc = isIn(x,acc) ? acc : acc.concat(x);
      var newCount = count - 1;
      addUniqueRandomElement(arr,k,newAcc,newCount);
   } else {
      return acc;
   }
}

var pickN = function(arr,k){
if (arr.length == 0){
      return [ ];
   } else {
      var indexes = addUniqueRandomElement(arr,k,[],20);
      return map(function(y){return arr[y];},indexes);
   }
}

var isIn = function(y,arr){
if (arr.length > 0){
     return any(function(x) { return x === y; }, arr);
  } else {
     return false;
  }
}

var flatten1 = function(arr){
   return reduce(function(x,acc){return Array.prototype.concat(x,acc);},[],arr);
}

// Remove duplicates from a sorted array
var removeDups = function(arr){
   var dedup = reduce(function(z,acc){return isIn(z,acc) ? acc : [z].concat(acc); },[],arr);
   return dedup;
}

// convert a binary array into an integer, for indexing purposes mainly
//  The focal decision should always be the last in the array
var convertBinaryToInt = function(arr){
   var n = arr.length;
   if (n > 0){
      // (n - x - 1) is necessary because mapIndexed scans from left to right, rather than right to left
      var decimalConversion = mapIndexed(function(x,y){return power(2,(n - x - 1)) * y;},arr);
      var result = reduce(function(x, acc) {return x + acc; }, 0, 
      decimalConversion);                                        
     return result;
   } else return 0;
}
///

//Actor and Decision functions
///fold:
//###########################################
// Actor functions for exploring decision alternatives
var invert = function(val){return val == 1 ? 0 : 1;}

// Takes an Array of decisions (binary), and inverts the element at the index
// returning a new array
var invertDecision = function(arr,i){
   var result = mapIndexed(function(x,y){return x == i ? invert(y) : y;}, arr);
   return result;
}

//###########################################
// Team decision variables
// A is the array of team decisions, randomly initialized.
var A = mapN(binaryFlip,N);

// This is an arrays of indexes for the Team as a whole
// Useful for functions that operate on the decision array A
var teamDecisionIndexes = mapN(function(x) {return x;},N);

//###########################################
// An Actor consists of a map that holds current state: 
//          1. decisions (indexes)
var createActor = function(start, count){
   var dIndexes = mapN(function(x){return x + start;},count);
return {decisions : dIndexes};
}


// Initialize an array of K actors
var actors = mapN(function(x) {return createActor(x * n,n);},K);
//###########################################
// Create an array of arrays, each with a random list of dependent decisions (indexes)
var generateRandomDependencies = function (x) {
   var count1 = sample(Poisson({mu:lambda}));
   var count = Math.min(n,count1);
   var otherDecisions = remove(x,mapN(function(x) {return x;},N)); // remove self
   var len = otherDecisions.length - 1;
   var result = sort(mapN(function(y){return otherDecisions[sample(RandomInteger({n:len}))];},count));
   return removeDups(result);
}

//hierarchical && // add one-way dependencies, to higher-numbered actors
//      tightlyCoupled ? 
// all decisions between actors are dependent

// These dependencies match those in Ethiraj and Levinthal (2004)
var generateOtherDependencies = function() {
   // for loose coupling, there are only two decisions with dependencies per Actor
   var decisionsWithDependencies = 
      flatten1(map(function(x){return pickN(x.decisions,2);}, actors) );
   return mapN(function(x){
      var m = n;
      var startIndex = Math.round(x / m - 0.5) * m;
      var actorIndex = Math.round(x / m - 0.5);
      var result = x < (N - m) ? 
         mapN(function(a){return (startIndex + m) + (a % m);},m)
         : [ ];
      var theseLooseDependencies = isIn(x,decisionsWithDependencies) 
                  ? pickN(result,1) : [];
      var result2 = tightlyCoupled ? result : theseLooseDependencies;
      return result2;
   }, N);
}

var otherDependencies = generateOtherDependencies();

var generateActorDependencies = function(){
   // this sets up mutual dependencies for all decisions with a single actor
   var intraActor = mapN(function(x){
      var actorIndex = Math.round(x / n - 0.5) * n;
      return remove(x, mapN(function(y){return actorIndex + (y % n) ;} ,n) );
   }, N);
return intraActor;
}

var combineAllDependencies = function(actorD,otherD){
   return mapIndexed(function(j,k){
      var arrB = otherD[j];
      return arrayConcat(k,arrB);}
      ,actorD); //
}

// Array of arrays which list decision dependencies (indexes)
var randomDependencies = map(function(x){return generateRandomDependencies(x);},teamDecisionIndexes);

var dependenciesA = generateActorDependencies();//randomDependencies;//

var dependencies = combineAllDependencies(dependenciesA,otherDependencies);

// Array of the counts of number of dependencies for each decision
var dependenciesCounts = map(function(x){return arrayLen(x) > 0 ? arrayLen(x) : 0;},dependencies);

// Array of the number of choice values needed for each decision, given the combinations 
//  of possible choise values for the focal decision and all its dependent decisions
var valueCounts = map(function(x){
   return Math.pow(2,1 + x);}, dependenciesCounts);

// For focal decision d, return an array of its dependent choice values, plus itself

var getChoiceValues = function(decisions,d){
var focalDependencies = dependencies[d];
var dependentChoices = map(function(x){return decisions[x];},focalDependencies);
return dependentChoices.concat(decisions[d]);
}
///

//###########################################
// Performance calculations -- set once during initialization
///fold:
var performances = map(function(x) {
   return mapN(function() {
      return sample(Uniform({a:0,b:1}));
      } ,x);
   },valueCounts) ;

// Stub
var computeDecisionPerformance = function (decisions,i){
var choiceValue = convertBinaryToInt(getChoiceValues(decisions,i) );
var perfPossibilities = performances[i];
return perfPossibilities[choiceValue];
}

// Given current decisions for individual Actors and Team as a whole
var computePerformance = function(decisions,decisionIndexes){ 
var num = decisionIndexes.length;
var sum_performance = reduce(function(x, acc) {return computeDecisionPerformance(decisions,x) + acc; }, 0, decisionIndexes );
var max_performance = reduce(function(x, acc) {return computeDecisionPerformance(decisions,x) > acc ?  computeDecisionPerformance(decisions,x) : acc }, 0, decisionIndexes );
var min_performance = reduce(function(x, acc) {return computeDecisionPerformance(decisions,x) < acc ?  computeDecisionPerformance(decisions,x) : acc }, Infinity, decisionIndexes );
return  {sum_performance : sum_performance
, avg_performance: sum_performance / num
, max_performance: max_performance
, min_performance: min_performance
};
}
///

//###########################################
// Actor choice function. Choose the explored (inverted) decision set 
//   if its performance exceeds that of the original decision set
///fold:
var isImprovement = function(original,exploration, decisionIndexes){
   return computePerformance(exploration,decisionIndexes).avg_performance > 
          computePerformance(original,decisionIndexes).avg_performance ;
}

var explore = function(actor,currentStepDecisions,nextStepDecisions){
   var i = n;
   var index = sample(RandomInteger({n:i}));
   var decisionToExplore = arrayGet(actor.decisions,index);
   // test using currStepDecisions, unaffected by other actors this step
   var proposedDecisions = invertDecision(currentStepDecisions,decisionToExplore);
   return isImprovement(currentStepDecisions,proposedDecisions,actor.decisions)  
   ? invertDecision(nextStepDecisions,decisionToExplore) 
   : nextStepDecisions;
}
///
//#############################################
// MAIN simulation function (recursive steps)

var step = function(count,a){
   if (count <= 0){
      return computePerformance(a,teamDecisionIndexes).avg_performance;
   } else {
      var nextA = reduce(function(x,acc) {return explore(x,a,acc);},a,actors);
   return  [computePerformance(a,teamDecisionIndexes).avg_performance].concat(step(count - 1, nextA) );
   }
}
// Run the simulation
var stepCount = 100;
var runCount = 1;
var results = step(stepCount,A);
// Print results
var tightCoupleVsLoose = tightlyCoupled ? "Tightly Coupled" : "Loosely Coupled";
var hierarchicalVsNonH = hierarchical ? "Hierarchical" : "Non-hierarchical";
print(hierarchicalVsNonH + " " + tightCoupleVsLoose + " Decisions");
print("N = " + N + "; K = " + K + "; n = " + n);
print ("Average number of dependencies = " + listMean(dependenciesCounts));
viz.line(mapN(function(t) {return t;},stepCount),results);
~~~~
