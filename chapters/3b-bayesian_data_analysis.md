---
layout: chapter
title: Empirical Bayesian Data Analysis
description: "Empirical Bayesian data analysis methods are an attractive alternative to frequentist methods -- e.g. Null Hypothesis Significance Testing -- to evaluate the results of experiments, etc."
is_section: false
--- 

Empirical Bayesian data analysis are an attractive alternative to frequentist methods, e.g. Null Hypothesis Significance Testing, linear regression, logistic regression, Analysis of Variance (ANOVA). Though there are specialized tools (e.g. STAN) for Bayesian data analysis, this use case shows the versitility and general applicablity of probabilistic programming.

~~~~
/*
var observedData = "H";
var prior = function () { return flip(0.5) ? "H" : "T"; }
var likelihood = function (h) {
return h === "H" 
? flip(0.9) ? "H" : "T" 
: flip(0.1) ? "H" : "T"; }

var posterior = Infer({method: "enumerate"},
function () {
var hypothesis = prior();
var data = likelihood(hypothesis);
condition(data == observedData);
return {hypothesis: hypothesis};
});

viz.auto(posterior);
*/

var count = function(item,arr){
if (arr.length === 0 || item.length === 0){
return 0;
} else {
return filter(function(x){return x == item;},arr).length;
}
}

var observedData = ["T", "T", "T", "T","T"];
var prior = function () { return flip(0.5) ? "H" : "T"; };
var likelihood = function (h) {
return h === "H" 
? flip(0.5) ? "H" : "T" 
: flip(0.5) ? "H" : "T"; };

var enumParams = {method: "enumerate"};
var mcmcParams = {method: "MCMC",kernal : "MH", samples : 25000};
var posterior = Infer(enumParams,
function () {
var hypothesis = prior();
var data = mapN(function(x){return likelihood(hypothesis);},observedData.length);
var dataHcount = count("H",data);
var obsHcount = count("H",observedData);
factor( dataHcount === obsHcount ? 0 : -Infinity);
return {hypothesis: hypothesis};
});

/*
var hypothesis = prior();
var data = mapN(function(x){return likelihood(hypothesis);},observedData.length);
print("Observed : " + observedData + "; Data : " + data);
print(count("H",data) + " vs " + count("H",observedData));
*/
viz.auto(posterior);
~~~~