---
layout: chapter
title: Functional Programming - Why and How
description: "WebPPL (and several other PPLs) requires functional programming. This subchapter explains why, and gives a few basics if you aren't familiar with it."
last_modified: "2016-12-01"
status: work-in-progress
pct_complete: 20%
is_section: false
---

If you have only ever programming in a procedural language (e.g. *Fortran*, *C*, *Pascal*, *Cobol*) or only in an object-oriented language (*Java, <em>C++</em>, etc.), you may find functional programming languages a bit jarring.  Many of your "go to" programming patterns won't work.  This chapter will help you reorient your thinking so you can be more productive and less frustrated.

## What is a Functional Language?

This is the "for dummies" answer.  

**A.** *Pure* functional langagues use only *immutable* variables. Once a variable is created through an assignment, you can't change its value.  You can't do this:

~~~~
var x = 4;
x = 6;   // This won't run
print(x);
~~~~

Any later assigments with the same variable name *in the same scope* will replace the old variable with a new variable, not modify the old one. 

~~~~
var x = [0,3,6];
var y = x[0] + x[1] + x[2];
if (x[0] == 0){
   var x = [1,2,3];
   var y = x[0] + x[1] + x[2];
   
}
print(" x = "+ x + "; y = " + y);
~~~~

This prints `x = 0,3,6; y = 9` rather than `x = 1,2,3; y = 6`, because the assignments within the `if` statement scope (brackets) are local and don't affect the `x` and `y` variables outside.'

**B.** *Every* function must have a *return value*, and the *only* effect of the function is through the return value. No side effects. 

**C.** *Every operation* is a function call, even simple operators. In *LISP*, `1 + 3` (infix notation for addition) looks like this: `add(1 3)`.  Scala works the same way, but has transformation operations (a.k.a. "syntactic sugar") that allow you to use infix notation.


**D.** In *Pure* functional langagues there are only three types of statements:

1. *Simple assignments*: e.g. `var x = 6 + 4;` and `var total = total(arr);`, where `total` is a function and `arr` is an array.
2. *Function assignments*: for example

~~~~
var arr = [1,1,1,1];
var total = function(arr){
    return reduce(function(x,acc){return x + acc},0,arr);
}
print(total(arr));
~~~~

3. *Flow control* statements like `if`-`else` that do not influence any variable out of their scope (scope = "inside a pair of brackets"). For example

~~~~
var x = 4;
if (x > 3){
    var x = 5;
} else {
    var x = 1;
}
print(x);
~~~~

This will print `4` because the assignments to `x` inside the `if` scope do not affect the orginal (immutable) `x`.

This is important: the return values of functions can be functions, not just immutable variables. For example:

<div class="work_in_progress" markdown="1">

**This doesn't work just yet**

I am trying to include a function() in the `return` statement, but no go.

~~~~
var arr = [1,1,1,1];
var total = function(arr){
    return reduce(function(x,acc){return x + acc},0,arr);
}

var doubletotal = function(x,acc){return (x + acc) * 2;}

print("The cummulative sum is " + total(arr));
print("Compiled form of 'doubletotal' function:\n" + doubletotal);
var test = reduce(doubletotal, 0, arr);
print("Applying 'doubletotal' => " + test);
~~~~

</div>


## Why Are *WebPPL* and other PPLs Functional Languages?

The reason has nothing to do with the aesthetics of programming, usability, productivity, or theoretical reasons.  It comes down to this:

1. *WebPPL* and other PPLs do their "magic" of inference through **side effects**.  If *you*, the programmer, are also using side effects in your code, then the *WebPPL* compiler and runtime can no longer do its own side effects reliably.
2. Functional languages do not permit side effects within functions.

Imagine if you used a purely procedural language (e.g. *C*).  Yes, you might be a *nice* programmer and code your functions in such a way that their *only effects* were through return values.  But if there was a PPL built on top of *C*, there would be no way for the compiler and runtime to be *sure* this was the case.

Take the case of a simple *Java* `for` loop over an array, updating the array values to the cummulative sum:

`int [] arr = {1,1,1,1};`<br/>
`int sum = 0;`<br/>
`for (int i = 0; i < arr.length; i ++){`<br/>
`......sum += arr[i];`<br/>
`......arr[i] = sum ;`<br/>
`}`<br/>
`System.out.println(arr.toString());`<br/>

This will print "1,2,3,4".  But you can't use the same pattern in a functional language.  Why? Because this loop depends on the variable `arr` being *mutable*, meaning you can change the values in memory after it is created, and do so at any time, over and over.  Inside the loop you are using the *original* value of each array element, and then modifying it with the cummulative sum.  This is, effectively, a *side effect* of the loop that fully depends on *where* each statement sits in the program.  

Because *WebPPL* and other PPLs do their "magic" by rearranging your code to insert their side effects, a complied PPL cannot operate safely on `for` loops and `if` - `then` structures where mutable variables are changed along the way.

## Tips

1. [How to Apply Math Functions over Arrays](#apply_function)
1. [Use Recursion to Conditionally Loop](#recursion)

<!-- {% increment tipnum %} set to zero initially -->
<a name="apply_function"></a>
### Tip #{% increment tipnum %}: How to Apply Math Functions over Arrays


Let's say you want to apply a math function (e.g. `max`) to all elements of an array.  *WebPPL* does not have an `apply(.)` function.

First, you might test if the Javascript math function accepts an array object as an argument:

~~~~
var arr = [0,2,4,6,3];
Math.max(arr);
~~~~

Nope.  Returns `null`.

With a web search, you find the [standard Javascript way](http://stackoverflow.com/questions/1669190/javascript-min-max-array-values) to apply a math function over an array, which looks like this:

~~~~
var arr = [0,2,4,6,3];
Math.max.apply(null,arr);
~~~~

Does this work? No. It compiles and runs, but gives the wrong answer. The answer should be `6` but this function returns `2`.  Why? Because *WebPPL* reconfigures this `apply` during its compilation process and does so that it no longer works as you'd expect in generic Javascript.

**Solution**: use `reduce`, like this:

~~~
var arr = [0,2,4,6,3];
reduce(function(x,acc){return x > acc ? x : acc},-Infinity,arr);
~~~

This returns the right answer: `6`.

*Note*: The accumulator is initialized to `-Infinity` so that it will be replaced by any valid number in the array.  If you pick some other number, like `-1000000`, there is always a chance your array will have a bigger negative number.  Also, don't fall into the mental trap of initializing the accumulator to `0`, because you'll only get a valid `max` if one array value is positive.

**Lesson**: be cautious about using any Javascript functions that are "compound" (functions acting on functions).  In this case, it is `apply` acting on `Math.max`.  The *WebPPL* compilation process may reconfigure them in a way that produces incorrect results.

<a name="recursion"></a>
### Tip #{% increment tipnum %}: Use Recursion to Conditionally Loop

