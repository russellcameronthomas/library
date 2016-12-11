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

// scratch space

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
   











