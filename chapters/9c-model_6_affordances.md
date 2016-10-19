---
layout: chapter
title: Model 6 - Affordances as Probabilistic Interrelations
description: "This model uses on-line probabilistic reasoning to perform a task in the face of various forms of ignorance and uncertainty, using the construct of 'affordance' from Ecological Psychology."
status: draft
is_section: true
---

In this chapter we'll model an agent's reasoning and behavior while they are in the process of performing some task -- in this case: opening a door and walking through it.  While we take this for granted in everyday life, the situtation is rich with possibilities and complexities, as I hope you will appreciate.  The methods used here can be applied to task environments that are much more problematic, e.g. cyber attack attribution.

## Background

This (optional) section gives some conceptual and theoretical background.

### What is "Know How"?

How does a cognitive agent know how to do any task?   This is one of the main design challenges in robotics, since both the "thinking" and "doing" of the robot have to be programmed in some way.

One view is that all the "know how" is in the agent's mind. If we view the mind as a computer, this would be like saying that there was a program (or set of programs) for each task that *completely specified* all the details of task execution. 

Another view -- adopted in this chapter -- is that "know how" arises through the on-line, real-time interaction between an agent and its environment.  In this view, an agent does not need to have a complete specification of behavior algorithms ahead of time.  Instead, the agent can work with sketchy algorithms and conceptual models, because it also has ways of creating information through interaction that fill in the missing pieces, or cause the agent to reconsider its plans if it was mistaken.

### Affordances

The foundation for our model is the construct of "affordance", which comes from Ecological Psychology. I define it this way:

> An **affordance** is an *interrelation* between an agent and its environment that serves as a resource for action, or facilitates action, given the agent's capabilities, intentions, purposes, and attention.

In other words, an "affordance" is not just a signal (i.e. sensory data) or an interface or a protocol for action.  Instead it is a *resource for action*, both before, during, and after task execution. Agents depend on the information they can create by interacting with affordances in order to lighten their cognitive load and to be able to carry out tasks in a way that fit the particular details of a given circumstance.

The construct of affordances has become well known in the field of Design, especially Usable Design refp:norman_design_2011, because it is an excellent tool to study perception-action in material environments.  But reft:rietveld_rich_2014 argue that the construct is much richer, and that it can be applied to nearly all of social life.

Here are several quotes from reft:rietveld_rich_2014 that give further explanations:

<p class="note">"Affordances are relations between aspects of a material [or social] environment and abilities available in a form of life."</p>

<p class="note">"Affordances are possibilities for action the environment offers to a form of life, and an ecological niche is a network of interrelated affordances available in a particular form of life on the basis of the abilities manifested in its practices -- its stable ways of doing things. An individual affordance is an aspect of such a niche."</p>

<p class="note">"Affordances are real in much the same way as colors are real.  Both are there independent of any particular individual's action but not independent of the <em>practices</em> and <em>abilities</em> that characterize our form of life as a whole."</p>

<p class="note">"Affordances are publicly available and in principle detectable by any individual with the right experience and training. At this level of the acting individual, affordances can be seen as usable resources already available in the environment to be picked up by an individual equipped with the relevant abilities."</p>

<p class="note">"The ability to act adequately on affordances in the particular situation is dependent on an individual animal’s dynamically changing abilities and concerns. The particular affordances one is engaged with in the concrete situation will vary with the current activity and concerns of the individual. We can be drawn to act on one affordance rather than another."</p>

While much of the literature of affordances treat the implications as binary -- *possible* vs. *impossible* -- we will adopt and extend the idea of reft:franchak_affordances_2014 to treat affordance implications as fuzzy.

## The Model

The agent's task is to open a door and walk through it.  To make it interesting, let's assume the agent is a time traveler from a distant time and place, and thus has no relevant experience with modern doors.  Furthermore, let's consider a range of door and doorway designs from designers who may have a variety of goals not related to simplicity or convention (e.g. modern art, minimalism, deception/secrecy, humor, ritual symbolism, etc.).

### Simple Version: Walking Through an Open Doorway

We'll start with an open doorway refp:franchak_affordances_2014, and treat it as a 1D problem in a 2D space, i.e. fitting through the doorway width-wise. The size of doorway is $$o$$ in the $$x$$ dimension. Agents are abstracted as rectangles with width $$w$$ (in the $$x$$ dimension) and depth $$d$$ (in the $$y$$ dimension), with $$ w > d $$.  The agent walks in the $$y$$ dimension, and so presents its width to the door.  If the doorway is too narrow, the agent can turn to "go in sideways".  If $$o < d $$ then the agent cannot get through the door at all.

<img style="display:block;max-width:80%;" src="{{ site.baseurl }}/assets/img/open_doorway_setting.png">

What makes this a cognitive system is that agents establish *beliefs* about whether they will fit through the doorway and will update these beliefs as they get closer, and even while trying to get through.  If, at any time, the agent comes to believe that it is impossible to get through the door, i.e. $$Bel(success) \approx 0$$, then it will stop.

<p class="note"><em>Note</em>: We'll use Dempster-Shafer Belief Theory to model beliefs based on evidence. "Belief (usually denoted <em>Bel</em>) measures the strength of the evidence in favor of a proposition <em>p</em>" (<a href="https://en.wikipedia.org/wiki/Dempster–Shafer_theory">Wikipedia</a>). This approach allows us to model clear evidence one way or the other, ambiguous evidence favoring both, and also near or complete ignorance.</p>

We'll model the agent with two capabilities: 1) Size perception (relative); and 2) Navigation.  The Navigation capability has three routines: a) Start/Stop decision-making; b) Walking; and c) Turning sideways. We will model these routines as simple deterministic functions that change the state of the agent.

The Size perception capability will be modeled as a vague, noisy, and partial-knowledge function that diminishes in linear proportion to distance from the door.  Relative size perception will produce beliefs for two propositions -- "bigger" and "smaller" -- along with a variable "knowledge" (0...1) that indicates the amount of evidence available.


The agent's interaction with the "doorway affordance" is two-fold: 1) on-going visual perception of the relative size of the opening $$o$$ relative to the agent's width $$w$$; and 2) the physical act of attempting to walk through when the agent has arrived.  At some time during the course of walking, the agent might decide to turn sideways, and thus the agent's depth $$d$$ becomes the operative metric for getting through. Or the agent might decide to stop.

Here is a *reactive* version of this simple model, meaning that the agent only reacts to *immediate perceptions* and doesn't make inferences about the future.  Notice that I've set the size of the doorway $$o$$ to equal the agent's width $$w$$. This means that the agent must decide to turn sideways if it attempts to walk through the doorway, otherwise it will fail.

~~~~
// Model Parameters
var startX = 0;
var startY = 10;
var maxDistance = 12;       // beyond maxDistance, 
// the agent is no longer able to perceive 
// relative size (i.e. knowledge = 0)

var o = 4.1; // doorway opening
var w = 4;   // agent width
var d = 2;   // agent depth, which becomes width if agent turns sideways

// walking parameters
var lamda = 0.7;  // 70% of path error will be corrected each step
var driftX = 0.2;   //  sigma parameter in Gaussian drift term

// sensitivity: parameter controlling vaguness/clarity (steepness) in 
//   the logistic function, given complete knowledge
var sensitivity = 5;
// pTurn: the max probability the agent will actually turn, 
//    if the belief conditions for turning are true
var pTurn = 1;
var belSmallerTurn = 0.4; // belief SMALLER must be greater than this
var belBiggerTurn = 0.4;  // AND belief BIGGER must be less than this


// pStop: the max probability the agent will actually stop, 
//    if the belief conditions for stopping are true
var pStop = 1;
// If already turned sideways
// (knowledge > 0.5 && smaller > 0.5 && bigger < 0.5)
var knowledgeStopSide = 0.5;
var belSmallerStopSide = 0.5;
var belBiggerStopSide = 0.5;
// If facing forward
// (knowledge > 0.2 && smaller > 0.4 && bigger < 0.01)
var knowledgeStop = 0.2;
var belSmallerStop = 0.4;
var belBiggerStop = 0.01;

///fold:
//#######################################################
// Utility functions
var roundN = function(x, N){
var multiplier = Math.pow(10,N);
var rounded = Math.round(x * multiplier) / multiplier;
return rounded
}

var printAll = function(arr,i){
    if (i < arr.length){
        print(arr[i]);
        printAll(arr, i + 1);
    }
}

//https://en.wikipedia.org/wiki/Logistic_function
var logistic = function(deltaX, k){
return 1 / (1 + Math.exp(-k * deltaX));
}
//#######################################################
///
// Size perception is both vague and noisy
///fold:
//   It returns D-S Belief for two propositions: bigger and  smaller
//   Also knowledge: weight of evidence, a function of distance. 
//                = 0 at maxDistance, and = 1.0 when distance == 0

var perceivedOpening = function(x, distance, opening, myWidth, state){
    // knowlege is the amount of subjective belief available allocate 
    //   the other variables: "bigger" and "smaller".
    var knowledge = Math.max(0, (1 - (distance / maxDistance)));
    // here is the "noisy" aspect, relative to agent's width w
    var perceivedO = Math.max(0,gaussian({mu: opening, 
        sigma: ((w / 8) * (1 - knowledge)) })
    );
    // here is the "vague" aspect
    var bigger = logistic(perceivedO - myWidth, 
                    1  + (sensitivity * knowledge)) * knowledge;
    var smaller = logistic(myWidth - perceivedO,  
                    1  + (sensitivity * knowledge)) * knowledge;
    return {
        x : x,
        y : distance,
        state : state,
        bigger : roundN(bigger, 4),
        smaller : roundN(smaller, 4),
        k : roundN(knowledge, 4)
    };
}
///
// Decision functions
///fold:
var decideToTurn = function(bigger, smaller, knowledge, distance){
    return smaller > belSmallerTurn && bigger < belBiggerTurn
                    ? distance >= 1 ? flip((1 / distance) * pTurn) : true
                    : false;
}

var decideToStop = function(bigger, smaller, knowledge, state, distance){
    return state === "side" 
        ? (knowledge > knowledgeStopSide 
            && smaller > belSmallerStopSide 
            && bigger < belBiggerStopSide)
                ? distance >= 1 ? flip((1 / distance) * pStop) : true
                : false
        : (knowledge > knowledgeStop // 0.2 
            && smaller > belSmallerStop //0.5 
            && bigger < belBiggerStop // 0.01
            )
                ? distance >= 1 ? flip((1 / distance) * pStop) : true
                : false ;
}
///
//State change functions
///fold:
var throughDoorWay = function(x, opWidth, doorway){
    //return opWidth < doorway ? "success" : "fail";
    var minX = - doorway / 2; // the doorway is centered on the x axis
    var maxX = doorway / 2;
    return (x - (opWidth / 2) > minX) 
        && (x + (opWidth / 2) < maxX)
            ? "success"
        : "fail";
}

var walk = function(currentX, goalX){
    // this is a mean-reverting random walk
    return currentX 
        + (goalX - currentX) * lamda        // error correction term
        + gaussian({mu: 0, sigma: driftX}) // random drift term
        ;
}
///

// Main simulation function
var step = function(x, y, perceptions, state, opWidth){
    if (y <=0 || state === "stopped" ){
        var finalState = state === "stopped" 
            ? "stopped"
            : throughDoorWay(x, opWidth, o); 
        var percept = perceivedOpening(x, y, o, opWidth, state);
        var newPercept = {
                        x: x,
                        y: y,
                        state:  finalState,
                        bigger: percept.bigger, 
                        smaller:  percept.smaller, 
                        k:   percept.k
        };
        var newPerceptions = Array.prototype.concat(perceptions,newPercept);
        return state === "stopped"
                    ? perceptions
                    : newPerceptions;
    } else {
        var newX = walk(x, 0);
        var percept = perceivedOpening(newX, y, o, opWidth, state);

        var newOpWidth = opWidth > d && 
                        decideToTurn(percept.bigger, 
                                    percept.smaller, 
                                    percept.k,
                                    y) 
                        ? d
                        : opWidth;
        var newState = decideToStop(percept.bigger, 
                                    percept.smaller, 
                                    percept.k,
                                    state,
                                    y)
                        ? "stopped"
                        : newOpWidth == w ? "forward" : "side";
        // update in case the state changed
        var newPercept = {x: newX,
                          y: y,
                          state:  newState,
                          bigger: percept.bigger, 
                          smaller:  percept.smaller, 
                          k:   percept.k
        };
        var newPerceptions = Array.prototype.concat(perceptions,newPercept);

        step(newX, y - 1, newPerceptions, newState, newOpWidth);
    }
}


var singleRun = step(startX,startY,[],"forward",w);

print("Doorway width = " + o + "; Agent w X d = " + w + " X " + d + 
        "; sensitivity = " + sensitivity + "; max_distance = " + maxDistance);
print("Single Run:");
printAll(singleRun,0);

~~~~

This verision makes slight additions to the model to make it *reflective*, meaning that the agent makes a forward inference (in time) to estimate the probabilities over final states.

We'd like to find out what doorway opening $$o$$ would yield a $$Pr(success)=0.5$$.  We'll create a prior distribution on $$o$$, assuming a Gaussian with a mean is just above the agent's width $$w$$, and a minimum constraint of the agent's depth $$d$$.  The *sigma* will be $$d/2$$, which expresses our belief that the posterior for $$o$$ is most likely to be in the range 2 to 6 (two standard deviations above and below the mean of about 4).

~~~~

var startX = 0;
var startY = 10;
var maxDistance = 12;       // beyond maxDistance, 
// the agent is no longer able to perceive 
// relative size (i.e. knowledge = 0)

var o = 4.3; // doorway opening
var w = 4;   // agent width
var d = 2;   // agent depth, which becomes width if agent turns sideways

///fold:
// walking parameters
var lamda = 0.7;  // 70% of path error will be corrected each step
var driftX = 0.2;   //  sigma parameter in Gaussian drift term

// sensitivity: parameter controlling vaguness/clarity (steepness) in 
//   the logistic function, given complete knowledge
var sensitivity = 5;
// pTurn: the max probability the agent will actually turn, 
//    if the belief conditions for turning are true
var pTurn = 1;
var belSmallerTurn = 0.4; // belief SMALLER must be greater than this
var belBiggerTurn = 0.4;  // AND belief BIGGER must be less than this


// pStop: the max probability the agent will actually stop, 
//    if the belief conditions for stopping are true
var pStop = 1;
// If already turned sideways
// (knowledge > 0.5 && smaller > 0.5 && bigger < 0.5)
var knowledgeStopSide = 0.5;
var belSmallerStopSide = 0.5;
var belBiggerStopSide = 0.5;
// If facing forward
// (knowledge > 0.2 && smaller > 0.4 && bigger < 0.01)
var knowledgeStop = 0.2;
var belSmallerStop = 0.4;
var belBiggerStop = 0.01;
///

// Utility functions
///fold:
var roundN = function(x, N){
var multiplier = Math.pow(10,N);
var rounded = Math.round(x * multiplier) / multiplier;
return rounded
}

var printAll = function(arr,i){
    if (i < arr.length){
        print(arr[i]);
        printAll(arr, i + 1);
    }
}

var findIndexed = function(arr, item){
  var m = mapIndexed(function(i, x){return x === item ? i : -1 ;}, arr);
  var matches = remove(-1,m);
  return matches.length > 0 ? first(matches) : -1;
}

var getDiscretePr = function(distr,key){
  // "dist" must be an object with "params" and "supp"
  //   e.g. {"params":[1],"supp":["success"]}
  var index = findIndexed(distr.supp,key,0);
  if (index >= 0){
    var dist = Object.values(distr.params.dist);
    return dist[index].prob;
  } else {
    return 0;
  }
}

//https://en.wikipedia.org/wiki/Logistic_function
var logistic = function(deltaX, k){
return 1 / (1 + Math.exp(-k * deltaX));
}
///
// Size perception is both vague and noisy
///fold:
//   It returns D-S Belief for two propositions: bigger and  smaller
//   Also knowledge: weight of evidence, a function of distance. 
//                = 0 at maxDistance, and = 1.0 when distance == 0

var perceivedOpening = function(x, distance, opening, myWidth, state){
    // knowlege is the amount of subjective belief available allocate 
    //   the other variables: "bigger" and "smaller".
    var knowledge = Math.max(0, (1 - (distance / maxDistance)));
    // here is the "noisy" aspect, relative to agent's width w
    var perceivedO = Math.max(0,gaussian({mu: opening, 
        sigma: ((w / 8) * (1 - knowledge)) })
    );
    // here is the "vague" aspect
    var bigger = logistic(perceivedO - myWidth, 
                    1  + (sensitivity * knowledge)) * knowledge;
    var smaller = logistic(myWidth - perceivedO,  
                    1  + (sensitivity * knowledge)) * knowledge;
    return {
        x : x,
        y : distance,
        state : state,
        bigger : roundN(bigger, 4),
        smaller : roundN(smaller, 4),
        k : roundN(knowledge, 4)
    };
}
///
// Decision functions
///fold:
var decideToTurn = function(bigger, smaller, knowledge, distance){
    return smaller > belSmallerTurn && bigger < belBiggerTurn
                    ? distance >= 1 ? flip((1 / distance) * pTurn) : true
                    : false;
}

var decideToStop = function(bigger, smaller, knowledge, state, distance){
    return state === "side" 
        ? (knowledge > knowledgeStopSide 
            && smaller > belSmallerStopSide 
            && bigger < belBiggerStopSide)
                ? distance >= 1 ? flip((1 / distance) * pStop) : true
                : false
        : (knowledge > knowledgeStop // 0.2 
            && smaller > belSmallerStop //0.5 
            && bigger < belBiggerStop // 0.01
            )
                ? distance >= 1 ? flip((1 / distance) * pStop) : true
                : false ;
}
///
//State change functions
///fold:
var throughDoorWay = function(x, opWidth, doorway){
    //return opWidth < doorway ? "success" : "fail";
    var minX = - doorway / 2; // the doorway is centered on the x axis
    var maxX = doorway / 2;
    return (x - (opWidth / 2) > minX) 
        && (x + (opWidth / 2) < maxX)
            ? "success"
        : "fail";
}

var walk = function(currentX, goalX){
    // this is a mean-reverting random walk
    return currentX 
        + (goalX - currentX) * lamda        // error correction term
        + gaussian({mu: 0, sigma: driftX}) // random drift term
        ;
}
///

// Main simulation function
///fold:
var step = function(x, y, perceptions, state, opWidth,opening){
    if (y <=0 || state === "stopped" ){
        var finalState = state === "stopped" 
            ? "stopped"
            : throughDoorWay(x, opWidth, opening); 
        var percept = perceivedOpening(x, y, opening, opWidth, state);
        var newPercept = {
                        x: x,
                        y: y,
                        state:  finalState,
                        bigger: percept.bigger, 
                        smaller:  percept.smaller, 
                        k:   percept.k
        };
        var newPerceptions = Array.prototype.concat(perceptions,newPercept);
        return state === "stopped"
                    ? perceptions
                    : newPerceptions;
    } else {
        var newX = walk(x, 0);
        var percept = perceivedOpening(newX, y, opening, opWidth, state);

        var newOpWidth = opWidth > d && 
                        decideToTurn(percept.bigger, 
                                    percept.smaller, 
                                    percept.k,
                                    y) 
                        ? d
                        : opWidth;
        var newState = decideToStop(percept.bigger, 
                                    percept.smaller, 
                                    percept.k,
                                    state,
                                    y)
                        ? "stopped"
                        : newOpWidth == w ? "forward" : "side";
        // update in case the state changed
        var newPercept = {x: newX,
                          y: y,
                          state:  newState,
                          bigger: percept.bigger, 
                          smaller:  percept.smaller, 
                          k:   percept.k
        };
        var newPerceptions = Array.prototype.concat(perceptions,newPercept);

        step(newX, y - 1, newPerceptions, newState, newOpWidth,opening);
    }
}
///
/*
var singleRun = step(startX,startY,[],"forward",w);

print("Doorway width = " + o + "; Agent w X d = " + w + " X " + d + 
        "; sensitivity = " + sensitivity + "; max_distance = " + maxDistance);
print("Single Run:");
printAll(singleRun,0);
*/
var K = 300;

var projection = function(opening) {
  return Infer({method:"forward",samples : K},
    function(){
        var aRun = step(startX,startY,[],"forward",w,opening);
        return last(aRun).state;
     });
}
print("Summary of " + K +  " runs with opening = " + o);
var result = projection(o);
viz.auto(result);



var openingsPrior = function(){
  var mu = w * 1.1 ;
  var sigma = d / 2;
  var draw = gaussian({mu:mu, sigma:sigma});
  return Math.max(d,draw);
}

var openings = Infer({method:"MCMC", kernal: "HMC", samples : 3000, burn: 100},
       function(){
           var op = openingsPrior();
           var state = projection(op);
           var success = getDiscretePr(state,"success");
           //observe(Gaussian({mu: 0.5,sigma : 0.1}),success);
           var penalty = // -5;
                 (1 - 
                            Math.pow(
                               Math.exp(
                                Math.abs(0.5 - success)
                               ), 10)
                            );
                            
           factor(success >= 0.49 && success <= 0.51 ? 0 : penalty);
           return {o : op};
        });
        
viz.auto(openings);


~~~~




