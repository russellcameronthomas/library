---
layout: chapter
title: Introduction
description: "Overview of the tutorial, the intended reader, and how to get the most out of it. Credits."
last_modified: "2016-10-26 16:45"
is_section: true
---

## Description

This is a tutorial for probabilistic programming (PP) as applied to risk modeling and related applications, using [WebPPL](2-webppl.html) -- a recently-developed PPL on top of Javascript.  We walk through the basic concepts, both conceptual and practical, and frequently demonstrate each concept or method with an interactive code example.

## Intended Readers and Prerequisite Knowledge 

This tutorial should be accessible to anyone who is comfortable with:

1. Computer programming (prefrerably Javascript, Java, or similar)
1. Probability fundamentals (point probabilities, probability density functions, etc.) 
1. Statistical inference fundamentals and some methods (e.g. linear regression, conditional probability, Bayes Rule, etc.). 

It will be helpful, especially for the case study models, if the reader understands some basic concepts in modern information security management and risk analysis.

If you are familiar or even experienced in Functional Programming, even better, because it will make learning WebPPL much easier.  For everyone else, it would be helpful if you read [Functional Programming - Why and How](2a-functional_programming).

## Reading Order and Navigation

The tutorial can be read sequentially, or semi-randomly guided by your curiosity.  I recommend that everyone read the remaining subchapters in the introduction ([In a Nutshell](1a-In_a_Nutshell.html) and [Big Picture](1b-Big_Picture)) and at least scan the chapter on "WebPPL" so you can read the code examples.

You can navigate through the content by either using the [Table of Contents]({{ site.baseurl }}/index.html) (links on header and footer of every page) or sequentially by using the "(Next)  ▶︎" and "◀︎ (Previous)" links in the header and footer of each page.

## Using the Interactive Code Boxes

Nearly all the code boxes are in *interactive* frames, meaning that you can both run the examples and also modify them using valid WebPPL statements. You can go through the whole tutorial and get value by only running the examples to see the output.  

Here is a code example:

~~~~
// These are a couple of very simple WebPPL statements

var test = 2 + 4;

print("The immutable variable 'test' = " + test);

// Unlike ordinary Javascript, variables are immutable
//  (the can't be modified once they are assigned)

// This won't work:
//    test = 8;
// Nor will this:
//    test = test * test;

// This overwrites the previous variable "test"
var test = function(x){
   return x * x;
}

//Notice that the syntace of functions is different than Javascript
//  which looks would look like this (won't work in WebPPL):
// function test(x) = { return x * x;}

print("The NEW immutable function 'test(4)' = " + test(4));
~~~~

Click the <span class="buttonText">run</span> button, and it will first compile WebPPL into Javascript, and then execute the Javascript -- in this case it prints two lines with results.

Now try editing the code yourself.  Perhaps you could change the `2 + 4;` expression to `4 + 4 * Math.pow(2,12)`. You could change the name of the function from `test` to `squared` and change the second print statement to `squared(4)`.  Click <span class="buttonText">run</span>  again to see the effects of your changes.

To restore *all* the example code on a given page to the original versions, refresh/reload the browser window.

*Caution #1:* Though it is hard to "crash" the system by typing your own code, it is possible to create (effectively) infinite loops or programs that take a *loooooooooooong* time to finish.  Thankfully, the WebPPL interactive interpreter has a <span class="buttonText">cancel</span> button that you can click that (*most of the time*) will stop your program and return to a normal web browsing state.  If that doesn't work, you may need to close the web page, or maybe even close your browser ("Force Quit" on Macintosh).

*Caution #2:* The error messages emitted by WebPPL interactive interpreter are frequently cryptic, not very helpful, or and sometimes not understandable. Therefore, it is best for new programmers to make a few changes or write a few statements at a time, and check that they compile and run before continuing.  

## Writing Your Own WebPPL Code

At some point, you may want to write your own WebPPL code, along with some documentation, like you see in this tutorial.  While you could go all the way to using an integrated development environment (IDE) and run WebPPL via the command line, it may be easier to start with the interactive interpreter and a "blank sheet" for documentation.

For this purpose we provide an [Interactive Editor](interactive_editor.html) that allows you to create code blocks, text blocks, and to combine them into "[markdown](https://en.wikipedia.org/wiki/Markdown)" format that you can copy/paste into a text file and save locally. (This is the workflow used to create this tutorial.)


---

## Credits

This tutorial draws significantly on the tutorial "[Modeling Agents With Probabilistic Programming](http://agentmodels.org)", both content and the various templates used to generate the web pages.  The authors made the content and templates available [here on Github](https://github.com/agentmodels/agentmodels.org/tree/gh-pages/chapters) for to promote use, reuse, remixing, and other extensions.

Other more specific credits are given on individual pages of this tutorial.

