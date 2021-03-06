---
layout: chapter
title: Negotiating Team Roles and Responsibilities
description: "Actors self-organize into teams. The model uses recursive multi-actor reasoning and repeated social interaction in a somewhat non-cooperative coordination game with incomplete and imperfect information."
status: work-in-progress
pct_complete: "20%"
last_modified: "2016-12-07"
is_section: true
---

This is a model of self-organizing teams -- specifically small teams of design engineers ("Designers") -- but it could be any type of team doing any type of work. 

The goal of this model is to study the effects of Designer migration.  Actors on a given team become socialized and aculturated to that team, including its institutions.  When an actor moves to a new team with different culture and institutions, conflicts can arise. Is this conflict positive or negative?  How does it affect team versatility and creativity?  Is it a temporary disturbance or a permanent change?  If new members challenge or reconfigure the team's 'institutions, are the effects positive, negative, or mixed?

The focus of the model is narrow: the *framing process* at the start of a design project where Designers interact, discuss, and ultimately come to some agreement on what sort of project this is, what are the goals, who does what (roles and responsibilities), and something about how design work will proceed.  Note that this is *not* a task of creating a shared mental model or shared perceptions (thought that may happen).  Instead, the design team only needs to "create *equifinal meaning* from which organized action can follow" refp:donnellon_communication_1986.


## Model Description

During the course of every design project, each member builds perceptions of the project and its outcomes.  All Designers can generate one or more "frames" (see below) that is consistent with but not identical to their perceptions.  When a new team forms, each Designer brings their past experience and relevant "frames".

### Framing process

The framing process is modeled as a sequential, iterative bargaining game.  Each round, Designers are random selected to propose a *frame* for the design project. The other Designers evaluate the proposed frame and either accept it or reject it.  For a frame to be accepted, all Designer must vote "accept". If no frame is accepted in a given round, the game repeats until a frame is acceptable to all Designers or the iteration limit is reached.

### "Frames" as Messages

In the interactional co-construction process of framing refp:dewulf_disentangling_2009, "*frames* are communicative devices that individuals and groups use to negotiate their interactions". In our model, frames are a structured messages that can be interpreted/decoded as a *partial/ provisional specification* for a project (i.e. a "sketch", reft:cross_design_2011, p 78, 120):

1. *What?* -- (required) **boundary** specifications $$B$$: what is/is not included for consideration in the project
    - *Scoping* -- elements of frame that are included, e.g. purpose, team design
    - *Naming* -- codifying the relevant phenomena
2. *Why?* -- (optional) **purpose** specifications $$P$$ 
    - *Problem* -- problem/conflict specification: what sort of problem is this? What aspects are problematic?
    - *Solution* -- solution criteria and concepts: What defines a good or acceptable solution? What is the space of solutions?
    - *Value* -- What are the goals and metrics? What good will be achieved and for whom?
4. *How?* -- (optional) **team design** specification in FBS ontology $$F$$:
    - *Relevant Knowledge* -- (optional) first principles, evidence
    - *Team Structure* -- (optional) declarative rules: project parameters, organization structure, roles, responsiblities 
    - *Team Behaviors* -- (optional) procedural rules: processes, methods, tools, design artifacts, norms, rules, contingencies, etc.
    - *Team Functions* -- (optional) teleologic rules: the functions that need to be performed in order to fulfull the goals, including performance metrics and dependencies/interrelations.
5. *Beliefs* -- (optional) **value** statements $$V$$: assertions of anticpated benefits (or detriments) of the frame.  For example, "low risk of exceeding budget" -- including coherence and completeness implications.

Since most of these elements are optional, a frame-as-message may be more or less detailed -- "sketchy".  Any elements that are omitted from a given frame can be filled in by individual Designers using whatever default or prior values they might draw on.

### Interpretations and Implications of Frames

Frames are shared information, but the interpretations of each Designer are private and individualistic.  The implications of interpretation ... [ADD MORE HERE]

[ADD MORE HERE] and it serves two purposes for Designers individually: 1) to be compared and contrasted with other frames, and perhaps blended to produce new frames; and 2) to serve as a basis for evaluation, either by a) pattern recognition; b) analogy; or c) thought experiment.

All Designers have capabilities to a) generate their own frames, perhaps by building on other member's frames; b) interact with frames (compare/contrast, blend); and c) evaluate frames.  

All Designers also have a frame acceptance criteria, which is some individualistic convex combination of individual success and team success.

### Effect of Designer Experience and Expertise on Frame Evaluation

Due to past experience, Designers have different *types* of experience and different *levels of expertise*.  To the extent that the proposed frame is a close match to their past experience, the Designer will have a rich capability to evaluate the frame, especially through pattern recognition.  If the frame is a intermediate match, then the designer would need to evaluate by analogy and/or thought experiment.  If the frame is a poor match with past experience, the designer either a) reaches no evaluation (this round) and follows the lead of more experienced designers in later rounds; or b) guesses at an evaluation, perhaps through a partial thought experiment.

### Framing Process Leads to Priming and Situating

Finally, through the frame evaluatation process, each Designer is both *primed* and *situated*.  "Primed" means that they have formed expectations and they have brought forward relevant doman knowledge.  "Situated" means that they have activated the relevant *cognitive schema* appropriate to their initial tasks, their role and responsibilities, and team norms and rules. The cognitive schema includes conceptual structures, mental models, and appraisals based on perceptions.  Finally, being "situated" means activating selective attention.

Of course, all this may be provisional and is subject to revision and reflection as the project unfolds, especially when unforseen problems, conflicts, or opportunities arise.

### Frame Message Encoded as Binary String

For modeling purposes we will pre-specify the coding scheme for all possible frames (i.e. messages in a framing process) in the form of a binary string (reft:page_two_1996, reft:hong_problem_2001, reft:ethiraj_bounded_2004).

The frame-as-binary-string ("frame string") will be encoded with ordered elements ("bits") for the presence or absence of each frame specification alternative.  The set of all possible frame binary strings of length $$n$$ is denoted by $$S = \{0, 1\}^n$$.  Each element in a string is referred to as a bit. The $$i$$-th bit of a string $$s$$ is denoted by $$s_i$$. Letting $$1$$ denote “yes” and $$0$$ denote “no”, a binary string can denote the set of potential projects to be undertaken refp:page_two_1996. 

For a hypothetical example, the boundary specification $$B$$ might be encoded in five bits $$\{b_1,b_2,b_3,b_4,b_5\}$$:

> $$b_1$$ : Market acceptance (i.e. sales and market share) <br/>
> $$b_2$$ : Problem definitions <br/>
> $$b_3$$ : Solution concepts  <br/>
> $$b_4$$ : Understanding customer behavior/motivations/needs  <br/>
> $$b_5$$ : Team structure, functions, and behaviors <br/>

Using this template the string $$\{1,0,0,0,1\}$$ would encode the partial message: "In scope for this frame: 1) Market acceptance and 5) Team structure, functions and behaviors".

The frame string $$S$$ is the concatenation of the frame elements: 

$$ 
S = \{B,P,F,V\}
$$

If the bit length of each element is $$\{n_b,n_p, n_o, n_v\}$$, with $$n_b + n_p + n_f + n_v = N$$, then the full string is:

$$ 
S = \{b_1,b_2,\ldots,b_{n_b},p_1,p_2,\ldots,p_{n_p},f_1,f_2,\ldots,f_{n_f},v_1,v_2,\ldots,v_{n_v}\}
$$

For the computational model, below, frame strings $$S=\{B,P,F,V\}$$ consist of $$N = 16$$ bits $$\{n_b,n_p, n_f, n_v\} = \{4,4,4,4\}$$, defined as follows:

> $$B = \{b_1,b_2,b_3,b_4\}$$ <br/>
> $$b_1$$ : Problem specification $$P_p$$  <br/>
> $$b_2$$ : Solution specification $$P_s$$ <br/>
> $$b_3$$ : Design approach $$F_a$$<br/>
> $$b_4$$ : Team structure and behavior $$F_t$$<br/>

> $$P = \{P_p,P_s\}; \ \ \ P_p = \{p_1,p_2\}; \ \ \ P_s = \{p_3,p_4\};$$ <br/>
> $$p_1$$ : Problem includes market acceptance <br/>
> $$p_2$$ : Problem includes customer behavior/motivations/needs <br/>
> $$p_3$$ : Solution based on *ideal* <br/>
> $$p_4$$ : Solution based on *improvement* <br/>

> $$F = \{F_a,F_t\}; \ \ \ F_a = \{f_1,f_2\}; \ \ \ F_t = \{f_3,f_4\}; $$ <br/>
> $$f_1$$ : Top-down design approach <br/>
> $$f_2$$ : Bottom-up design approach  <br/>
> $$f_3$$ : Function: influence customer behavior/motivations/needs  <br/>
> $$f_4$$ : Behavior: use formal design methods <br />

> $$V = $$ <br/>
> $$v_1$$ : ↓ Schedule <br/>
> $$v_2$$ : ↑ Market acceptance <br/>
> $$v_3$$ : ↑ Customer behavior/motivations/needs  <br/>
> $$v_4$$ : ↓ Intra-team conflict <br/>

### Dependency Matrix 

There is usually meaningful and significant dependence between elements in a frame, formalized as a dependency matrix refp:ethiraj_bounded_2004.  The nature of the dependence may be functional, logical, conditional, parametric, or it may invoke a default interpretation when a dependent element is missing.  This dependence matrix is not part of the encoded message. Instead, it is generated by each Designer as part of the frame interpretation/evaluation process.  The dependency matrix is used by Designers to construct meaning via a *semiotic process* which, fo simplicity, will be modeled as a "black box". For even more simplicity, the dependency matrix will be pre-specified and constant, and will be initialized under experimental control.

### Designer-specific Interpretation and Implications

Following reft:hong_problem_2001, each Designer will include state variables for *perspective* $$M$$  and *heuristics* $$A$$, as follows. 

A Designer's "perspective" $$M$$ is the internal encoding of frames as binary strings.

> A **perspective** $$M : S \rightarrow S$$  is one–to–one and onto.
    
As a mapping, "perspective" is effectively a set of path-dependent representations (codification rules) that "chuck" the frame strings into semantically equivalent classes. A perspective may not be defined over all of $$S$$, so the Designer need not be able to represent all possible frame strings. A perspective also may be many-to-one, i.e. more than one set of frame string elements are mapped to the same representation in the internal language.

(a.k.a. path-dependent abstraction rules that guide comparing/contrasting and blending of frames).

A Designer's *heuristics* $$A$$ define similarity neighborhoods between frame strings.

> A **heuristic** $$A$$ is a finite collection of mappings, $$\{\phi_1, \phi_2, ..., \phi_m\}$$, each a mapping from the set $$S$$ to $$S$$, i.e., $$A = \{\phi_1, \phi_2, ..., \phi_m\}$$ and for any $$k = 1,2,...,m;  \phi_k :S \rightarrow S$$.

For the binary string case, reft:hong_problem_2001 define a *flipset heuristic*, based on the elementary *flipset*, which is a mapping $$\phi : S \rightarrow S$$, where  $$\phi \subset N$$, $$\phi(s) = y$$ where $$y$$ is defined according to the following *flipset* rule:

$$
y_i =  
\Big\{\begin{matrix}
  1 - s_i  : i \in \phi\\
  s_i  : i \notin \phi
 \end{matrix}
$$

> A **flipset heuristic** $$A_f = \{\phi_i,\phi_2,\ldots,\phi_k\}; k \geq 1$$

We can think of the flipset heuristic $$A_f$$ as exhaustive search of nearest neighbors, given the chucking representation of perspective $$M$$.

To this we add *dependent-flipset heuristic* which involves toggling all dependent elements $$D$$ of $$\phi$$, using this *dependent-flipset* rule:

$$
y_i =  
\Big\{\begin{matrix}
  1 - s_i  : i \in D(\phi)\\
  s_i  : i \notin D(\phi)
 \end{matrix}
$$

> A **dependent-flipset heuristic** $$A_d = \{D(\phi_i),D(\phi_2),\ldots,D(\phi_k)\}; k \geq 1$$

The dependent-flipset heuristic $$A_d$$ takes bigger leaps by skipping over "non-sensical" frame strings.  I put this in quotes, because there *may* be creative possibilities in those "nonsense" frame strings, but we won't deal with them here.

Finally, we also will define an *analogical-flipset heuristic* $$A_a$$, which is a masked version of the *dependent-flipset heuristic* $$A_d$$.  The mask is a string of length $$n$$ with elements $$m$$ and $$1$$: $$L=\{m,1\}^n$$, using this mask rule with removes selected elements from the flipset:


$$
m_i \times \phi_i = \emptyset
$$

$$
L\phi_i = \Big\{\begin{matrix}
  \emptyset  : i \in L \\
  \phi_i  : i \notin L
 \end{matrix}
$$

$$
y_i =  
\Big\{\begin{matrix}
  1 - s_i  : i \in D(L\phi) \\
  s_i  : i \notin D(L\phi)
 \end{matrix}
$$

> A **analogical-flipset heuristic** $$A_d = \{D(L\phi_i),D(L\phi_2),\ldots,D(L\phi_k)\}; k \geq 1$$

## Computational Model

<pre> <code class="language-webppl">
// Wet Grass causal model

///fold:
// Helper function
var mapToString = function(map){
  var keys = Object.keys(map);
  var mapString = reduce(function(x,acc){
    var sep = acc.length == 0 ? "" : ", "
    return acc.concat(sep + x + " : " + map[x] )
  },"",keys );
  return "{" + mapString + "}";
}

// Generative model
var grassGetsWet = function(){
  var cloudy = flip(0.5);
  var rain = cloudy ? flip(0.8) : flip(0.2);
  var sprinkler = cloudy ? flip(0.1) : flip(0.5);
  var wetGrass = rain && sprinkler 
                   ? flip(.99)  
                   : (rain && !sprinkler) || (!rain && sprinkler) 
                        ? flip(0.9) 
                        : flip(0.0001); // what is the prob. of some 
                                        //   other cause, not in model?
                              // was flip(0.0); // impossibility
  return {wetGrass: wetGrass,
          rain: rain,
          sprinkler: sprinkler,
          cloudy: cloudy};
}

// Generalized inference function given any combination of evidence
var inference = function(evidence){
  var applyEvidence = Infer({ method: 'enumerate' }, function(){
  var trial = grassGetsWet();
   if ("sprinkler" in evidence){
      condition(trial.sprinkler === evidence.sprinkler);
   }
   if ("rain" in evidence){
      condition(trial.rain === evidence.rain);
   }
   if ("cloudy" in evidence){
      condition(trial.cloudy === evidence.cloudy);
   }
   if ("wetGrass" in evidence){
      condition(trial.wetGrass === evidence.wetGrass);
   }
   return {rain: trial.rain,
           cloudy: trial.cloudy,
           sprinkler: trial.sprinkler,
           wetGrass: trial.wetGrass,
          };
});
  
  return applyEvidence;
}
///

// ENTER EVIDENCE HERE in this form:
//      { cloudy : true,
//          rain : false }
// Leave out any entry where there is no evidence

var evidence = {cloudy : false,
               wetGrass: true};

var evidenceString = mapToString(evidence);

// Output
print("Given evidence = " + mapToString(evidence) + "...");
var allCombinations = inference(evidence);

viz.table(allCombinations);

// Extract marginal probabilities:
///fold:
var results = {
  rain: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.rain;
                   }
                 ).score(true) 
               ),
  cloudy: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.cloudy;
                   }
                 ).score(true) 
               ),
  wetGrass: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.wetGrass;
                   }
                 ).score(true) 
               ),
  sprinkler: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.sprinkler;
                   }
                 ).score(true) 
               )
}
///
  
print("... Pr(rain) = " + results.rain);
print("    Pr(cloudy) = " + results.cloudy);
print("    Pr(wetGrass) = " + results.wetGrass);
print("    Pr(sprinkler) = " + results.sprinkler);
</code></pre>

### Updating Model Parameters






<pre><code class="language-webppl">

// Wet Grass causal model 2

// In this setting, evidence arrives in a time sequence
// As evidence arrives, we want to adjust to the model parameters.
// This is basically like estimating the bias in a coin after each toss.

// Step 1. Make an inference based on the current model + evidence
// Step 2. Update model parameters conditioned on the 
//    cumulative to that point in time

//************************
// UTILITY FUNCTIONS
//************************
//   count(item,arr); takeN(n, arr); shuffle(arr) 
///fold:
// count: count the number of "item" in "arr"
var count = function(item,arr){
    if (arr.length === 0 || item.length === 0){
       return 0;
    } else {
      return filter(function(x){return x == item;},arr).length;
    }
}

// takeN: return the first "n" elements of "arr"
var takeN = function(n, arr){
    return n <= 0 || arr.length === 0
        ? 0
        : remove(null, mapIndexed(function(i,x){
                                  return i < n ? x : null},arr));
}

var removeIndexed = function(i, arr){
    return remove(null,mapIndexed(function(j,x){
                                  return j === i ? null : x;}, arr));
}

// add random elements from array to an accumulator
//  This is a recursive function, with safety counter
var addRandomElement = function(arr,acc,count){
    if (count >= 0 && arr.length > 0){
        var x = sample(RandomInteger({n:arr.length}));
        var newAcc = acc.concat(arr[x]);
        var newArr = removeIndexed(x,arr);
        var newCount = count - 1;
        addRandomElement(newArr,newAcc,newCount);
    } else {
        return acc;
    }
}

// shuffle: return an array in random order
var shuffle = function(arr){
    return addRandomElement(arr,[],arr.length);
}
///

//************************
// EXPERIMENT PARAMETERS
//************************

var K = 10; // total number of observations in sequence
var numH = 7; // number of Heads in all observations in the trial
var N = 10; // number of (randomly selected) observations in observedData

//************************
// OBSERVED DATA ("EVIDENCE")
//************************
var trial = mapN(function(x){return x < numH ? "H": "T";},K);
var observations = shuffle(trial);
var observedData = takeN(N,observations);
var obsH = count("H", observedData);

//************************
// PRIOR KNOWLEDGE
//************************
// Prior distribution over (0,1), 
//  with mean and "informativeness" parameter in (0,1)
///fold:
// Uses a Beta distribution, we smoothly transition from uniform distribution
//  (uninformative) to Gaussian-like (informative), with the middle ground
//  being "somewhat informative" Beta(2,2), assuming mean of 0.5
// Mean is adjusted by informativeness parameter if < 0.5

// First shape parameter "a" ranges from 1 to 3, 
//       where 1 = uniform distribution
// Second shape parameter is derived from "a" and "mean"
///
var priorPr = function(mean,informative){
  var a = 1 + informative * 2
  var adjMean = informative < 0.5 
      ? (1 - (informative * 2)) * 0.5 + (informative * 2) * mean
      : mean;
  var b = (a * ( 1 - adjMean ) ) / adjMean;
  return beta(a,b);
}


//************************
// MODEL and INFERENCE
//************************

// toss: function that returns "H" with probability r, otherwise "T"
var toss = function(r) {return flip(r) ? "H" : "T";}

// We'll use MCMC inference, since our variable of interest is continuous with
//  finite support (0,1), and without multiple modes or other complications.
var mcmcParms = {method: 'MCMC', kernal : "MH", samples:1000, burn: 200};
var posterior = function(prior) {
    return Infer(mcmcParms,
        function () {
            //  p is defined as the probability of "H" on a single toss, 
            //  in the range (0,1). p is our variable of interest 
            var p = prior();
            // data: N random draws from toss(p), given random draw of p
            var data = repeat(N,function(){return toss(p);});
            // Count the number of heads, since we don't care about the order
            var dataH = count("H",data);
            // Upweight likelihood when # of "H" in data = # of "H" in observed
    //        observe(Gaussian({mu: dataH, sigma: 0.2}), obsH);
            // ^^^^^ try commenting this out, and uncomment "factor(...)" below

    // "factor()" is a second method for weighting likelihood.
    //   This is a "softer" method because it downweights non-matching
    //   execution traces by an amount proportional to the number 
    //   of tosses, as opposed to downweight by -Infinity, 
    //   as in condition() and observe().
    //   The justification is that with few tosses, you have 
    //   less justification for modifying your prior beliefs
     factor (dataH == obsH ? 0 : -( N / 2.5));
    //  ^^^^^ try uncommenting this, 
    //          while also commenting out "observe(...)" above
            return {p: p};
        });
}


///fold:
// Helper function
var mapToString = function(map){
  var keys = Object.keys(map);
  var mapString = reduce(function(x,acc){
    var sep = acc.length == 0 ? "" : ", "
    return acc.concat(sep + x + " : " + map[x] )
  },"",keys );
  return "{" + mapString + "}";
}

///

// Generative model
var grassGetsWet = function(prC,prRC,prSC,prSnC,prGRS, prGRoS, prO){
  
  var cloudy = flip(prC); // 0.5
  var rain = cloudy ? flip(prRC) : flip(1 - prRC); //flip(0.8) : flip(0.2);
  var sprinkler = cloudy ? flip(prSC) : flip(prSnC); //flip(0.1) : flip(0.5);
  var wetGrass = rain && sprinkler 
                   ? flip(prGRS)    // 0.99
                   : (rain && !sprinkler) || (!rain && sprinkler) 
                        ? flip(prGRoS)    //  flip(0.9)
                        : flip(prO); // 0.0001 = prob. of some 
                                        //   other cause, not in model?
                              // was flip(0.0); // impossibility
  return {wetGrass: wetGrass,
          rain: rain,
          sprinkler: sprinkler,
          cloudy: cloudy};
}
var informed = 0.5;  // somewhat informed, midway between 0 and 1
var prC = listMean(repeat(500,function(){return priorPr(0.5,informed);}));
var prRC = listMean(repeat(500,function(){return priorPr(0.8,informed);}));
var prSC = listMean(repeat(500,function(){return priorPr(0.1,informed);}));
var prSnC = listMean(repeat(500,function(){return priorPr(0.5,informed);}));
var prGRS = listMean(repeat(500,function(){return priorPr(0.99,informed);}));
var prGRoS = listMean(repeat(500,function(){return priorPr(0.9,informed);}));
var prO = listMean(repeat(500,function(){return priorPr(0.0001,informed);}));

// Generalized inference function given any combination of evidence
var inference = function(evidence){
  var applyEvidence = Infer({ method: 'enumerate' }, function(){
  var trial = grassGetsWet(prC,prRC,prSC,prSnC,prGRS, prGRoS, prO);
   if ("sprinkler" in evidence){
      condition(trial.sprinkler === evidence.sprinkler);
   }
   if ("rain" in evidence){
      condition(trial.rain === evidence.rain);
   }
   if ("cloudy" in evidence){
      condition(trial.cloudy === evidence.cloudy);
   }
   if ("wetGrass" in evidence){
      condition(trial.wetGrass === evidence.wetGrass);
   }
   return {rain: trial.rain,
           cloudy: trial.cloudy,
           sprinkler: trial.sprinkler,
           wetGrass: trial.wetGrass,
          };
});
  
  return applyEvidence;
}


// ENTER EVIDENCE HERE in this form:
//      { cloudy : true,
//          rain : false }
// Leave out any entry where there is no evidence

var evidence = {cloudy : false,
               wetGrass: true};

var evidenceString = mapToString(evidence);

// Output
print("Model parameters:");
///fold:
print("Pr(cloudy) = " + prC);
print("Pr(rain|cloudy) = " + prRC);
print("Pr(sprinkler|cloudy) = " + prSC);
print("Pr(sprinkler| not cloudy) = " + prSnC);
print("Pr(wetGrass| rain AND sprinkler) = " + prGRS);
print("Pr(wetGrass| rain XOR sprinkler) = " + prGRoS);
print("Pr(wetGrass| other) = " + prO + "\n");
///
print("Given evidence = " + mapToString(evidence) + " =>");
var allCombinations = inference(evidence);

//viz.table(allCombinations);

// Extract marginal probabilities:
///fold:
var results = {
  rain: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.rain;
                   }
                 ).score(true) 
               ),
  cloudy: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.cloudy;
                   }
                 ).score(true) 
               ),
  wetGrass: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.wetGrass;
                   }
                 ).score(true) 
               ),
  sprinkler: Math.exp(
                 Infer({method: 'enumerate'},
                   function(){
                      var trial = sample(allCombinations);
                      return trial.sprinkler;
                   }
                 ).score(true) 
               )
}
///
  
print("=>  Pr(rain) = " + results.rain);
print("    Pr(cloudy) = " + results.cloudy);
print("    Pr(wetGrass) = " + results.wetGrass);
print("    Pr(sprinkler) = " + results.sprinkler);





</code></pre>




### RegEx Test

<pre> <code class="language-webppl">

// regex tests


var data = ["000111","110011"];

var match = function(text,pattern){
  return text.search(pattern) > -1 ? true : false;
}
var elements = ["0","1","."];



var generateRandomPattern = function (len){
  // random string of "1", "0", ".", of length len
  var arr = repeat(len,function(){
      return elements[sample(RandomInteger({n:3}))];
      });
  var str = reduce(
    function(x,acc){return String.prototype.concat(acc,x );},"",arr);
  return str;
}

var samp = generateRandomPattern(6);
print(samp);


var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d)/i;
var found = str.search(re);

print("Match? " + match(str,re)); 

var pat = RegExp.prototype.constructor("see chapter","g");

print("Match? test: " + pat.exec(str) );
print("Match? " + match(str,pat));
print(pat.source + ",  " + pat.global + ", " + typeof pat);

</code></pre>


<pre> <code class="language-webppl">


</code></pre>

<pre> <code class="language-webppl">
var xs = ["0011", "0011001", "110", "1100010101", "110111","0011"];
var labels = [false, false, true, true, true,false];



var model = function(){
  var limitGaussian = function(mean,sd){
    var draw = sample(Gaussian({mu:mean,sigma:sd}));
    if (draw >= .8 || draw <= 0.2){
      return limitGaussian(mean,sd);
    } else {
      return draw;
    }
  }
  var p1 = beta(2,2);  //prefer Pr("0")=Pr("1")=0.5
  var p2 = beta(2,3); // prefer shorter/simpler
  var p3 = beta(1.5,1.5);
  var c0 = uniform(0,1);
  var c1 = uniform(0,1);
  var c2 = uniform(0,1);
  var c3 = uniform(0,1);
  var cSum = c0 + c1 + c2 + c3 ;
  var randInt4 = Categorical({ps: 
                 [c0 / cSum,
                  c1 / cSum,
                  c2 / cSum,
                  c3 / cSum]
                  , vs: [0,1,2,3]});
  var k0 = uniform(0,1);
  var k1 = uniform(0,1);
  var k2 = uniform(0,1);
  var kSum = k0 + k1 + k2;
  var randInt3 = Categorical({ps: 
                 [k0 / kSum,
                  k1 / kSum,
                  k2 / kSum]
                  , vs: [0,1,2]});
  var p4 = 0.5; //limitGaussian(0.3,0.05); //beta(2,3);  // prefer shorter/simpler
  var p5 = limitGaussian(0.3,0.05); //0.5; //beta(2,3);  // prefer shorter/simpler
  var p6 = limitGaussian(0.3,0.05); //0.5; //beta(2,3);  // prefer shorter/simpler
  var n0 = beta(5,2); // prefer re only
  var n1 = beta(1.5,1.5); //  then ^re$ 
  var n2 = beta(2,4);     //  then re$ 
  var n3 = beta(2,4);     //  or ^re 
  var nSum = n0 + n1 + n2 + n3;
  var randInt4a = Categorical({ps: 
                 [n0 / nSum,
                  n1 / nSum,
                  n2 / nSum,
                  n3 / nSum
                 ]
                  , vs: [0,1,2,3]});

// <char> ::= "0" | "1"  // BTW there are no meta char, so no "\" escape
var char = function(){return flip(p1)  ? "0" : "1";}
//<range>	::=	<char> "-" <char>
//var range = function(){return char() + "-" + char()};
//<set-item>	::=	<range> | <char>
//var set_item = function(){return flip() ? range() : char();}
var set_item = function(){return char();}
//<set-items>	::=	<set-item> | <set-item> <set-items>
var set_items = function(counter){
  if (counter <= 0){
    return set_item();
  } else {
    return flip(p2) ? set_item() : set_item() + set_items(counter - 1);
  }
}
//<negative-set>	::=	[^ <set-items> "]"
var negative_set = function(){return "[^" + set_items(3) + "]";}
//<positive-set>	::=	[ <set-items> "]"
var positive_set = function(){return "[" + set_items(3) + "]";}
//<set>	::=	<positive-set> | <negative-set>
var set = function(){return flip(p3) ? positive_set() : negative_set() ;}
//<eos>	::=	$
var eos = "$";
//<any>	::=	.
var any = ".";
var sos = "^";

//<elementary-RE>	::=	<group> | <any> | <char> | <set>
var elementary_re = function() {
  var draw = sample(randInt4);
  return draw == 0 ? group(1)
    : draw == 1 ? any
    : draw == 2 ? char()
    : draw == 3 ? set()
    : "";
}

//<plus>	::=	<elementary-RE> "+"
var plus = function(){return elementary_re() + "+";}
//<star>	::=	<elementary-RE> "*"
var star = function(){return elementary_re() + "*"};
//<basic-RE>	::=	<star> | <plus> | <elementary-RE>
var basic_re = function(){
   var draw = sample(randInt3);
   return draw == 0 ? star()
        : draw == 1 ? plus()
        : draw == 2 ? elementary_re()
        : "";
}
//<concatenation>	::=	<simple-RE> <basic-RE>
//<simple-RE>	::=	<concatenation> | <basic-RE>
var simple_re = function(counter){
    if (counter <= 0){
      return basic_re();
  } else {
      return flip(p4) ?  basic_re()  : simple_re(counter - 1) + basic_re();
  }
}

//<union>	::=	<RE> "|" <simple-RE>
//<RE>	::=	<union> | <simple-RE>
var re = function(counter){
  if (counter <= 0){
    return simple_re(7);
  } else {
  return flip(p5)  
     ?  simple_re(7)  
     : flip(p6) ?  simple_re(7)  : re(counter - 1);
  }
}
//<group>	::=	( <RE> ")"
var group = function(counter){
  if (counter <= 0){
    return "";
  } else {
  return "(" + re(counter - 1) + ")";
  }
}

var regex = function(counter){
  var draw = sample(randInt4a);
  return draw == 0 ? re(counter)
    : draw == 1 ? sos + re(counter) + eos 
    : draw == 2 ? sos + re(counter)
    : draw == 3 ? re(counter) + eos : ""; 
}
  var pattern =  regex(3);
  var pat = RegExp.prototype.constructor(pattern,"g");
  
/*  
   map2(
    function(x, label) {
      factor(pat.test(x) == label ? - pattern.length : -Infinity);
    },
    xs,
    labels);
*/    
/*
  factor(pat.test(xs[0]) == labels[0]  ? - pattern.length / 3 : -1000);
  factor(pat.test(xs[1]) == labels[1]  ? - pattern.length / 3  : -1000);
  factor(pat.test(xs[2]) == labels[2]  ? - pattern.length / 3  : -1000);
  factor(pat.test(xs[3]) == labels[3]  ? - pattern.length / 3  : -1000);
  factor(pat.test(xs[4]) == labels[4]  ? - pattern.length / 3  : -1000);
  //factor(pat.test(xs[5]) == labels[5]  ? - pattern.length / 3  : -1000);
*/
return pattern;
}

//var result = Infer({method: 'MCMC', samples: 100, burn: 10}, model);

var run = model();
print(run);
var pat = RegExp.prototype.constructor(run,"g");
print(xs[0] + " match? " + pat.test(xs[0]));
print(pat.source + ",  " + pat.global + ", " + typeof pat);

var flags = "g"  ;
var flags = pat.ignoreCase ? flags + "i" : flags;
var flags = pat.multiline ? flags + "m" : flags;

var pat2 = RegExp.prototype.constructor("^1?.?..1$","g");

print(xs[0] + " <=> " + pat2.source + "  match? " + pat2.test(xs[0]));

//viz.auto(result);
</code></pre>


### Full Model

<pre> <code class="language-webppl">

// First design project
// initialize perceptions

// form teams

// execute design project

// form new teams after member migration

// execute framing protocol

// randomize Designer sequence

// Chosen Designer generates a frame to propose

// other Designers evaluate the frame

// each Designer votes: "accept", "reject", or "don't care"

// is the frame accepted?  (requires at least one "accept" and zero "reject")

// if not accepted, then next frame proposal

// if round complete, new round, unless limit reached

// if frame accepted, then start design project

// if no frame accepted, then disband the team, have members join new teams

</code></pre>



## Experiments

## Results

## Analysis


____

## Endnotes

<p class="note"><span id="f1">1.</span><a href="#a1">↩</a> End note 1</p>

____

## References

<p class="hangingindent">
cite:cross_design_2011
</p>
<p class="hangingindent">
cite:dewulf_disentangling_2009
</p>
<p class="hangingindent">
cite:donnellon_communication_1986
</p>
<p class="hangingindent">
cite:sosa_computational_2005
</p>


<div class="work_in_progress" markdown="1">

**To Do**

1. Add characteristics to each task that are interpreted as signs, symbols, and signals during task performance.
1. Add to actors: differential skills in performing tasks (capabilities + routines)
1. Add to actors: conception of their capabilities + routines, related to "getting the job done"
    * Maybe this could be in some mental frame construct
1. Add memoization to performance landscape to save time on initialization and allow larger problems
1. Add performance correlation between tasks according to the similarity of their characteristics.

</div>


____

<!--


# HOLDING TANK

It draws on prevous models:

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

Generalized Capabilities from Design Thinking

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

-->
   











