---
layout: chapter
title: Introduction
description: "'Big picture' on probabilistic programming, why it's different and better than previous tools, and how it applies to risk analysis and modeling."
is_section: true
---
In this introduction, you'll find *general* concepts that will help you make sense of probabilistic programming. If you understand these, it should increase your motivation and curiousity to learn more and will help you avoid confusion later.


## Probabilistic Programming (PP) In a Nutshell

Probabilistic programming combines the ***"Math of Data"*** (statistics) with the ***"Math of Thought"*** (logical structures and programs)<sup id="a1">[1](#f1)</sup>.

Probabilistic programming is different from other methods (i.e. machine learning (ML), Bayes Nets, markov chain monte carlo (MCMC) using BUGS or STAN, etc.) and better for many types of risk analysis and modeling because it is has the potential to be:

- ***More powerful and generally applicable*** -- able to handle complex problems that are hard or impossible with other methods
- ***Easier to learn, iterate, extend, maintain*** ... -- you focus your time on the model rather than computational details of inference
- ***The "spreadsheet" of risk modeling*** --- i.e a multi-purpose tool with a low barrier to entry and a smooth learning curve<sup id="a4">[4](#f4)</sup>.

Compared to Deep Learning, probabilistic programming has advantages<sup id="a2">[2](#f2)</sup>:

- Easier to incorporate rich domain knowledge
- Can work well with "Small Data"
- More explainable and understandable
- Can make probabilistic inferences on complex data types of variable size


### Why is PP Good For Risk Analysis?

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

### Probabilistic Programming languages (PPL)

There are many probabilistic programming languages (PPL) in development and use. None is perfect, and each has pros and cons. 

- <a href="{{ site.baseurl }}/chapters/2-webppl.html" target="_blank"><em>WebPPL</em></a> -- **used in this tutorial**. A functional programming language built on top of Javascript. Good for interactive development, web demos, web applications, and teaching. Has R interface. Pronounced "web people". Successor to the *Church* language.
- <a href="http://docs.webppl.org/en/master/" target="_blank"><em>Figaro</em></a> -- A functional programming language implemented as Scala libraries, which is implemented as Java libraries.  Good if you want/need the benefits of a mixed functional/object language like Scala (e.g. Akka actor framework, etc.).
- <a href="http://docs.webppl.org/en/master/" target="_blank"><em>Anglican</em></a> -- A functional programming language built on top of Clojure (a dialect of Lisp designed for functional programming on the JVM). Like other Lisps, Clojure treats code as data, which is nice for symbolic AI.  It also has a macro system. Some good inference algorithms for certain classes of models.
- <a href="http://probabilistic-programming.org/wiki/Home#Existing_probabilistic_programming_systems" target="_blank">... and many more</a> -- click <a href="http://probabilistic-programming.org/wiki/Home#Existing_probabilistic_programming_systems" target="_blank">here</a> for descriptions and links.

For real™ development, I prefer *Figaro*. For teaching and interactive tutorials like this one, I prefer *WebPPL*. I have some experience with *Anglican*, and it was pretty good once I figured out Clojure.


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

<span id="f4">4.</span> [↩](#a4) The spreadsheet is arguably the ***greatest programmer productivity tool of all time*** because it eliminated the need to write so many of the most common number processing programs. The DARPA [Probabilistic Programming for Advancing Machine Learning (PPAML)](http://www.darpa.mil/program/probabilistic-programming-for-advancing-machine-Learning) program has aims in this direction, at least regarding machine learning and some aspects of AI.

