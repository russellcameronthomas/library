---
layout: chapter
title: Negotiating Team Roles and Responsibilities
description: "Actors self-organize into teams. The model uses recursive multi-actor reasoning and repeated social interaction in a somewhat non-cooperative game with incomplete and imperfect information."
status: work-in-progress
pct_complete: "5%"
last_modified: "2016-11-02"
is_section: true
---

This is a model of self-organizing teams -- specifically small teams of design engineers ("actors") -- but it could be any type of team doing any type of work. It draws on prevous models:

- [Affordances as Probabilistic Interrelations](1_affordances.html)
- [Evolving Team Structure](2-team_structure.html)
- [Model of Institutions Via Affordances](3c-model.html)
- [The Feast Table Model](/incentives/chapters/1-feast.html)

However, the model here goes beyond them to include higher-order reasoning about the tasks, each actor's capabilities, and probable outcomes given ways of assigning roles and responsibilities.  The base model involves actors reasoning privately.  The extended model adds *institutions* -- norms and rules -- that influence and constrain actor choices and behaviors.

The goal of this model is to study the effects of team member migration.  Actors on a given team become aculturated to that team, including its institutions.  When an actor moves to a new team with different culture and institutions, conflicts can arise. Is this conflict positive or negative?  How does it affect team versatility and creativity?  Is it a temporary disturbance or a permanent change?  If new members challenge or reconfigure the team's 'institutions, are the effects positive, negative, or mixed?

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

The key feature of this model is Actor reasoning about their functional ecosystem in the situation of deciding division of responsibilities, i.e. assigning tasks to Actors.

<div class="work_in_progress" markdown="1">

**To Do**

1. Add characteristics to each task.
1. Add to actors: differential skills in performing tasks (capabilities + routines)
1. Add to actors: conception of their capabilities + routines, related to "getting the job done"
    * Maybe this could be in some mental frame construct
1. Add memoization to performance landscape to save time on initialization and allow larger problems
1. Add performance correlation between tasks according to the similarity of their characteristics.

</div>


## Basic Model

~~~~
/*
// Global parameters:
var N = 30;  // number of team decisions; Best to keep this below 40 to avoid excess run times
var K = 5;   // number of designers ("actors")
var n = Math.round(N / K);  // number of decisions assigned to each actor

// Helper functions:
// binaryFlip(); arrayGet(arr,index); removeDups(arr); convertBinaryToInt(arr);
// flatten1(); pickN();
///fold:
//###########################################
var binaryFlip = function(){return flip() ? 1 : 0;}

// The following is necessary because of WebPPL's rule against using 
// Javascript libraries within WebPPL functions
var power = function(x,y) {return Math.pow(x,y);}

///

/###########################################

// Team decision variables
// A is the array of team decisions, randomly initialized.
var A = mapN(binaryFlip,N);

/###########################################
// An Actor consists of a map that holds current state: 
//          1. decisions (indexes)
var createActor = function(start, count){
   var dIndexes = mapN(function(x){return x + start;},count);
return {decisions : dIndexes};
}
*/

//var fs = require('fs');

fs.write("temp.txt","JUMP!");

var d = fs.read("temp.txt");

print(d);

~~~~





## Analysis

<div class="work_in_progress" markdown="1">

[TBD]

</div>

____

## Endnotes

<p class="note"><span id="f1">1.</span><a href="#a1">↩</a> End note 1</p>

____

## References









