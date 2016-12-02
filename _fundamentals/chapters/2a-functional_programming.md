---
layout: chapter
title: Functional Programming - Why and How
description: "WebPPL (and several other PPLs) requires functional programming. This subchapter explains why, and gives a few basics if you aren't familiar with it."
last_modified: "2016-12-01"
status: work-in-progress
pct_complete: 20%
is_section: false
---

If you have only ever programming in a procedural language (e.g. *Fortran*, *C*, *Pascal*, *Cobol*) or only in an object-oriented language (<em>Java</em>, <em>C++</em>, etc.), you may find functional programming languages a bit jarring.  Many of your "go to" programming patterns won't work.  This chapter will help you reorient your thinking so you can be more productive and less frustrated.

## What is a Functional Language?

This is the "for dummies" answer.  

**A.** *Pure* functional langagues use only *immutable* variables. Once a variable is created through an assignment, you can't change its value.  You can't do this:

<pre><code class="language-webppl">
var x = 4;
x = 6;   // This won't run
print(x);
</code></pre>

Any later assigments with the same variable name *in the same scope* will replace the old variable with a new variable, not modify the old one. 

<pre><code class="language-webppl">
var x = [0,3,6];
var y = x[0] + x[1] + x[2];
if (x[0] == 0){
   var x = [1,2,3];
   var y = x[0] + x[1] + x[2];
   
}
print(" x = "+ x + "; y = " + y);
</code></pre>

This prints `x = 0,3,6; y = 9` rather than `x = 1,2,3; y = 6`, because the assignments within the `if` statement scope (brackets) are local and don't affect the `x` and `y` variables outside.'

**B.** *Every* function must have a *return value*, and the *only* effect of the function is through the return value. No side effects. 

**C.** *Every operation* is a function call, even simple operators. In *LISP*, `1 + 3` (infix notation for addition) looks like this: `add(1 3)`.  Scala works the same way, but has transformation operations (a.k.a. "syntactic sugar") that allow you to use infix notation.


**D.** In *Pure* functional langagues there are only three types of statements:

1. *Simple assignments*: e.g. `var x = 6 + 4;` and `var total = total(arr);`, where `total` is a function and `arr` is an array.
2. *Function assignments*: for example

<pre><code class="language-webppl">
var arr = [1,1,1,1];
var total = function(arr){
    return reduce(function(x,acc){return x + acc},0,arr);
}
print(total(arr));
</code></pre>

3. *Flow control* statements like `if`-`else` that do not influence any variable out of their scope (scope = "inside a pair of brackets"). For example

<pre><code class="language-webppl">
var x = 4;
if (x > 3){
    var x = 5;
} else {
    var x = 1;
}
print(x);
</code></pre>

This will print `4` because the assignments to `x` inside the `if` scope do not affect the orginal (immutable) `x`.

This is important: the return values of functions can be functions, not just immutable variables. You just need to `apply` them. For example:

<div class = "work_in_progress">
<p> fix this example to include "apply"</p>
</div>

<pre><code class="language-webppl">
var arr = [1,1,1,1];
var total = function(arr){
    return reduce(function(x,acc){return x + acc},0,arr);
}

var doubletotal = function(x,acc){return (x + acc) * 2;}

print("The cummulative sum is " + total(arr));
print("Compiled form of 'doubletotal' function:\n" + doubletotal);
var test = reduce(doubletotal, 0, arr);
print("Applying 'doubletotal' => " + test);
</code></pre>

## Why Are *WebPPL* and other PPLs Functional Languages?

The reason has nothing to do with the aesthetics of programming, usability, productivity, or theoretical reasons.  It comes down to this:

1. *WebPPL* and other PPLs do their "magic" of inference through **side effects**.  If *you*, the programmer, are also using side effects in your code, then the *WebPPL* compiler and runtime can no longer do its own side effects reliably.
2. Functional languages do not permit side effects within functions.

Imagine if you used a purely procedural language (e.g. *C*).  Yes, you might be a *nice* programmer and code your functions in such a way that their *only effects* were through return values.  But if there was a PPL built on top of *C*, there would be no way for the compiler and runtime to be *sure* this was the case.

Take the case of a simple *Java* `for` loop over an array, updating the array values to the cummulative sum:

<pre>
<code class="language-java">int [] arr = {1,1,1,1};
int sum = 0;
for (int i = 0; i < arr.length; i ++){
       sum += arr[i];
       arr[i] = sum;
}
System.out.println(arr.toString());</code>
</pre>

This will print `1,2,3,4`.  But you can't use the same pattern in a functional language.  Why? Because this loop depends on the variable `arr` being *mutable*, meaning you can change the values in memory after it is created, and do so at any time, over and over.  Inside the loop you are using the *original* value of each array element, and then modifying it with the cummulative sum.  This is, effectively, a *side effect* of the loop that fully depends on *where* each statement sits in the program.  

Because *WebPPL* and other PPLs do their "magic" by rearranging your code to insert their side effects, a complied PPL cannot operate safely on `for` loops and `if` - `then` structures where mutable variables are changed along the way.



## Tips

1. [How to Apply Math Functions over Arrays](#apply_function)
1. [Recursion Can Be Your Best Friend](#recursion_friend)
1. [Use Recursion to Conditionally Loop](#recursion_conditionally_loop)
1. [Use Recursion and an Accumulator For 'Empty' Function Return Values](#recursion_empty_return)

<!-- {% increment tipnum %} set to zero initially -->
<a name="apply_function"></a>

### Tip {% increment tipnum %}: How to Apply Math Functions over Arrays


Let's say you want to apply a math function (e.g. `max`) to all elements of an array.  *WebPPL* does not have an `apply(.)` function.

First, you might test if the Javascript math function accepts an array object as an argument:

<pre><code class="language-webppl">
var arr = [0,2,4,6,3];
Math.max(arr);
</code></pre>

Nope.  Returns `null`.

With a web search, you find the [standard Javascript way](http://stackoverflow.com/questions/1669190/javascript-min-max-array-values) to apply a math function over an array, which looks like this:

<pre><code class="language-webppl">
var arr = [0,2,4,6,3];
Math.max.apply(null,arr);
</code></pre>

Does this work? No. It compiles and runs, but gives the wrong answer. The answer should be `6` but this function returns `2`.  Why? Because *WebPPL* reconfigures this `apply` during its compilation process and does so that it no longer works as you'd expect in generic Javascript.

**Solution**: use `reduce`, like this:

<pre><code class="language-webppl">
var arr = [0,2,4,6,3];
reduce(function(x,acc){return x > acc ? x : acc},-Infinity,arr);
</code></pre>

This returns the right answer: `6`.

*Note*: The accumulator is initialized to `-Infinity` so that it will be replaced by any valid number in the array.  If you pick some other number, like `-1000000`, there is always a chance your array will have a bigger negative number.  Also, don't fall into the mental trap of initializing the accumulator to `0`, because you'll only get a valid `max` if one array value is positive.

**Lesson**: be cautious about using any Javascript functions that are "compound" (functions acting on functions).  In this case, it is `apply` acting on `Math.max`.  The *WebPPL* compilation process may reconfigure them in a way that produces incorrect results.

<a name="recursion_friend"></a>

## Tip {% increment tipnum %}: Recursion Can Be Your Best Friend

(*Note*: Experienced programmers can skip this section)

*Recursion* is a programming pattern where a function calls it self. Specifically, in functional programming, a recursive function calls itself in the `return` statement, since the only effects of functions are through their return values.

If you've never encountered this idea before, it might seem ghoulish -- like a snake eating it's own tail. Why wouldn't this lead to an infinite loop? And why would you ever want to do something like this?

It *can* lead to an infinite loop if the programmer isn't careful. But there is the same risk in a *Javascript* `for` loop or `while` loop.  In all these cases, the programmer is responsible for including termination logic.

The benefit of recursion: it is a good fit for algorithms that have identical sub-algorithms, where each sub-algorithm takes on a subset of the work, and the final resuts are nested inside of each other, like Russian dolls.
<center>
<img class="resize" src="/assets/img/Russian-Doll-1.jpg" />
<p class="annotate" markdown="1">(Image by James Jordan, Source: [Photographyblogger.net](http://photographyblogger.net/17-picturesque-images-of-russian-nesting-dolls/))</p>
</center>

A classic example of such an algorithm is [depth-first search of graphs](https://en.wikipedia.org/wiki/Depth-first_search), used to find connected components in the graph and to solve mazes with only one solution path. Here is a `Java` implementation. Note that each iteration of the function prints a result rather than through a `return` statement.

<pre><code class="language-java">// Recursive DFS 
public void dfs(int adjacency_matrix[][], Node node) {
    System.out.print(node.data + "\t"); 
    ArrayList&lt;Node&gt; neighbours=findNeighbours(adjacency_matrix,node); 
    for (int i = 0; i < neighbours.size(); i++) {
        Node n=neighbours.get(i); 
        if(n!=null && !n.visited) {
            dfs(adjacency_matrix,n); n.visited=true; 
        } 
    }
}</code></pre>

<p class="annotate" markdown="1">(Source:[Java2blog](http://www.java2blog.com/2015/12/depth-first-search-in-java.html). See that web page for full code and explanations.)</p>

### How Does the Computer Execute Recursion?

Consider the following recursive function in *Java*:

<div class="work_in_progress">
<p>Modify this code so it is a better example of recursion and call stack effects</p>
</div>

<pre class="line-numbers"><code class="language-java">int [] data = {1,2,3};
int index = 0;
public void total(result){
    index ++;
    double sqrtTotal = Math.sqrt(result);     
    if (index >= arr.length || sqrtTotal > 1.5){
        return result;
    } else {
        return total(result + arr[index]);
    }
}
System.out.println("Total = " + total(0));</code></pre>

This function computes a cummulative sum, but stops when the square root of the total exceeds 1.5.  You'll notice that `index` is incremented and there is a local variable for square root in line 5. What happens to this every time you execute the function?  Is it overwritten (*Java* has mutable variables)? Or somehow preserved?

The answer is that the state of each function is preserved in a data structure called "call stack". Everytime you make a function call, the current state is pushed on to the call stack (maintained by the operating system). When you exit the function, the state is "popped" off the top of the call stack, so you can continue executing just as before.

As spiffy as this is, it has problems.  First, it takes execution time to push and pop the program stack. More worrying is that you can run out of stack space if you have a very large number of nested function calls, recursive or otherwise.

For these two reasons, some programmers stay away from recursive functions.  However, these are not problems in functional languages. Because there are no mutable variables, there is no variable state that needs to be preserved.  And because of a pattern called "[tail recursion](https://en.wikipedia.org/wiki/Tail_call)", it can be implemented without a call stack that requires more and more memory with each recursive function call. *This means that recursive functions do not cost more (performance or memory) than non-recursive functions doing the same algorithm*. You can have *nearly infinite* depth of recursive function calls, limited only by the amount of CPU time you want to use.

Here is the same recursive function in *WebPPL*:

<pre><code class="language-webppl">
var data = [1,2,3];
var total = function(index, result, accData){
    // a DIFFERENT "newIndex" and "sqrtTotal" is created every iteration of the function
    var newIndex = index + 1;
    var sqrtTotal = Math.sqrt(result);     
    if (index >= data.length || sqrtTotal > 1.5){
        return {result:result,
                data : accData};
    } else {
        var newAccData = Array.prototype.concat(accData,data[index]);
        return total(newIndex, result + data[index],newAccData);
    }
}

var test = total(0,0,[]);
print("Total of " + test.data + " is " + test.result);
</code></pre>

Here are two more tips that use recursion to solve common problems.

<a name="recursion_conditionally_loop"></a>

### Tip {% increment tipnum %}: Use Recursion to Conditionally Loop

<a name="recursion_empty_return"></a>

### Tip {% increment tipnum %}:Use Recursion and an Accumulator For 'Empty' Function Return Values


