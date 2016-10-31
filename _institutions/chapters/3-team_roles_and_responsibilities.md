---
layout: chapter
title: Negotiating Team Roles and Responsibilities
description: "This model uses recursive multi-agent reasoning and repeated social interaction, where agents reason about each other, their collective performance, and the structure of a somewhat non-cooperative game with incomplete and imperfect information."
status: work-in-progress
last_modified: "2016-10-27 03:59"
is_section: true
---

This is a model of self-organizing teams -- specifically small teams of design engineers ("agents") -- but it could be any type of team doing any type of work. It draws on two other models -- [Affordances as Probabilistic Interrelations](1_affordances.html) and [Evolving Team Structure](2-team_structure.html) -- but goes beyond them to include higher-order reasoning about the tasks, each agent's capabilities, and probable outcomes given ways of assigning roles and responsibilities.  The base model involves agents reasoning privately.  The extended model adds *institutions* -- norms and rules -- that influence and constrain agent choices and behaviors.

The goal of this model is to study the effects of team member migration.  Agents on a given team become aculturated to that team, including its institutions.  When an agent moves to a new team with different culture and institutions, conflicts can arise. Is this conflict positive or negative?  How does it affect team versatility and creativity?  Is it a temporary disturbance or a permanent change?  If new members challenge or reconfigure the team's 'institutions, are the effects positive, negative, or mixed?

## Model Components

We'll build up the model stepwise, piece by piece, starting first with the tasks in a design project.  We abstract design as the process of making a set of $$N$$ decisions in a way that optimizes (or satisfices) a single performance metric $$p$$.

### Tasks 

Following the model in [Evolving Team Structure](2-team_structure.html), we'll model a set of tasks inside a project as a vector of binary decisions.  The assumption here is that we could translate any coding of a realistic project into this expanded-but-primative coding.  For example, let's say the project is to design a doorway.  Focusing only on the width of the opening, this decision for this variable is a continuous value, i.e. positive-but-constrained real number.  But we could code it as a set of binary decisions by binning the values and coding it as an eight element vector $$a$$ of mutually exclusive decisions:

- $$a_1$$ : 0 up to 0.5 meters
- $$a_2$$ : 0.5 up to 0.7 m
- $$a_3$$ : 0.7 up to 0.9144 m
- $$a_4$$ : 0.9144 m       *(Standard door width in US = 36 inches)*
- $$a_5$$ : 0.9145 up to 1.2 m
- $$a_6$$ : 1.2 up to 1.8288 m
- $$a_7$$ : 1.8288 m       *(Double the standard width)*
- $$a_8$$ : over 1.8288 m

Notice that the binning is not uniform.  In principle, any continuous variable can be encoded in any way.  But in nearly all cases, the "right" encoding will be specific and relevant to the problem and situation at hand. There will be higher resolution near critical values, and less resolution farther away.

Because the elements of the decision vector $$a$$ are mutually exclusive, there are only eight possible values and $$2^3 = 8$$, therefore we can recode this into a three-bit binary decision $$o$$: $$(o_1 , o_2 ,o_3)$$. 

A similar binary encoding procedure can be applied to decisions about structure and architecture, and also decisions about decisions.

If we concatenate all the decision vectors together, we'll get one long binary vector of length $$N$$. For the base model, we'll treat this vector as fixed and exogenous (i.e. not influenced by agents or their decisions).

### Performance 

The performance $$p$$ of any given design is the *weighted sum* (we assume) of contributions of individual decisions, accounting for interdependencies.  Following the model in [Evolving Team Structure](2-team_structure.html), we can model dependency between decisions through a matrix -- Design Dependency Matrix (DDM) refp:clarkson_predicting_2004. Interdependent performance is coded by assigning a performance value for all combinations of dependent decisions. Example, if decision $$a_1$$ is dependent on four others $$a_2, a_3, b_3, c_1$$, then there are $$2^5=32$$ possible performance values for $$a_1$$.  While reft:ethiraj_bounded_2004 assume uncorrelated performance values (i.e. maximally rugged landscape), we'll be more realistic and assume correlated performance for nearby decision choices.

### Performance Landscapes
A key concern is the distribution of performance values.  If there is a single peak and all other values smoothly transition from low to high, then the design process is pretty simple.  This would be a "smooth landscape". 

<center>
<a href="http://www.thp.uni-koeln.de/~hwang/ss15/reference/NRG_published.pdf">
<img class="resize" class="resize" src="{{ site.baseurl }}/assets/img/performance_landscapes.png" style="display:block; width: 90%;"></a>
</center>

 Conversely, if any point in the space is randomly and arbitrarily different from every other, then the landscape is maximally "rugged".  There can be no local notion of "making progress" or "improvement" -- only is *this* point better/worse than *that* point.  
 
<center>
<img class="resize" src="{{ site.baseurl }}/assets/img/random_landscape.gif" style="display:block; width: 65%;">
A random performance landscape.
</center>
 

But ruggedness is not the only challenge of searching performance landscapes. For most complex designs there will be regions of *infeasibility or impossibility* where the design "falls apart" or "never comes together".  (Some surfaces can't be painted.  Some materials can't be glued together. Two solid objects can't occupy the same space at the same time.) These are "sink holes", where once you get in them (by making design choices), it may be hard to get out of them through incremental changes.  Here's a nice diagram from reft:greenwood_use_1998 illustrating "sink holes" of infeasability.

<img class="resize" src="{{ site.baseurl }}/assets/img/sink_holes.png" style="display:block; width: 95%;" />

Following reft:greenwood_use_1998, we can define a metric of ruggedness $$\mathscr{R}$$ as "neighborhood correlation". If we define a neighborhood of $$m$$ points within $$d$$ distance from a given point $$x_0$$, then we can quantify ruggedness by the average correlation of performance from that point $$p_0 = f(x_0)$$ to the other points $$x_1, x_2, \ldots x_m$$ via some number of random walks. The ruggedness metric a set of "correlation lengths", i.e. a correlation defined for each length (number of steps $$s$$) on the random walks (limited to the neighborhood around $$x_0$$):

$$
\mathscr{R}(s) = \frac{\langle p_i p_{i+s}\rangle - \langle p_i \rangle ^2}{\sigma_p^2}
$$

for every pair of performance values $$s$$ steps apart on the random walk, and where $$\langle . \rangle$$ is the mean of all values across a given random walk, and $$\sigma_p^2$$ is the standard deviation of $$p$$ values within that neighborhood.  Constraint: anytime a random walk reaches a "sink hole", it stops.

If we have a set of correlation lengths $$\mathscr{R}(s)$$, and also a function to define regions of feasability, then we can randomly generate our performance landscapes.  Let us  assume that "islands" of feasability are  surrounded by "oceans" of infeasability.  Think of each "island" as a distinct architecture.  We can adapt algorithms for generating random 2D "islands".  One such algorithm is "[boundary of Brownian Motion](http://davis.wpi.edu/~matt/courses/fractals/islands.html)".  ("Brownian motion" is a random path in space, while a "random walk" is the *time series* of random spatial points vs. time.).  Here is an example, where "feasable" is the dark region.

<center>
<a href="http://davis.wpi.edu/~matt/courses/fractals/islands.html">
<img class="resize" src="{{ site.baseurl }}/assets/img/boundary_of_brownian_motion.png" style="display:block; width: 65%;"></a>
A random fractal island
</center>

### Agent Capabilities

Agents are endowed with a set of *capabilites*.  A *capability* is a generalized ability to perform some function or achieve some goal to some degree of excellence. In the model in [Affordances as Probabilistic Interrelations](1_affordances.html), the agent had a capability to estimate a distance span (e.g. doorway opening) relative to the agent's body size and orientation. The *realization* of a capability *always* depends on the concrete details of context, especially the interaction processes with *affordances*.

Agents realize their capabilities by executing one or more *routines* (a.k.a. procedures, processes, actions). In this work, we won't be concerned with the details of routines and therefore we will treat them abstractly.  *Learning by doing* is the adaptive process of adjusting and refining routines based on experience.

To start with, we will assume that there is a fixed set of possible $$n$$ capabilities $$C=c_1,c_2,\ldots,c_n$$, and each agent is randomly endowed with $$k$$ capabilities, $$ 1 \leq k \leq n $$.

We'll model three classes of capabilities: 1) *Design capabilities* -- specific to classes of tasks; and 2) *Reflection capabilites* -- observe and reflect on their actions and outcomes of their own and other agents; and 3) *Interaction capabilities* -- basic protocols for discourse, conflict resolution, and decision-making.

Because we are abstracting the design process as the search for good or better design decisions, we'll model capabilities as (abstract) alternative search strategies, whose effectiveness in any situation is governed my the affordances associated with the design tasks.

### Affordances as (Probabilistic) Interrelations

An **affordance** is an *interrelation* between an agent and its environment that serves as a resource for action, or facilitates action, given the agent's capabilities, intentions, purposes, and attention. In other words, an "affordance" is not just a signal (i.e. sensory data) or an interface or a protocol for action.  Instead it is a *resource for action*, both before, during, and after task execution.

We treat affordances as *probabilistic* interrelations because they are governed by uncertainty and randomness, including the perception and reasoning processes of agents as they engage with them. (See: [Affordances as Probabilistic Interrelations](1_affordances.html)).

In most of the literature on affordances, the focus is on an agent in a physical environment, and perception-action processes.  reft:rietveld_rich_2014 assert that the construct of affordance extends much further, including nearly all of human social life.  In that spirit, we use affordance to model the fit between agents and task sets.

### Agent-Task Fit as Affordance

What does it mean when a team member (agent) is a "good fit" for a set of tasks?  It means that that agent has a set of capabilities that are well-matched to the nature of the tasks, and when they are skillfully applied, that the outcome will be good/positive/as required.

Agents perform tasks by engaging with them.  They start with a general approach and disposition, assess the particulars of the task, and then take steps (actions, decisions, etc.), and check along the way whether they have reached their goal or other stopping condition.  Not everything is worked out in advance or at the start.  The particulars of each step in the process can bring forward, in the expert, a large set of possibilites and insights that guide further action.

In a sense, affordances are the *interface* between the *generality* of an agent's capabilities and the *concrete* requirements and constraints of specific tasks (or, more generally, action settings).  But it's more than an interface, which might be modeled simply as a translation or interpretation process (e.g. converting AC to DC current in electrical circuits).  It's also more than a *communication protocol*, which is "a system of [codes and] rules that allow two or more entities of a communications system to transmit information" ([Wikipedia](https://en.wikipedia.org/wiki/Communications_protocol)).  As mentioned in the previous section, affordances serve as *resources* to agents with adequate *capabilities*.

### Affordances Provide Informational Resources 

There are four<sup>*</sup> general classes of informational resources that affordances provide.  The **first** is information about <em>progress</em>. As the agent engages in a task, it often needs to gauge progress, either toward a goal, or toward completion, or diminishing returns on effort, or even just some "getting warmer...getting colder..." indications. This is vital in complex combinatorial problems in order to identify and "save" good intermediate results ("building blocks").  Without this, agents would need to complete all steps in a task before assessing performance (if they can), and then start over to search for an improvement.  This is a factor of 10, 100, or thousands of times slower, depending on the size of the search space.

<p class="note"><sup>*</sup>Four classes that a I can think of right now.  There could easily be more.</p>

The **second** class of informational resources are *conditional alternatives*.  This is best explained in the context of artistic improvisation (musical, acting, etc.).  The actions and choices each artist builds on what has come before and what is unfolding at each moment.  While the unfolding could, in principle, be linear and unsurprising, the art of improvisation comes forward whenever the artists take new and unexpected directions, often in the face of apparent impasses -- "how will they get out of *this*?".  Exception conditions -- deadends, faults, mistakes, silences -- don't bring a halt to the performance, but instead artists draw on a set of *conditional alteratives* in what has come before, and from their experience generally.

Likewise, designers enaged in a set of design tasks may face exception conditions that require on-the-fly changes to plans, approach, disposition, methods, and so on. In these cases, a human designer doesn't "crash" like a computer program might, but instead they improvise.  It is their on-going engagement with the task as affordance that allows them to create/see the alternatives that *might* allow them to move forward.

The **third** class of informational resources are *framing signs*.  "Framing" is the cognitive process of making sense of a situation and then adopting an appropriate cognitive disposition to fit the situation.  In any sort of rich open environment, agents need to constantly answer "What sort of situation am I in? What sort of problem is this? What is important to see/know/attend to, and what is unimportant?" The Frame Problem arises, as reft:felin_economic_2014 argue, because that number of uses of anything (say, the forms and functions of a screwdriver in all possible use cases and activities) are both indefinite and unorderable. In non-ergotic systems, there is no full account or set of algorithms that can be given about all possible actions, uses, and functions:  

> "The frame problem focuses us on the problematic nature of explaining the full task set of activities and possible functionalities and uses for operating in the world (or some situation or environment, whether real or artificial)." (reft:felin_economic_2014, p 5)

But humans and other intelligent agents solve the "Framing Problem" all the time, at least to an adequate degree. How? But not relying solely on *ex ante* reasoning and conceptualization. Instead they engage with their affordances to tease out the framing that is suitable.

I call these resources "framing *signs*" in order to invoke the field of Semiotics (esp. [Peirce's Theory of Signs](http://plato.stanford.edu/entries/peirce-semiotics/) as a method and approach to understand signs as three inter-related parts: a sign (“sign-vehicle”), an object, and an interpretant (the agent). 

For designers starting any set of tasks, they will begin with some frame about the nature of the task, what the action process will look like, what they might experience along the way, and what "completion" looks like. But whatever framing they start with will be subject to testing and validation all along the way.  The designer's frame helps set expectations, and the fulfillment or failure of expectations create information for the designer that either confirm or refute the current frame.  The difference between novices and experts is often in the sophistication of their mental frames, and also in how frames will be modified or replaced as circumstances change.

The **fourth** (and final<sup>*</sup>) class of informational resources are <em>institutions</em>. Institutions are norms and rules that govern social interaction, organization, identity, and behavior.  Most sociologists and economists construe institutions within a framework of individual incentives, rational utility maximization, and especially punative social processes/mechanisms when norms and rules are violated.

<p class="note"><sup>*</sup>For now.</p>

Taking a *cognitive turn*<sup id="a1">[1](#f1)</sup>, we will construe institutions differently. Institutions are part of the way people think, embedded in mental frames, in behavioral dispositions, and (crucially) in affordances. "It's just how things work." In contrast to the traditional view on institutions, most of the time most people are not thinking about all the possible negative consequences of violating norms and rules, and weighing them against the possible benefits of violations.  This is especially true for people who are inculturated in those norms and rules. They are *pro-social* because it has become a part of their thinking, not because of cost/benefit analysis.


Institutions are resources in several ways. First, they reduce uncertainty and ambiguity, especially regarding cause-effect relationships, exception handling, and relevant information (including signs).  Second, institutions provide alternatives and constraints.  Agents can, essentially, call upon these alternatives or constraints when the need arises, without knowing or planning everything in advance.  Finally, institutions greatly facilitate both *codification* and *abstraction* of social behavior, and conversely institutions are frequently realized through codified and abstracted information and knowledge.  

Teams, whether formal or informal, are constituted and sustained through institutions.  Otherwise, they are merely accidental or emergent social phenomena.  Examples include *authority*, *governance*, *power* (control over resources, opportunity, or other people) *dispute resolution*, *rewards and sanctions*, *autonomy*, *collaboration*, *affiliation*, and *member identity*.

### Agent Reasoning about Capabilities, Tasks, and Affordances

[TBD]

## Basic Model

[TBD]

____

## Endnotes

<p class="note"><span id="f1">1.</span><a href="#a1">↩</a> Late in their careers, both Douglas North and Elinor Ostram (Nobel Prize laureates in Economics) turned their attetion to the cognitive aspects of institutions. reft:north_economics_2010 posed the general question as "how human beings learn and meld beliefs and preferences to make the choices that underlie economic theory; and how and why they develop theories (and act on them) in the face of pure uncertainty".  He believed the answers would come from a meld between economics, sociology, and cognitive science, and would lead to "major breakthroughs".</p>

____

## References
<p class="hangingindent">
cite:ethiraj_bounded_2004
</p>
<p class="hangingindent">
cite:clarkson_predicting_2004
</p>
<p class="hangingindent">
cite:felin_economic_2014
</p>
<p class="hangingindent">
cite:greenwood_use_1998
</p>
<p class="hangingindent">
cite:north_economics_2010
</p>
<p class="hangingindent">
cite:rietveld_rich_2014
</p>








