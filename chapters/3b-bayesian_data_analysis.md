---
layout: chapter
title: Empirical Bayesian Data Analysis
description: "Empirical Bayesian data analysis methods are an attractive alternative to frequentist methods -- e.g. Null Hypothesis Significance Testing -- to evaluate the results of experiments, etc."
is_section: false
--- 

Empirical Bayesian data analysis are a set of methods that are an attractive alternative to frequentist methods, e.g. Null Hypothesis Significance Testing, linear regression, logistic regression, Analysis of Variance (ANOVA). Though there are specialized tools (e.g. STAN) for Bayesian data analysis, this use case shows the versitility and general applicablity of probabilistic programming.

## Testing the Fairness of a Coin

How many coin tosses do you need to see before you can decide whether a coin is fair or unfair?

Imagine that someone tosses a coin once...twice...three times and you see three "heads" in a row.  Is that strong evidence that the coin is unfair (not 50/50)?  How many more consecutive "heads" would you need to see to decide whether this was a fair or unfair coin?  

[Checking whether a coin is fair](https://en.wikipedia.org/wiki/Checking_whether_a_coin_is_fair) is a "a simple problem on which to illustrate basic ideas of statistical inference also provides a simple problem that can be used to compare various competing methods of statistical inference"<sup>*</sup> given limited information.

<p class = "note"><sup>*</sup>Wikipedia has a nice article <a href="https://en.wikipedia.org/wiki/Checking_whether_a_coin_is_fair">here</a>, including comparison of the Bayesian approach (fixed number of tosses plus prior knowledge) vs the Frequentist approach (any number of tosses and no prior knowledge)
</p>

Though this problem is simple enough to calculate probabilities analytically, it makes a nice problem to start demonstrating how probabilistic programming can be used for empirical data analysis and empirical inference, in part because we can compare our results with the exact results from analysis.  For example, here are two plots with the same conditions: prior = uniform distribution, with evidence of 7 heads out of 10 tosses.  On the left is the analytical solution, and on the right is output from the program below.

<img style="display:block;width:550px;" src="{{ site.baseurl }}/assets/img/analytic_vs_estimated.png">

## What is "Fair"?

While we commonly think of a fair coin as having *exactly* 0.5 probability of heads, this is an idealization that assumes that we can (or must) toss the coin very many times (arbitrarily many).  If we know ahead of time that we will only toss the coin a few or many times, we may accept a coin as "fair" of the probability of heads is close to 0.5.  How close?  This depends on the decision maker and what you will do with the information.  Are you placing bets?  Are you comparing coins, to chose the most fair (or unfair)?

In our case, we'll define "fair" as $$0.4 \leq p \leq 0.6$$.  The *probability that a coin is fair* given the probability distribution of heads, $$p$$, is defined as the area under the curve between the limits 0.4 and 0.6, as shown in the figure below.

<p class = "note">"...area under the curve...": This is why probability and statistics requries calculus once you start dealing with continuous probability distributions.</p>

<img style="display:block;width:550px;" src="{{ site.baseurl }}/assets/img/probability_of_fair.png">

What if this were a uniform (flat) distribution? Then the probability of a fair coin would be quite low, because much more probability mass lies outside that range than inside.  The reverse is true if the distribution were narrow and concentrated within that range.  You'll see these effects in the experiment that follows.

## Bayesian Analysis in an Experiment with Limited Information 

Here's the experimental setup.  There are `K` total coin tosses, with `numH` = number of heads ("H") out of `K`, but only the first `N` will be observed.  Thus `K` defines the "longest possible run" or "all possible datat" and the ratio `numH / K` is the "ground truth" of the probability of tossing "heads" (a.k.a. $$p$$).  If $$p$$ is close to 0.5, then the coin is fair.

Click <span class="buttonText">run</span> button at the bottom of the codebox to execute the program and generate estimates.

Initially `K = 10; N = 10; numH = 7`, therefore $$p = 0.7$$.  When $$N = K$$, that means you are seeing *all* of the available data.  If $$N < K$$, you are only seeing some of it. You can set these to any positive integer as long as $$N \leq K$$; $$H \leq K$$ and $$K > 0$$; $$N > 0$$.  Try setting `N = 1` (a single toss), or  `N = 3`, or set `K` to a large number, with proportionate `numH`.  

Notice what happens in each of these settings with the three cases of prior knowledge: 1) uninformed (uniform distribution); 2) somewhat informed (beta distribution); and 3) very informed (narrow Gaussian distribution). 

~~~~
//********************************************************************
// UTILITY FUNCTIONS
//********************************************************************
//   count(item,arr); takeN(n, arr); shuffle(arr), truncatedGaussian() 
///fold:
// count: count the number of "item" in "arr"
var count = function(item,arr){
    if (arr.length === 0 || item.length === 0){
       return 0;
    } else {
      return filter(function(x){return x == item;},arr).length;
    }
}

// takeN: return the first "n" elements of "arr"
var takeN = function(n, arr){
    return n <= 0 || arr.length === 0
        ? 0
        : remove(null, mapIndexed(function(i,x){return i < n ? x : null},arr));
}

var removeIndexed = function(i, arr){
    return remove(null,mapIndexed(function(j,x){return j === i ? null : x;}, arr));
}

// add random elements from array to an accumulator
//  This is a recursive function, with safety counter
var addRandomElement = function(arr,acc,count){
    if (count >= 0 && arr.length > 0){
        var x = sample(RandomInteger({n:arr.length}));
        var newAcc = acc.concat(arr[x]);
        var newArr = removeIndexed(x,arr);
        var newCount = count - 1;
        addRandomElement(newArr,newAcc,newCount);
    } else {
        return acc;
    }
}

// shuffle: return an array in random order
var shuffle = function(arr){
    return addRandomElement(arr,[],arr.length);
}
// truncatedGaussian: returns a distribution with mean mu and s.d. sigma, 
//   truncated at 0.0 and 1.0, inclusive
var truncatedGaussian = function(mu, sigma){
    var x = gaussian({mu:mu,sigma:sigma});
    condition(x >= 0 && x <= 1.0);
    return x;
}
///

//********************************************************************
// EXPERIMENT PARAMETERS
//********************************************************************

var K = 10; // total number of observations in trial
var numH = 7; // number of Heads in all observations in the trial
var N = 10; // number of (randomly selected) observations in observedData

//********************************************************************
// OBSERVED DATA ("EVIDENCE")
//********************************************************************
var trial = mapN(function(x){return x < numH ? "H": "T";},K);
var observations = shuffle(trial);
var observedData = takeN(N,observations);
var obsH = count("H", observedData);

//********************************************************************
// PRIOR KNOWLEDGE
//********************************************************************

// Uniformative prior:
///fold:
//    We have no expectation of likelihood of fair coins vs unfair coins
//  Therefore, a uniform(0,1) fits this lack of prior knowledge
///
var uninformativePrior = function(){return uniform(0,1);}

// Somewhat informative prior:
///fold:
//    We expect fair coins to be most common: mean = 0.5;
//    Equal probability of unfairness in both H and T;
//    With declining probability as p -> 1 and -> 0;
//    Zero probability of deterministic coin (always H or T)
//  Therefore, a Beta(2,2) fits this prior knowledge.
///
var informativePrior = function(){return beta(2,2);}

// Very informative prior:
///fold:
//    We expect fair coins to be most common: mean = 0.5;
//    Equal probability of unfairness in both H and T;
//    Unfair coins are very rare, especially at extremes.
//    Zero probability of deterministic coin (always H or T)
//  Therefore, a Gaussian(0.5,0.1) fits this prior knowledge.
///
var highlyInformativePrior = function(){return truncatedGaussian(0.5,0.1);}

//********************************************************************
// MODEL and INFERENCE
//********************************************************************

// toss: function that returns "H" with probability r, otherwise "T"
var toss = function(r) {return flip(r) ? "H" : "T";}

// We'll use MCMC inference, since our variable of interest is continuous with
//  finite support (0,1), and without multiple modes or other complications.
var mcmcParms = {method: 'MCMC', kernal : "MH", samples:25000, burn: 1000};
var posterior = function(prior) {
    return Infer(mcmcParms,
        function () {
            //  p is defined as the probability of "H" on a single toss, 
            //  in the range (0,1). p is our variable of interest 
            var p = prior();
            // data: N random draws from toss(p), given random draw of p
            var data = repeat(N,function(){return toss(p);});
            // Count the number of heads, since we don't care about the order
            var dataH = count("H",data);
            // Upweight likelihood when # of "H" in data = # of "H" in observed
            //observe(Gaussian({mu: dataH, sigma: 0.2}), obsH);

            // "factor()" is a second method for weighting likelihood.
            //   This is a "softer" method because it downweights non-matching
            //   execution traces by an amount proportional to the number of tosses,
            //   as opposed to downweight by -Infinity, as in condition() and observe().
            //   The justification is that with few tosses, you have less justification
            //   for modifying your prior beliefs
            factor (dataH == obsH ? 0 : -( N / 2.5));
            //  ^^^^^ try uncommenting this, 
            //          while also commenting out "observe(...)" above
            return {p: p};
        });
}

//********************************************************************
// FAIR COIN INFERENCE: Is it fair, given prior knowledge and evidence?
//********************************************************************

var upperLimit = 0.6;
var lowerLimit = 0.4;
var options = {method: 'forward', samples: 5000}

var fairTest = function(dist,lower,upper){
    return Infer(options,function() {
        var A = sample(dist);
        var D = (A.p >= lower && A.p <= upper);
        return {"fair?" : D};
    });
}

//********************************************************************
// RUN MODELS AND VISUALIZE RESULTS
//********************************************************************
///fold:

var trialString = "(Observe " + obsH +" heads in "+ N +" tosses)";
var trialA = posterior(uninformativePrior);
var fairA = fairTest(trialA,lowerLimit,upperLimit);

print("A: Uniformative prior = 'Ignorance' "  + trialString);
viz.auto(trialA);
viz.auto(fairA);


var trialB = posterior(informativePrior);
var fairB = fairTest(trialB,lowerLimit,upperLimit);
print("B: Somewhat Informative prior = 'Most coins are fair' "+ trialString);
viz.auto(trialB);
viz.auto(fairB);

var trialC = posterior(highlyInformativePrior);
var fairC = fairTest(trialC,lowerLimit,upperLimit);
print("C: Highly Informative prior = 'Nearly all coins are fair' "+ trialString);
viz.auto(trialC);
viz.auto(fairC);
///
~~~~
