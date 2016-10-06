---
layout: chapter
title: Introduction
description: "'Big picture' on probabilistic programming, why it's different and better than previous tools, and how it applies to risk analysis and modeling."
is_section: true
---
In this introduction, you'll find *general* concepts that will help you make sense of probabilistic programming. If you understand these, it should increase your motivation and curiousity to learn more and will help you avoid confusion later.

## In a Nutshell

Probabilistic programming combines the ***"Math of Data"*** (statistics) with the ***"Math of Thought"*** (logical structures and programs)<sup id="a1">[1](#f1)</sup>.

Probabilistic programming is different from other methods (i.e. ML, Bayes Nets, BUGS/STAN) and better for many types of risk analysis and modeling because it is:

- ***More powerful and generally applicable*** -- able to handle complex problems that are hard or impossible with other methods
- ***Easier to learn, iterate, extend, maintain*** ... -- you focus your time on the model rather than computational details of inference

Compared to Deep Learning, probabilistic programming has advantages<sup id="a2">[2](#f2)</sup>:

- Easier to incorporate rich domain knowledge
- Can work well even with "Small Data"
- More explainable and understandable
- Can make probabilistic inferences on complex data types of variable size


### Why is it Good For Risk Analysis?

For risk analysts, the main of benefit probabilistic programming is that it has *the potential* to help us take on many hairy problems that we either do with great difficulty now, or we don't do at all.

From statistics, you will be familiar with discrete and continuous probability distributions, where the *support* is either a finite discrete set or a range of real numbers.
 
|:---------------------------------------:|:---------------------------------------:|
|<img style="float: left;width:300px;" src="{{ site.baseurl }}/assets/img/Discrete_probability_distribution.png"> | <img style="float: right;width:300px;" src="{{ site.baseurl }}/assets/img/Continuous_probability_distribution.png">|

What's *different* and *better* about probabilistic programming is that you can work with probability distributions over infinite sets of complex objects.


<img style="display:block;width:500px;" src="{{ site.baseurl }}/assets/img/probability_distributions_over_infinite_set.png">

Unlike Bayesian Networks, you aren't limited to dependence or conditional structures that are directed acyclic graphs (DAGs). You can model  dependence or conditional structures of *arbitrary*<sup>*</sup> complexity, including circular or recursive systems.

<p align="right"><font size="2"><sup>*</sup>As long as they are finite and computable.</font></p>


<img style="display:block;width:350px;" src="{{ site.baseurl }}/assets/img/probabilistic_models_of_recursive_reasoning.png">

That should **blow**...**your**...**mind**!

### Caveats

Probabilistic programming is fairly new -- just now transitioning from research to practical applications.  Not everything is as simple, easy, and "no-brainer" as we might like. But things are improving fast.  Now is the time to start learning and experimenting.


## Big Picture

Probabilistic programming is a hybrid computing system, combining a Turing-complete programming language with statistical inference algorithms.  Let's build that up in pieces, starting with the 

### "Math of Data": Statistical Inference<sup id="a3">[3](#f3)</sup>

<img style="float: right;width:350px;" src="{{ site.baseurl }}/assets/img/statistical_inference_algorithms.png">
Statistical inference algorithms (e.g. linear models, null-hypothesis tests, etc.) take **empirical data** (a.k.a. "evidence") as input, a set of **specifications** (a.k.a. "query") and produce **fitted parameters** (a.k.a. "answers") as output.

Buried in every statistical inference algorithm are assumptions that can be interpreted as its **model** of the **data generation process**. It's called "inference" because the algorithm finds the model parameters ("answers") that give the best fit to the empirical data ("evidence"). Examples:

- *Linear regression* algorithm models data generation as a linear process plus independent Gaussian noise.  
- *K-means clustering* algorithm takes a parameter $$K$$, and models the data generation process as $$K$$ centroids spaced reasonably far apart, plus independent Gaussian noise.  

What if the evidence doesn't fit the model of data generation? With statistical inference tools, you need to switch algorithms, or maybe chain them together in some way.  Unless you write your own statistical inference algorithms, you can't programmatically specify the data generation process.
 
### "Math of Thought": Logic and Programs<sup id="a3">[3](#f3)</sup>
<img style="float: right;width:350px;" src="{{ site.baseurl }}/assets/img/generative_probabilistic_model.png">
Now we switch our attention from the data to the system that generates the data. Computer programs are the tools we use to simulate the system, taking model parameters and initial conditions as inputs.  If there is no randomness in the programs, then the simulations produce the same outputs each run.  

---

*Edsger Dijkstra* (Patron Saint of Deterministic Programs):

**Programs** = Algorithms + Data Structures 

---

If there is randomness, then each run ("realization") produces different outputs.  

---
*Stanislaw Ulam* (Patron Saint of the Monte Carlo Method):

**Stochastic Programs** = Algorithms + Data Structures + Randomness

---

Here is an example of two simple programs, one deterministic and one stochastic. Click "run" several times and notice the changes in output.
~~~~
///fold:
var gauss_legendre_iteration = function(n, a,b,t,p){
var a1 = (a + b) / 2;
if (n > 0) {
gauss_legendre_iteration(
n - 1,
a1,
Math.sqrt(a * b),
t - p * Math.pow(a - a1,2),
2 * p
)
} else {
return Math.pow(a + b,2) / (4 * t)
}
}

var gauss_legendre = function(n){
var a = 1
var b = 1 / Math.sqrt(2);
var t = 1 / 4;
var p = 1;

return gauss_legendre_iteration(n, a,b,t,p);
}
///

var x = uniform(0,1.0);

var pi = gauss_legendre(10); // 10 iterations

print("Deterministic program: Gauss-Legendre algorithm for computing digits of pi\n pi = " + pi + "\n");

print("Stochastic program: A random draw from uniform distribution\n x =" + x);

~~~~

The Monte Carlo method involves running a stochastic program $$N$$ times and analyzing the distribution of outcomes.

<img style="display:block;width:500px;" src="{{ site.baseurl }}/assets/img/monte_carlo_example.png">

Ordinary programming languages (C, Java, PHP, R, Lisp) are 'Turing-complete' because they all the full computational power of a Turing Machine.

----

*Endnotes and Credits*

<span id="f1">1.</span> [↩](#a1) This pithy phrase comes from Joshua Epstein's presentation: ["How to Grow a Mind: Statistics, Structure and Abstraction"](https://www.youtube.com/watch?v=97MYJ7T0xXU)

<span id="f2">2.</span> [↩](#a2) These points are adapted from Avi Pfeffer's MLconf presentation: ["Probabilistic Programming with Figaro"](https://youtu.be/eO4ZXLQjba8?t=5m9s)

<span id="f3">3.</span> [↩](#a3) These diagrams are adapted from cite:pfeffer_practical_2016

<!---


## OLD


Imagine a dataset that records how individuals move through a city. The figure below shows what a datapoint from this set might look like. It depicts an individual, who we'll call Bob, moving along a street and then dwelling in the location of a restaurant. This restaurant is one of two nearby branches of a chain of Donut Stores. Two other nearby restaurants are also shown on the map.

![Donut temptation gridworld]({{ site.baseurl }}/assets/img/ch1_donut_new.png)

Given Bob's movements alone, what can we infer about his preferences and beliefs? Since Bob spent a long time at the Donut Store, we infer that he bought some food or drink there. Since Bob could easily have walked to one of the other nearby eateries, we infer that Bob has a preference for donuts over noodles or salad.

Assuming Bob does like donuts, why did he not choose the store closer to his starting point ("Donut South")? The cause might be Bob's *beliefs* rather than his *preferences*. He may not know about "Donut South", maybe because it just opened. Or Donut South may have different hours than Donut North and Bob may know about this.

A different explanation is that Bob *intended* to go to the healthier "Vegetarian Salad Bar". However, the most efficient route to the Salad Bar takes him directly past Donut North, and once standing right nextto it, he may suddenly have found the donuts more tempting than the salad.

We have described a variety of inferences about Bob which would explain his behavior. This tutorial develops models for inference that can consider all of these different explanations and quantitatively compare their plausibility in the context of particular (formalized) background assumptions. These models can also simulate an agent's behavior in novel scenarios: for example, we could predict Bob's behavior if he had started looking for food in a different part of the city. 

Now, suppose that our dataset shows that a significant number of different individuals took exactly the same path as Bob. How would this change our conclusions about him? It could be that everyone is tempted away from healthy food in the way Bob potentially was. But this seems unlikely. Instead, it is now more plausible that Donut South is closed or that it is a new branch that few people know about. 

This kind of reasoning, where we make assumptions about the distributions of beliefs within populations, will be formalized and simulated in later chapters. We will also consider multi-agent behavior where coordination or competition become important. 


## Agents as programs

### Making rational plans

Formal models of rational agents play an important role in economics refp:rubinstein2012lecture and in the cognitive sciences refp:chater2003rational as models of human or animal behavior. Core components of such models are *expected-utility maximization*, *Bayesian inference*, and *game-theoretic equilibria*. These ideas are also applied in engineering and in artificial intelligence refp:russell1995modern in order to compute optimal solutions to problems and to construct artificial systems that learn and reason optimally. 

This tutorial implements utility-maximizing Bayesian agents as functional probabilistic programs. These programs provide a concise, intuitive translation of the mathematical specification of rational agents as code. The implemented agents explicitly simulate their own future choices via recursion. They update beliefs by exact or approximate Bayesian inference. They reason about other agents by simulating them (which includes simulating the simulations of others). 

The first section of the tutorial implements agent models for sequential decision problems in stochastic environments. We introduce a program that solves finite-horizon MDPs, then extend it to POMDPs. These agents behave *optimally*, making rational plans given their knowledge of the world. Human behavior, by contrast, is often *sub-optimal*, whether due to irrational behavior or constrained resources. The programs we use to implement optimal agents can, with slight modification, implement agents with biases (e.g. time inconsistency) and with resource bounds (e.g. bounded look-ahead and Monte Carlo sampling).


### Learning preferences from behavior

The example of Bob (above) was not primarily about *simulating* a rational agent, but rather about the problem of *learning* (or *inferring*) an agent's preferences and beliefs from their choices. This problem is important to both economics and psychology. Predicting preferences from past choices is also a major area of applied machine learning; for example, consider the recommendation systems used by Netflix and Facebook.

One approach to this problem is to assume the agent is a rational utility-maximizer, to assume the environment is an MDP or POMDP, and to infer the utilities and beliefs and predict the observed behavior. This approach is called "structural estimation" in economics refp:aguirregabiria2010dynamic, "inverse planning" in cognitive science refp:ullman2009help, and "inverse reinforcement learning" (IRL) in machine learning and AI refp:ng2000algorithms. It has been applied to inferring the perceived rewards of education from observed work and education choices, preferences for health outcomes from smoking behavior, and the preferences of a nomadic group over areas of land (see cites in reft:evans2015learning). 

[Section IV](/chapters/4-reasoning-about-agents.html) shows how to infer the preferences and beliefs of the agents modeled in earlier chapters. Since the agents are implemented as programs, we can apply probabilistic programming techniques to perform this sort of inference with little additional code. We will make use of both exact Bayesian inference and sampling-based approximations (MCMC and particle filters).


## Taster: probabilistic programming

Our models of agents, and the corresponding inferences about agents, all run in "code boxes" in the browser, accompanied by animated visualizations agent behavior. The language of the tutorial is [WebPPL](http://webppl.org), an easy-to-learn probabilistic programming language based on Javascript refp:dippl. As a taster, here are two simple code snippets in WebPPL, using the interactive code boxes that we will use throughtout:

~~~~
// Using the stochastic function `flip` we build a function that
// returns 'H' and 'T' with equal probability:

var coin = function(){
  return flip(.5) ? 'H' : 'T';
};

var flips = [coin(), coin(), coin()];
print("Some coin flips: " + flips);

~~~~

~~~~
// We now use `flip` to define a sampler for the geometric distribution:

var geometric = function(p) {
  return flip(p) ? 1 + geometric(p) : 1
};

var boundedGeometric = Infer(
  { method: 'enumerate', maxExecutions: 20 },
  function(){ return geometric(0.5); });

print('Histogram of (bounded) Geometric distribution');
viz.auto(boundedGeometric);
~~~~

In the [next chapter](/chapters/2-webppl.html), we will introduce WebPPL in more detail.

-->
