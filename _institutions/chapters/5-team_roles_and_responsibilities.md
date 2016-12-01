---
layout: chapter
title: Negotiating Team Roles and Responsibilities
description: "Actors self-organize into teams. The model uses recursive multi-actor reasoning and repeated social interaction in a somewhat non-cooperative game with incomplete and imperfect information."
status: work-in-progress
pct_complete: "5%"
last_modified: "2016-11-27"
is_section: true
---

This is a model of self-organizing teams -- specifically small teams of design engineers ("actors") -- but it could be any type of team doing any type of work. It draws on prevous models:

- [Affordances as Probabilistic Interrelations](1_affordances.html)
- [Individual Performance in a Functional Ecosystem](1a-individual_performance.html)
- [Evolving Team Structure](2-team_structure.html)
- [Model of Institutions Via Affordances](3c-model.html)
- [The Feast Table Model](/incentives/chapters/1-feast.html)

However, the model here goes beyond them to include higher-order reasoning about the tasks, each actor's capabilities, and probable outcomes given ways of assigning roles and responsibilities.  The base model involves actors reasoning privately.  The extended model adds *institutions* -- norms and rules -- that influence and constrain actor choices and behaviors.

The goal of this model is to study the effects of team member migration.  Actors on a given team become aculturated to that team, including its institutions.  When an actor moves to a new team with different culture and institutions, conflicts can arise. Is this conflict positive or negative?  How does it affect team versatility and creativity?  Is it a temporary disturbance or a permanent change?  If new members challenge or reconfigure the team's 'institutions, are the effects positive, negative, or mixed?

## Social Learning and Performance Cycle

Here is a sketch of the cycle of learning and performance that we will be modeling:

1. A team forms by recruiting and selecting individual designers based on their relevant skills and experience, compared to perceived needs and roles; 
2. Team members decide on roles and responsibility by some governance/social process.
3. The team starts working together and team members interact with each other, and also with any explicit rules and norms for the team; 
4. Individual team members learn by doing as they perform their daily work, and also learn through explicit instruction and through social interaction.
5. Gradually team members become acculturated in the team’s norms and patterns, which shape and are shaped by individual learning. 
6. Along the way (i.e. during steps 1 through 5) one or more “interactional frames” are developed (maybe tacitly) that define an abstract structure and give meaning to the way the team works (both positive and negative aspects); 
7. These interactional frames become institutionalized, and some team members become strongly affiliated with them (or against them, if they are perceived to be failures).
8. Team members migrate to new teams (step 1), carrying with them everything they have learned and internalized from this team.

## Actor Interests

Contrary to Neo-classical Economics and modern Game Theory, we will *not* be modeling the interests of actors using a generalized/aggregate subjective utility metric.  Instead, we will adopt the model situational cognitive + social "interests", as developed in the [The Feast Table Model](/incentives/chapters/1-feast.html).  In some cases it will work like subjective utility maximization but other times it won't.

## Constructs from Functional Ecosystems

We'll use the definitions of constructs from Functional Ecology described in [Model of Institutions Via Affordances](3c-model.html).  These include (alphabetically):

- Affordances
- Capabilities
- Functions
- Routines
- Situations

## Actor Reasoning about their Functional Ecosystem

The key feature of this model is Actor reasoning about their functional ecosystem in two situations: 1) negotiating a division of responsibilities (a mapping of to Actors) and 2) negotiating resolutions to design decision conflicts that arise during a design project.



   
   
   
   
   
   
   
<pre><code class="language-webppl">


// batch sizes
var numLines = 2000;
var numJoints = 10000;
var numFrames = 500;

var marginOfError = 0.03;

var maxLineLength = 1.41421356237 * (1 + marginOfError); // sqrt(2)

// "Physics" of Lines, Joints, and Assembled Products
///fold:
// Feasable line lengths
var a = 1.41421356237 // sqrt(2) 
var b = 1.20185042515 // sqrt(1 + (2/3)2)	
var c = 1.05409255339 // sqrt(1 + (1/3)2)
var d = 1.0
var e = 0.94280904158 // sqrt((2/3)2 + (2/3)2) 
var f = 0.7453559925  // sqrt((1/3)2 + (2/3)2) 
var g = 0.47140452079 // sqrt((1/3)2 + (1/3)2)	
var feasableLines = [a,b,c,d,e,f,g];
var feasableLabels = ["a","b","c","d","e","f","g"];

// Line configurations
var aLines = ["AG", "DJ"];
var bLines = ["AF","AH","BG","CJ","DI","DK","EJ","GL"];
var cLines = ["AE","AI","BH","BJ","CG","CI","DH","DL","EK","FJ","FL","GK"];
var dLines = ["BI","CH","EL","FK"];
var eLines = ["BF","CK","EI","HL"];
var fLines = ["BE","BK","CF","CL","EH","FI","HK","IL"];
var gLines = ["BL","CE","FH","IK"];
var configurations = [aLines,bLines,cLines,dLines,eLines,fLines,gLines];

// joint angle requirements
var aAngles = [45,45];
var bAngles = [33.69, 56.31];
var cAngles = [18.43, 71.57];
var dAngles = [90,90];
var eAngles = [45,45];
var fAngles = [26.57, 63.43];
var gAngles = [45,45];
var angles = [aAngles,bAngles,cAngles,dAngles,eAngles,fAngles,gAngles];

// Number of configurations for each feasable length
var maxA = 2;
var maxB = 8;
var maxC = 12;
var maxD = 4;
var maxE = 4;
var maxF = 8;
var maxG = 4;

var convertToCannonical = function(arr){
  var mapR1 = {
    "A":"D",
    "B":"E",
    "C":"F",
    "D":"G",
    "E":"H",
    "F":"I",
    "G":"J",
    "H":"K",
    "I":"L",
    "J":"A",
    "K":"B",
    "L":"C"
  };
  var mapR2 = {
    "A":"G",
    "B":"H",
    "C":"I",
    "D":"J",
    "E":"K",
    "F":"L",
    "G":"A",
    "H":"B",
    "I":"C",
    "J":"D",
    "K":"E",
    "L":"F"
  }
  var mapR3 = {
    "A":"J",
    "B":"K",
    "C":"L",
    "D":"A",
    "E":"B",
    "F":"C",
    "G":"D",
    "H":"E",
    "I":"F",
    "J":"G",
    "K":"H",
    "L":"I"
  }
  var result1 = sort(map(function(str){
     return sort(map(function(x){return mapR1[x];},str.split(''))).join('');},
    arr));
  var result2 = sort(map(function(str){
     return sort(map(function(x){return mapR2[x];},str.split(''))).join('');},
    arr));
  var result3 = sort(map(function(str){
     return sort(map(function(x){return mapR3[x];},str.split(''))).join('');},
    arr));
  var cannonical = sort([arr,result1,result2,result3]);
  return cannonical[0];
}

///

// Helper functions
///fold:

// replace the ith element in arr with val, returning new array
var replaceIndexed = function(i,val, arr){
  return i < 0 || i >= arr.length || val == null 
    ? arr
    : mapIndexed(function(j,x){return j==i? val : x}, arr);
}
var flatten = function(arr){
  return [].concat.apply([], arr);
}

var head = function(arr){
  var limit = 10;
  return remove(null,mapN(function(i){
    return i < arr.length
               ? arr[i]
               : null},
      limit));
}

var drawAgain = function(arrLen, results, count){
  if (count <= 0){
    return results;
  } else {
    var draw = sample(RandomInteger({n:arrLen}));
    var isNotNew = any(function(x){return draw==x;}, results);
    var newResults = isNotNew 
            ? results
            : Array.prototype.concat(results, draw);
    var newCount = isNotNew
            ? count
            : count - 1;
    return drawAgain(arrLen,newResults, newCount);
  }
}

var drawNindexed = function(n, arr){
  // return n randomly selected elements and their indexes from arr
  var drawIndexes = drawAgain(arr.length, [ ],n);
  return {value: map(function(x){return arr[x];},drawIndexes),
         indexes: drawIndexes};
}

var drawN = function(n, arr){
  // return n randomly selected elements and their indexes from arr
  var drawIndexes = drawAgain(arr.length, [ ],n);
  return map(function(x){return arr[x];},drawIndexes);
}

var removeIndexed = function(i, arr){
    return remove(null,mapIndexed(function(j,x){
      return j === i ? null : x;}, arr));
}

var removeIndexedArray = function(indArr, arr){
    var indexes =  indArr instanceof Array ? indArr : [indArr];
    return remove(null,mapIndexed(function(j,x){
      return indexes.includes(j) ? null : x;}, arr));
}

var ChiSquare = function(n){
  // "ChiSquare is a special case of the gamma distribution"
  // http://www.math.uah.edu/stat/special/ChiSquare.html
  //"For n > 0, the gamma distribution with shape parameter n/2 
  // and scale parameter 2 is called the chi-square distribution 
  // with n degrees of freedom."
  return Gamma({scale: n/2, shape: 2})
}
///
//-------------------------------------
// line production
// create an array of lines of various lengths
var lines = repeat(numLines, function(){return maxLineLength * beta(1,1);});

//-------------------------------------
// joint production process
var makeJoint = function(){
  var nominalAngle = sample(RandomInteger({n:91})); 
  // uniform on 0 to 90 degrees;
  var sigma = sample(ChiSquare(5));
  var minAngle = Math.max(0,nominalAngle - 2*sigma);
  var maxAngle = Math.min(90,nominalAngle + 2*sigma); 
  var minAngleNorm = (minAngle > maxAngle)  // make sure min < max
           ? maxAngle
           : minAngle;
 var maxAngleNorm = (minAngle > maxAngle) 
           ? minAngle
           : maxAngle;
  
  return {min: minAngle,
         max: maxAngle}
}
// joint production
var joints = repeat(numJoints,makeJoint);

//-------------------------------------
// return line labels corresponding to elements in arrRef == arrTest +/- MOE
//       (Margin of Error)
var findLineMatches = function(arrRef, arrTest, MOE, labels){
  var matchingIndexes = sort(remove(null,
                 map(function(x){
                   return remove(null,mapIndexed(function(i,y){
                      return x < y * (1 + MOE) && x > y * (1 - MOE)
                             ? i : null; },arrRef))[0];}, arrTest))
                             );
  return matchingIndexes.length > 0 
     ? {labels : map(function(i){return labels[i];},matchingIndexes),
        indexes: matchingIndexes}
     : {labels : null,
         indexes: null};
}


var findJointMatches = function(anglePair, acc){
  if (!acc.successful){ // if it failed once, then don't process more matches
    return {joints: acc.joints,
        indexes: acc.indexes,
        available: acc.available,
        successful: false
       }
  } else {
  // find matching joints for *both* angles, otherwise return null
  var matchA = remove(null,mapIndexed(function(i,x){
    return anglePair[0] >= x.min && anglePair[0] <= x.max
         ? i
         : null
       },acc.available)) ;
  // nullify this match to avoid duplicates
  var matchAindex = matchA.length > 0 ? matchA[0] : null;
  var newJointsArr = matchAindex != null 
       ? replaceIndexed(matchAindex,{min:-1,max:-1},acc.available)
       : acc.available;
  var matchB = remove(null,mapIndexed(function(i,x){
    return anglePair[1] >= x.min && anglePair[1] <= x.max
         ? i
         : null
       },newJointsArr));
  var matchBindex = matchB.length > 0 ? matchB[0] : null;
  var newJointsArr = matchBindex != null 
       ? replaceIndexed(matchBindex,{min:-1,max:-1},newJointsArr)
       : newJointsArr;
  return matchA.length > 0 && matchB.length > 0 
     ? {joints: acc.joints.concat([acc.available[matchAindex],acc.available[matchBindex]]),
        indexes: acc.indexes.concat([matchAindex,matchBindex]),
        available: newJointsArr,
        successful: acc.successful
       }
     : {joints: acc.joints,
        indexes: acc.indexes,
        available: acc.available,
        successful: false
       };
  }
}

// NEW FUNCTION -- COMPOUND LINES
  // if there are any joints allowing 0° joint,
  //   check if one or more lines can be combined
  //   to build a feasable line

// special purpose function
//  "record" is an accumulator, with
// properties: "result", "config", "droppedIndexes" and "counter"
var drawOneAccumulate = function(i, record){
  // if no config options to draw, then add to droppedIndexes
  if (record.config[i].length == 0){
    return {results: record.results,
            droppedIndexes: record.droppedIndexes.concat(record.counter),
            counter: record.counter + 1,
            config: record.config};
  } else {}
  var draw = sample(RandomInteger({n:record.config[i].length}));
  var newResult = record.config[i][draw];
  var newConfig = mapIndexed(function(j,x){
                   i == j 
                     ? removeIndexed(draw,x)
                     : x
                   },record.config);
  return {results: record.results.concat(newResult),
          droppedIndexes:record.droppedIndexes,
          counter: record.counter + 1,
         config: newConfig};
}

// Assembly process
var assemble = function(aLines, aJoints){
  // match as many lines as possible to feasable lengths
  var matchedLines = findLineMatches(feasableLines,
                                 aLines.value, 
                                 marginOfError,
                                 feasableLabels);
  var isViable =  matchedLines != null 
     &&  matchedLines.labels != null
     && matchedLines.indexes != null
     &&  matchedLines.labels.length > 0
     &&  matchedLines.indexes.length > 0
  var assembly = isViable
         ? reduce(function(i,acc){
                 return drawOneAccumulate(i,acc);}
                 , {results: [],
                    droppedIndexes: [],  // index # of any lines dropped
                                         //   b/c no available slots
                    counter: 0,
                    config:configurations}
                  ,matchedLines.indexes)
        : null; 
  var isViable = isViable && assembly.results.length > 0
            && assembly.droppedIndexes.length < matchedLines.indexes.length;
  // remove any lines that couldn't be positioned (no available slots)
  var postionedLinesIndexes = isViable 
            ? removeIndexedArray(assembly.droppedIndexes,matchedLines.indexes)
            : null;
  var anglePairs = isViable 
       ? map(function(i){return angles[i];},postionedLinesIndexes)
       : null;
    var matchedJoints = isViable 
       ? reduce(function(x,acc){
          return findJointMatches(x,acc);}, 
                {joints:[],
                  indexes:[],
                  available:aJoints.value,
                  successful: true},
                anglePairs)
       :  {joints:[],
          indexes:[],
          available: aJoints.value,
          successful: false} ;
    
  var hasViableJoints = matchedJoints.successful;  
  // if there are viable joints and total number of matched lines > 0 
  //    then isViable = true
  var isViable = isViable && hasViableJoints;
 
  var usedLinesIndexes = isViable 
        ? map(function(i){
             return aLines.indexes[i];},matchedLines.indexes)
        : null; 
  // "internalIndexes" map to the aJoints index array
  //   thus, needs to be dereferenced before returning result
  //   (used to remove these indexes from the available joints)
  var internalIndexes = isViable
        ? matchedJoints.indexes 
        : null;
  var usedJointsIndexes = isViable
        ? map(function(i){return aJoints.indexes[i];},internalIndexes)
        : null;
  return isViable 
       ? {product: convertToCannonical(assembly.results),
         usedLineIndexes: usedLinesIndexes,
         usedJointIndexes:usedJointsIndexes}
       : null;
}

// prodution process
var mixingVat = function(availLines, 
                         availJoints, 
                         numAvailFrames, 
                         finishedProducts,
                         count){
  var K = 10;
  if (count <= 0 || numAvailFrames == 0
      || availLines.length < K 
      || availJoints.length < K * 5){
    return {
      unusedLines: availLines,
      unusedJoints: availJoints,
      numUnusedframes: numAvailFrames,
      products: finishedProducts
    };
  } else {
    
    // randomly draw K lines
    var tLines = drawNindexed(K, availLines);
    // randomly draw K * 5 joints
    var tJoints = drawNindexed((K*5), availJoints);
    
    // test to see if they can be assembled into a viable products
    var assembledProduct = assemble(tLines, tJoints);
    var isViable = assembledProduct != null ;
  
    
    // if yes, then add the product to finishedProduct
    var newFinishedProducts = isViable
        ? Array.prototype.concat(
                           finishedProducts, [assembledProduct.product])
        : finishedProducts;
    // and remove the drawn lines, joints, and frames from avail lists
    // if not then make no changes

    var newAvailLines = isViable
        ? removeIndexedArray(assembledProduct.usedLineIndexes,availLines)
        : availLines;
    var newAvailJoints = isViable
        ? removeIndexedArray(assembledProduct.usedJointIndexes,availJoints)
        : availJoints;
    var newNumAvailFrames = isViable
        ? numAvailFrames - 1
        : numAvailFrames;
    // call mixingVat() recursively
    return mixingVat(newAvailLines,
                     newAvailJoints,
                     newNumAvailFrames,
                     newFinishedProducts,
                     count - 1
                     );
  }
}

var result = mixingVat(lines, joints,numFrames,[],500 );

print("# products produced = " + result.products.length);
var prodLen = map(function(x){return x.length;},result.products);
var maxLen = Math.max.apply(null,prodLen);
viz.hist(prodLen,{numBins:maxLen});
var prodStrings =map(function(x){return x.join("-");},sort(result.products));
viz.hist(prodStrings);

</code></pre>

## More

<div class="work_in_progress" markdown="1">

**To Do**

1. Add characteristics to each task that are interpreted as signs, symbols, and signals during task performance.
1. Add to actors: differential skills in performing tasks (capabilities + routines)
1. Add to actors: conception of their capabilities + routines, related to "getting the job done"
    * Maybe this could be in some mental frame construct
1. Add memoization to performance landscape to save time on initialization and allow larger problems
1. Add performance correlation between tasks according to the similarity of their characteristics.

</div>


## Greneralized Capabilities from Design Thinking

<div class="work_in_progress" markdown="1">

- Framing
- Anticipating Implications (Benefits, Interests, Risk, Uncertainty, etc.)
- Choices
- Technical Production
    - Specification, description, and visualization
    - Proposals and prototypes
    - Producing and revising design artifacts
    - Identifying and resolving conflicts

</div>


<div class="work_in_progress" markdown="1">

**To Do**

</div>

<div class="work_in_progress" markdown="1">

## Basic Model






## Analysis



[TBD]

</div>

____

## Endnotes

<p class="note"><span id="f1">1.</span><a href="#a1">↩</a> End note 1</p>

____

## References

<p class="hangingindent">
cite:sosa_computational_2005
</p>







