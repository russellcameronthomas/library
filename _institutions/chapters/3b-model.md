---
layout: chapter
title: Model of Institutions Via Affordances
description: "Model of interdependent tasks in an institutional field using the construct of affordances."
status: work-in-progress
pct_complete: "10%"
last_modified: "2016-11-02"
is_section: false
---

## Computational Modeling of Affordances and Interrelations 

### Affordances as Emergent Computational Objects 

Our modeling strategy for Actors (i.e. agents in roles, with purposeful functions and interests), Capabilities, and Routines is to model these as *computational objects* ("object" here is used in programming sense, as in Object-oriented Programming (OOP)).

Our strategy is to model affordances as *emergent objects* (as in OOP), meaning that they are created dynamically at runtime rather than at compile time, like the others which are created at compile time.  Therefore, we need a way to *compose*, *activate*, and *govern* affordances from the other objects in our computational model.

<p class="note"><em>Note</em>: The meaning of "emergent" here is not exactly as it is used on Complexity Science, where there is an implied sense that what emerges is not pre-given in the components or the mechanisms of their interactions -- e.g. birds flocking with the overall shape of the flock being an emergent property.</p>

For any given Action between Actor and Object-of-Action, the "computational objects" that come together via interrelation to create a working Affordance are:

- The Actor's activated **routines**, specifically the *characteristics* of those routines. 
- The Object-of-Action's relevant **characteristics**, presented as *signs* and *signals*.

<div class="work_in_progress" markdown="1">
add an example here.
</div>

### Protein Folding as Role Model for Interrelations

The ontological construct of *interrelation* encompases the "compose", "activate", and "govern" mechanisms. I like  protein folding as a rich role model for interrelations, though we abstract from the details of biochemistry.  

Two (or more) proteins fold in such a way that they bond and interact with each other to perform various functions, including signalling, turning on/off processes, material transport, opening/closing membranes, and many more. From this, we draw four aspects of interrelations:

1. Probabilistic **fit** (a.k.a. pattern match)
2. Probabilistic **influence**
3. Probabilistic **specification/generalization** -- e.g. "all/any", "some", "at least one", ""none", etc.
4. Probabilistic **activation/termination**

**1. Fit** --two proteins either fit together or don't (like key in a lock), or they partially fit, or they probabilistically fit.  There may be multiple ways to fit, so "fit" may be ambiguous or under-determined.  Fit determines whether $$A$$ engages with $$B$$ at all, or paritally.  If there is no fit, then none of the other interrelation aspects come into play -- no influence, no specification/generalization, no activation/termination.  If there *is* a fit, then the *type of fit* specifies (parameterizes) the other aspects.

You can think of "fit" as a lock-and-key system, but instead of a simple "unlock/lock" response, there may be a list of possible responses, or continuous ranges or spaces of possible response to "key engages the lock".

**2. Influence** -- one protein can change the folding of the other, or they can mutually change each other's folding.  More interesting: protein $$A$$ can connect with $$B$$ in such a way that it alter's $$B$$ possible fit and interactions with $$C, D, \dots$$ other proteins.  This allows influence of several types: *catalytic*, *inhibiting*, *constraint*, *initialization*, *tagging*, and others. 

**3. Specification/generalization** -- Protein $$A$$ can make protein $$B$$ function in a more general way or context, or conversely in a more specific way or context. Let's explore this in a simplistic example using WebPPL code. (Just the functionalistic aspects. No random variables.)

For the moment, imagine that protein functions are like computational functions. Let's say that protein $$A$$ performs this function in the context of three possible (numerical) paramters: 

~~~
var A = function (a, b, c) {
    var a1 = (a == null) ? 0 : a;  // sets default value for a
    var b1 = (b == null) ? 0 : b;  // sets default value for b
    return c == null ? "undefined" : (a1 + b1) * c;
    }
    
print("a,b,and c specified: A(1,2,2) = " + A(1,2,2));
print("Only c specified: A(_,_,2) = " + A(null,null,2)
                         + " (but 0 to any power is still 0)");
print("Only a and b specified; c is missing: A(1,2,_) = " + A(1,2,null));

~~~


This function will run successfully if either `a` or `b` are omitted, but `c` is required or the function will return 'undefined' (i.e. it not functional).

 Now imagine that protein interaction is like filling in default parameter values or ranges (to generalize), or removing default values (to make specific). Protein $$B$$ might look something like this:

~~~

var A = function (a, b, c) {
    var a1 = (a == null) ? 0 : a;  // sets default value for a
    var b1 = (b == null) ? 0 : b;  // sets default value for b
    return c == null ? "undefined" : (a1 + b1) * c;
    }
    
var B = function (F,p) {
    var a1 = p.a;
    var b1 = p.b;
    var c1 = p.c != null ? p.c : 1; // set default value for c if missing 
    return F(a1,b1,c1);
    }
var params = {a : 1, b : 2, c : 2};
print("a,b,and c specified: B(A(1,2,2)) = " + B(A,params));

var params = {a : null, b : null, c : 2};
print("Only c specified: B(A(_,_,2)) = " + B(A,params) 
                         + " (but 0 to any power is still 0)");

var params = {a : 1, b : 2, c : null};
print("Only a and b specified; c is missing: B(A(1,2,_)) = " + B(A,params) 
                        + "  (Note: no longer 'undefined')" );
    
~~~

`B` makes `A` more general (less specific) because it can run even when parameter `c` is missing. Reverse the process to make a function more specific (and less general).  In addition to default values, this approach to specification and generalization can also involve bounds on the value of a given parameter, or conditional interactions between parameters.

This is a *simplistic* example because `B` has *embedded knowledge* (i.e. hard coded) regarding the parameter structure of `A`.  In fact, I had to explicitly pass the `A` parameters to `B`, separate from passing the function `A`, so it could inspect them and conditionally add a default value for `c`. What we'd like is a more generalized mechanism for $$A$$ to generalize or specify $$B$$.  We will model this as meta-programming, where function `B` transforms the function `A` through reflection.

<p class = "note">In Java, "reflection" is where one object can programmatically inspect (...with permission...) the traits and structure of another class of object.  We'll create our own special-purpose reflection and meta-computation system.</p>

**4. Activation** and **Termination** -- Protein $$A$$ can cause $$B$$ to start or stop some function or process, conditional on the context.

Notice that we prefaced all these aspects with *probabilistic*, meaning they can include random processes, including conditional random processes.  This allows us to implement fuzzy pattern matching, noisy influence, conditional activation/termination, and the like.

### Signs and Signals

The last piece of the affordance modeling puzzle






<div class="work_in_progress" markdown="1">

**To Do**

1. First
1. Second
1. Third

</div>