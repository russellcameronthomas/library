---
layout: chapter
title: In a Nutshell
description: "Executive summary description of probabilistic programming (PP) and how it is better and different, and also why might be good for risk analysis and modeling."
last_modified: "2016-10-26 16:43"
is_section: false
---

Probabilistic programming (PP) combines the *"Math of Data"* (statistics) with the *"Math of Symbols & Logic"* (computer programs)<sup id="a1">[1](#f1)</sup>.

Probabilistic programming is different from other methods (i.e. machine learning (ML), Bayes Nets, markov chain monte carlo (MCMC) using BUGS or STAN, etc.) and better for many types of risk analysis and modeling because it is has the potential to be:

- *More powerful and generally applicable* -- able to handle complex problems that are hard or impossible with other methods
- *Easier to learn, iterate, extend, maintain* ... -- you focus your time on the model rather than computational details of inference
- *The "spreadsheet" of risk modeling* --- i.e a multi-purpose tool with a low barrier to entry and a smooth learning curve<sup id="a2">[2](#f2)</sup>.

Compared to Deep Learning, probabilistic programming has advantages<sup id="a3">[3](#f3)</sup>:

- Easier to incorporate rich domain knowledge
- Can work well with "Small Data"
- More explainable and understandable
- Can make probabilistic inferences on complex data types of variable size


### Why is PP Good For Risk Analysis?

For risk analysts, the main of benefit probabilistic programming is that it has *the potential* to help us take on many hairy problems that we either do with great difficulty now, or we don't do at all.

From statistics, you will be familiar with discrete and continuous probability distributions, where the *support* is either a finite discrete set or a range of real numbers.

|:---------------------------------------:|:---------------------------------------:|
|<img style="float: left;width:95%;" src="{{ site.baseurl }}/assets/img/Discrete_probability_distribution.png"> | <img style="float: right;width:95%;" src="{{ site.baseurl }}/assets/img/Continuous_probability_distribution.png">|

What's *different* and *better* about probabilistic programming is that you can work with probability distributions over infinite sets of complex objects.


<img style="display:block;width:70%;" src="{{ site.baseurl }}/assets/img/probability_distributions_over_infinite_set.png">

Unlike Bayesian Networks, you aren't limited to dependence or conditional structures that are directed acyclic graphs (DAGs). You can model  dependence or conditional structures of *arbitrary*<sup>*</sup> complexity, including circular or recursive systems.

<p align="right"><font size="2"><sup>*</sup>As long as they are finite and computable.</font></p>


<img style="display:block;width:55%;" src="{{ site.baseurl }}/assets/img/probabilistic_models_of_recursive_reasoning.png">

That should **blow**...**your**...**mind**!

### Caveats

Probabilistic programming is fairly new -- just now transitioning from research to practical applications.  Not everything is as simple, easy, and "no-brainer" as we might like. But things are improving fast.  Now is the time to start learning and experimenting.

### Probabilistic Programming languages (PPL)

There are many probabilistic programming languages (PPL) in development and use. None is perfect, and each has pros and cons. 

- <a href="2-webppl.html" target="_blank"><em>WebPPL</em></a> -- **used in this tutorial**. A functional programming language built on top of Javascript. Good for interactive development, web demos, web applications, and teaching. Has R interface. Pronounced "web people". Successor to the *Church* language.
- <a href="http://docs.webppl.org/en/master/" target="_blank"><em>Figaro</em></a> -- A functional programming language implemented as Scala libraries, which is implemented as Java libraries.  Good if you want/need the benefits of a mixed functional/object language like Scala (e.g. Akka actor framework, etc.).
- <a href="http://docs.webppl.org/en/master/" target="_blank"><em>Anglican</em></a> -- A functional programming language built on top of Clojure (a dialect of Lisp designed for functional programming on the JVM). Like other Lisps, Clojure treats code as data, which is nice for symbolic AI.  It also has a macro system. Some good inference algorithms for certain classes of models.
- <a href="http://probabilistic-programming.org/wiki/Home#Existing_probabilistic_programming_systems" target="_blank">... and many more</a> -- click <a href="http://probabilistic-programming.org/wiki/Home#Existing_probabilistic_programming_systems" target="_blank">here</a> for descriptions and links.

For real™ development, I prefer *Figaro*. For teaching and interactive tutorials like this one, I prefer *WebPPL*. I have some experience with *Anglican*, and it was pretty good once I figured out Clojure.

---

## Endnotes and Credits

<span id="f1">1.</span> [↩](#a1) This pithy phrase comes from Joshua Epstein's presentation: ["How to Grow a Mind: Statistics, Structure and Abstraction"](https://www.youtube.com/watch?v=97MYJ7T0xXU)

<span id="f2">2.</span> [↩](#a2) The spreadsheet is arguably the *greatest programmer productivity tool of all time* because it eliminated the need to write so many of the most common number processing programs. The DARPA [Probabilistic Programming for Advancing Machine Learning (PPAML)](http://www.darpa.mil/program/probabilistic-programming-for-advancing-machine-Learning) program has aims in this direction, at least regarding machine learning and some aspects of AI.

<span id="f3">3.</span> [↩](#a3) These points are adapted from Avi Pfeffer's MLconf presentation: ["Probabilistic Programming with Figaro"](https://youtu.be/eO4ZXLQjba8?t=5m9s)
