---
layout: chapter
title: A Virtual World for Engineering Design Teams
description: "Model of a virtual world that features products that are designed, produced, and consumed."
status: work-in-progress
pct_complete: "30%"
last_modified: "2016-11-06"
is_section: true
---

This chapter presents a model of a virtual world for small engineering design teams (one to five), centered on the product they are designing, including its subsystems and relevant 'physics', and also the way consumers interact with products during the course of consumption.

## Product Architecture

Figure 1 shows the architecture for the products being designed and consumed refp:sosa_computational_2005.  There is a square perimeter with 12 fixed anchor points evenly spaced, and some number of lines between pairs of anchor points (that are not on the same side of the square).  There are two distinct viewpoints on the product: 1) designers, and 2) consumers. The designer team's view is this configuration of anchor points and lines (Figure 1a).  Consumers "consume" a product by tracing convex polygons (Figure 1b), and there are many possible tracings for any given physical configuration.

<img class="resize" src="/assets/img/product_architecture.png" style="display:block;min-width: 95%; max-width: 100%; height: auto;"/>

### Physical and Euclidean Manifestations

Products will be conceived as having a physical manifestation in addition to the Euclidean/Topological/Graph Theory manifestation.   Broadly, we can conceive of the end Product as being analogous to a complex chemical molecule (e.g. a protein, an antibody, a catalyst, or similar).  The Consumer’s perception/valuation/utility functions would be analogous to using the complex chemical molecules in a medical or manufacturing setting, where the “value” or “performance” of the molecule depends on protein folding or other molecular capabilities/processes of that sort.  

We can define a physical manifestation of the Consumer’s usage of the Product.  Let’s say that the act of tracing a Hamiltonian cycle exerts a physical force on the Product.  Longer lines will be subject to more force than shorter lines.  Lines that are traced multiple times will have to endure more force than those that are traced only once (or not at all). Lines that are bonded to each other in the middle of the square will have more strength to resist this force than those that do not.  We can even define one or more “failure modes” relative to this force of usage.  First, we could define “catastrophic failure” as a Product that simply breaks because it is too fragile relative to the normal usage forces.  Second, we could also define “distortion failure” as a Product that flexes too much under usage force and therefore does not adequately maintain it’s Euclidean shape.

## Subsystems

Seen this way, the tasks for designers can be associated with three interrelated “subsystems” plus System Design:

1.	*Materials* -- the properties, capabilities, and costs of the raw materials that constitute main components of the Product (Lines and Joints/Bonds).
2.	*Joints/Bonds* -- the properties, capabilities, and costs of the components that hold together the raw materials.  
3.	*Assembly Process* -- the properties, capabilities, and costs of processes that convert raw materials and joints/bonds into the final product.
4. *System Design* -- making choices among a range of compatible portfolios of Materials + Joints/Bonds + Assembly Processes.


### Materials Subsystem

The raw materials would be for two purposes: 1) Lines, and 2) Bonds.  We could define a space of possible raw materials according to a pre-defined set of characteristics – e.g. resistance to breaking, resistance to bending, workability, weight, cost, etc.  Lines have physical characteristics of length, thickness, and weight, and (abstractly) are subject to associated forces in assembly and Consumer usage.  Bonds have physical characteristics associated with the geometry of a specific arrangement of Lines and Vertexes.  Lines could be bonded end-to-end to yield long lines.  

As is typical in Nature, the most abundant and accessible raw materials would be the least desirable while those with conceptually ideal characteristics would be rare or even non-existent.  Designers face an exploration-exploitation challenge. It takes trial-and-error learning to get good at using any raw material, which favors exploiting the raw materials they already use.  But breakthrough designs might result if new raw materials are explored or discovered.  The pressure on Designers of materials will depend on the complexity and demands of the target design and also on the capabilities of the other two sub-systems.


### Joints/Bonds Subsystem

As a subsystem, the function of Joints/Bonds is to bring together Lines and Vertices in certain geometric configurations (“joint”) and to hold them together to endure the forces of manufacturing and usage (“bond”).  In our Product architecture, every place a Line touches a Vertex or a Line crosses a Line is an opportunity for a Joint/Bond component. In Figure 1a, where Line A-I crosses Line B-J is an opportunity for a Joint/Bond.  Only at the Vertexes (e.g. A, B, C…) are Joints/Bonds required.

Specific Joint/Bond designs might be specialized for a specific geometry (i.e. 90º angles and two lines at a time) or might be more general (flexible for any angle between 30º and 90º, and two or three lines at a single joint).  Raw materials would have varying capability to support each of these Joint/Bond designs.  The same raw material might be suitable for both Lines and Joints/Bonds of a certain type, while other designs might utilize very different raw materials for Lines as compared to Joints/Bonds.  More complex Joint/Bond designs would be more difficult to manufacture and assemble and would be more prone to failures of both types listed above.  Designers could overcome these difficulties through learning-by-doing and also possibly with design breakthroughs.

We can define a space of possible Joint/Bond designs based on a specified list of characteristics: joint angles, number of lines that can be joined, fixed or variable joint angles, and so on.  It should be possible to give each possible design a “complexity” score and thus to create a partial order of design alternatives.  This would support a cost function based on complexity, but also a gradient of design difficultly.

### Assembly Process Subsystem

We can conceive of the assembly process as a set of instructions and recipes, where a "recipe" is looser and more flexible than instructions (which might be good or bad, depending on the context of manufacturing).

Like the other two subsystems, we can define a space of possible assembly processes relative to the cost and quality of output, relative to specific “baskets” of raw materials, Joint/Bond designs, and aggregate design configurations.  For example, the simplest assembly process might only be able to reliably build the simplest product designs, constituted of simple/cheap/unsophisticated raw materials (implying short Lines) and the simplest Joints/Bonds.  A somewhat more sophisticated process might do well with regular and repeating patterns of Lines and Joints (e.g. a lattice) but might be incapable of assembling irregular designs.  The most sophisticated processes might be capable of assembling the most advanced raw materials using the most complicated Joints/Bonds, but might also be “overkill” for much simpler designs.

### System Design

There is potential for system design work using this scheme, as distinct from subsystem design.  I wouldn’t say that it’s required in a minimal Team, however.  It’s possible to have a Team consisting of three sub-teams (one or more Designer for each sub-team) and, thus, the system design would emerge implicitly through their interactions and independent actions. System design could also be a topic of explicit reasoning, negotiation, and deliberation among subsystems and sub-teams.

In this proposed scheme, a System Designer would make choices among a range of compatible portfolios of Materials+Joints/Bonds+Assembly Processes.  This would require that System Design agents have some model of what constituted compatibility between the subsystems and, conversely, how conflict between subsystems arise.  This might entail building and testing mental models of the design process for each subsystem and also mental models of how they interact to yield the final Product.  These mental models might be tacit or explicit, or both.

## Modeling Material Process Design

The following is a very simple model for Material process design.  There are two classes of materials: 1) Lines and 2) Bonds.  The materials design process involves making decisions about A) inputs, and B) transformation/synthesis process, that together yield a batch of materials with the desired physical characteristics.

### Material Characteristics

Lines have the following physical characteristics $$\mathcal{C}_l = \{l,t,d,s,b,w,x,\Delta c\}$$:

- Length $$l$$
- Thickness $$t$$
- Density $$d$$
- Stiffness $$s$$
- Brittleness $$b$$
- Workability $$w$$
- Bonding Compatibility $$x$$ (i.e. degree of compatibility to bond materials)
- Cost per unit weight $$\Delta c$$
    - Total cost $$c = \Delta c \times (l \times t \times d)$$ )

Bond materials have the following physical characteristics $$\mathcal{C}_b = \{x,m,f,\Delta c\}$$:

- Bonding Compatibility $$x$$ (i.e. degree of compatibility with line materials)
- "Muscle" (Strength) $$m$$
- Fatigue succeptability $$f$$
- Cost per unit $$\Delta c$$

### Inputs 

For inputs $$I$$ (a.k.a. raw material), we'll define four somewhat-idealized classes:

1. "Bio" $$B$$ -- natural substances harvested from nature and produced by biological processes (e.g. wood, sap, etc.)
2. "Metal" $$M$$ -- refined metals that can be shaped and transformed
3. "P-Synthetic" $$P$$ -- plastic-like materials 
4. "G-Sythetic $$G$$ -- crystaline materials (e.g. glass, graphite, etc)
5. "Chemical" $$C$$-- reactive chemicals that modify, catalyize, or transform other materials through thermo-chemical reactions.

To simplify, we'll assume that these inputs are binary -- present or not present -- and therefore there will be $$2^5 - 1 = 31$$ unique input combinations. (The "minus one" eliminates the empty input combination.) Example input sets $$I$$:

- Bio only: $$I=\{B\}$$
- Bio + Metal: $$I=\{B,M\}$$
- P-Synthetic + Chemical: $$I=\{P,C\}$$

Further constraining the design process, Nature requires that Bond materials always include the Chemical input. Either the Chemical alone is "sticky" enough to bond, or it transforms the other material into something "sticky" and bond-like. Therefore, the number of unique combinations for Bond inputs are $$2^3=8$$, including Chemical alone.

We'll define the states of Nature for these inputs in two ways. First, we define input-independent *probability* of acheivement (i.e. high probability = 'easy', low probability = 'hard'). 

> *Note*: There is a little shorthand in notation in the following rules. $$Pr(l \mid \hat l \rightarrow l_{min})$$ is short for $$Pr(l \geq \hat l \mid \hat l \rightarrow l_{min})$$, which reads:

> <span style="font-size:88%;" markdown="1">"The probability of acheiving length $$l$$ greater than the target $$\hat l$$, given that the target length is small (i.e. approaches the minimum length)."</span>

- Length: $$Pr(l \mid \hat l \rightarrow l_{min}) \gg Pr(l \mid \hat l \rightarrow l_{max})$$
- Thickness: $$Pr(t \mid \hat t \rightarrow t_{mid}) > Pr(t \mid \hat t \rightarrow t_{max}) \gg Pr(t \mid \hat t \rightarrow 0)$$
- Density $$Pr(d \mid \hat t \rightarrow d_{mid}) > Pr(d \mid \hat d \rightarrow d_{max}) \gg Pr(d \mid \hat d \rightarrow 0)$$
- Stiffness $$Pr(s \mid \hat s \rightarrow s_{mid}) > Pr(s \mid \hat s \rightarrow s_{max}) \gg Pr(s \mid \hat s \rightarrow 0)$$
- Brittleness $$Pr(b \mid \hat b \rightarrow b_{max}) >  Pr(b \mid \hat b \rightarrow 0)$$
- Workability $$Pr(w \mid \hat w \rightarrow 0) \gg Pr(w \mid \hat w \rightarrow w_{max})$$
- Cost per unit weight $$Pr(\Delta c \mid \hat \Delta c \rightarrow \Delta c_{max}) \gg Pr(\Delta c \mid \hat \Delta c \rightarrow 0)$$ 

Translating: it's harder to make long lines than short lines; harder to make thick lines than normal, and much harder than very thin lines; and similar for density and stiffness. It's harder to make a line that less brittle than one that is more brittle.  It is harder to make a line that is more workable than one that is less workable.  Finally, it is easier to make lines with high unit cost than lines will very low costs. 

Second, taking each material as a solo input, we will define the *probability* of being transformed into each of the (desired) physical characteristics (e.g. $$ \hat l$$ is the desired length, which is bounded by $$l_{min}$$ and $$l_{max}$$). We'll define the ordinal ranking of these probabilities:

- Length $$Pr(l = \hat l)$$:  $$B > M > P > G \gg C \approx 0.0$$, as $$\hat l \rightarrow l_{max}$$
- Thickness $$Pr(t = \hat t)$$: 
    - $$M > G > B > P \gg C$$ as $$\hat t \rightarrow 0$$
    - $$B > M > P > G \gg C$$ as $$\hat t \rightarrow t_{max}$$
- Density $$Pr(d = \hat d)$$: $$M > G > B > P \gg C \approx 0.0$$, as $$\hat d \rightarrow d_{max}$$
- Stiffness $$Pr(s = \hat s)$$: $$M > G \gg B > P \gg C \approx 0.0$$, as $$\hat s \rightarrow s_{max}$$
- Brittleness $$Pr(b = \hat b)b$$: $$G > B > M > P \gg C \approx 0.0$$, as $$\hat b \rightarrow b_{max}$$
- Workability $$Pr(w = \hat w)w$$  $$C > B > P > M \gg G$$, as $$\hat w \rightarrow w_{max}$$
- Cost per unit weight $$Pr(\Delta c = \Delta \hat c)$$: $$C > B > P > G > M$$, as $$\Delta \hat c \rightarrow 0$$

Let me translate the first line: If you are trying to produce a long line, it is much easier (higher probability) to do this using Bio (e.g. wood) than Metal, and Metal is easier than P-Synthetic (e.g. plastic), and easier than G-Synthetic (e.g. glass).  All these are much easier than trying to produce a long line using Chemical alone, will probability almost equal to zero.

If all this sounds complicated (like: "how are we ever going to model agent reasoning and learning?") -- don't worry.  Abstraction is our friend! Behold $$\ldots$$

### Transformation Process

We will model the Transformation process $$T$$ as a function mapping from the vector of inputs to a  Material characteristics vector, given a vector of process characteristics \Theta.

$$
T(I,\Theta) = \mathcal{C}
$$

Since any function $$f(x)=y$$ can be defined and implemented as a lookup table $$x \rightarrow y$$ (given enough memory!), we will synthesize<sup>*</sup> the function $$T$$ as a lookup table (of sorts) using random variables and conditioning that impose contraints consisetent with the probability structures listed above.

<p class="note"><sup>*</sup>Why this approach and not some other? For example, many papers that look at search or optimization on rugged landscapes simply draw from probability distributions for each performance/outcome variable.  The problem with this approach is that (generally) all points in the landscape are independent of all the others, including neighbors.  So if <em>A</em> and <em>B</em> are similar input and process characteristic vectors, there is nothing to be gained by "learning" about <em>A</em> in order to improve your estimate of <em>B</em>.  In contrast, we need to have meaningful similarity in outcomes given similar inputs.</p>

<p class="note">Another approach you might imagine would be to define T(I,\Theta) as high degree polynomials with some noise terms.  While that might work, it imposes more experimentor bias/preference than I think is necessary.  We really want to be ignorant of the details of this (and other) performance landscapes, as long as those landscapes have the right general characteristics</p>

I don't want to be specific about the nature of these Transformation processes, and therefore I'd like to treat the vector of process characteristics \Theta as abstractly as possible, while still preserving the notion that each characteristic has *some* semantic value to designers (Actors), and also enabling a mechanism for detecting degree of similarity $$\sigma$$ between any two characteristic vectors: $$\sigma = Similarity(\Theta_1, \Theta_2)$$; $$0 \leq \sigma \leq 1$$.

<div class="work_in_progress" markdown="1">

**I am not so sure that SDR is the right way to go**

I going to try using [Sparse Distributed Representations](https://en.wikipedia.org/wiki/Sparse_distributed_memory)<sup>**</sup> (SDR) for product characteristic vectors.

</div>

<p class="note"><sup>**</sup><span markdown = "1">Since 1988 [add reference], SDRs have been used in human-centered AI to model how the human neocortex represent complex streams of "inputs", either sensory inputs or signals from other neural systems or biochemical systems. [Numenta](http://www.numenta.com), a privately held product and research company in Redwood City, CA, has been the most steadfast advocate, champion, and center of research on SDRs and cognitive systems built on top of them. See the book *[On Intelligence](https://en.wikipedia.org/wiki/On_Intelligence)* for an accessable description and motivation for SDRs</span></p>

SDRs are very large binary vectors (from a few hundred to thousands of bits), where there are a fixed proportion of bits that are "on" for all valid encodings. (The formal term is "*Norm*" $$\mid x \mid$$ "The norm of point x is the number of ones in its binary representation."  Some implementations might have a *soft max* norm instead of *fixed*, but we will go with a fixed norm that we set to meet our needs).

Each bit in an SDR is, presumptively, semantically meaningful.  The length of the SDR vector is chosen to be much larger than the most condensed (i.e. cannonical) vector of characteristics and values for each characteristic.

*The key feature* of SDRs, for our purposes, is that it is very easy to calculate similarity $$\sigma$$ between two SDR encodings.  The $$Similarity(\Theta_1, \Theta_2)$$ operation is simply *counting the number of matching ones*, divided by the norm.  If they perfectly match, then $$\sigma = 1$$.  If no match, then $$\sigma = 0$$.  We just need to pick a SDR length and $$\mid x \mid$$ to give us the right discriminant capabilities.

There are many ways to encode semantic data into an SDR of a given length.  Since we won't assume anything about the length and encoding of the elements in $$\Theta$$, we'll go with a random encoding.

We have to be thoughtful about implementation, because we don't want to blindly implement a loop through $$2^{1000}$$ possible encodings during initialization.  (Fun fact: $$2^{1000} = 1.07 \times 10^{301}$$, and it is *284 orders of magnitude greater* than the number of seconds since the Big Bang ($$4.35 \times 10^{17}$$ seconds).)

From [Wikipedia](https://en.wikipedia.org/wiki/Sparse_distributed_memory#Memory_location): "It is impossible to reserve a separate physical location corresponding to each possible input; SDM implements only a limited number of physical or hard locations. The physical location is called a memory (or *hard*) location."

We will start with an SDR length of 200 and $$\mid x \mid$$  = 0.2 (i.e. 40 one's out of 200).

What we will do is to generate a modestly-sized set of initialization points, where each initialization point is minimally matched to only one, two, or three other points in the initialization set.  I say "modestly-sized" only in relation to the astronomical size of the SDR code space.  As a start, I will try at 5 times the length of the SDR vector: e.g. 1,000 initialization points for an SDR of length 200 and $$\mid x \mid$$  = 0.2.

We will store each SDR as an address concatentated with the output vector, where "address" is an integer list of vector indexes that are set to 1.  The address will always be a vector of 40 integers ($$0.2 \times 200$$).

<div class="work_in_progress" markdown="1">

Instead of this implementation, should probably use the Javascript library for SDR:

- [https://github.com/lessc0de/sdm-1](https://github.com/lessc0de/sdm-1)
- [Kanerva's sparse distributed memory (NASA)](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19890017031.pdf)

~~~~
var N = 200;
var norm = 0.2;
var num_ones = Math.round(N * norm);
var num_init = 5 ; //N * 5;

var removeIndexed = function(i, arr){
    // remove the ith element in arr
    var first = arr.slice(0,i );
    var second = arr.slice(i + 1, arr.length );
    return Array.prototype.concat(first, second);
}

var isIn = function(y,arr){
  if (arr.length > 0){
    return any(function(x) { return x === y; }, arr);
  } else {
    return false;
  }
}

// Remove duplicates from a sorted array
var dedup = function(arr){
  var nodup = reduce(function(z,acc){return isIn(z,acc) ? acc : [z].concat(acc); },[],arr);
  return nodup;
}

var minArray = function(arr){
  return reduce(function(x,acc){return x < acc ? x : acc},arr[0],arr);
}
var maxArray = function(arr){
  return reduce(function(x,acc){return x > acc ? x : acc},arr[0],arr);
}

// recursive function
var addIfNotIn = function(arr, mask, result){
  // return all elements of arr that are NOT in mask
  if (arr.length == 0){
    return result;
  } else {
    var x = first(arr);
    if (any(function(y){return y ==x;}, mask) ){
      var newResult = result;
      var newArr = removeIndexed(0,arr);
      return addIfNotIn(newArr,mask, newResult);
    } else {
      var newResult = Array.prototype.concat(result,x);
      var newArr = removeIndexed(0,arr);
      return addIfNotIn(newArr,mask, newResult);
    }
  }
  
}

var drawAgain = function(n, results, count){
  if (count <= 0){
    return results;
  } else {
    var draw = sample(RandomInteger({n:n}));
    var isNotNew = any(function(x){return draw==x;}, results);
    var newResults = isNotNew 
            ? results
            : Array.prototype.concat(results, draw);
    var newCount = isNotNew
            ? count
            : count - 1;
    return drawAgain(n,newResults, newCount);
  }
}

var drawN = function(n, arr){
  // return n randomly selected elements from arr
  var drawIndexes = drawAgain(arr.length, [ ],n);
  return map(function(x){return arr[x];},drawIndexes);
}

/*
var drawN = function(n, arr){
  // return n randomly selected elements from arr
  var allElements = mapN(function(x){return x;}, arr.length);
  var drawCount = mapN(function(x){return x;}, n);
  var result = reduce(
    function(x, acc){
       var drawIndex = sample(RandomInteger({n:arr.length}));
       var element = arr[drawIndex];
       var newElements = removeIndexed(drawIndex, acc.elements);
       var newData = Array.prototype.concat(acc.data, element);
       return {
         elements: newElements,
         data: newData
       }
    }, { elements: allElements, data :[ ] }, drawCount);
  return result.data;
 
}
*/
var drawRandom = function(arr, counter, result){
    if (counter <= 0){
        return result;
    } else {
        var drawIndex = sample(RandomInteger({n:arr.length}));
        var element = arr[drawIndex];
        var nextResult = Array.prototype.concat(result, element );
        var nextCounter = counter - 1;
        var nextArr = removeIndexed(drawIndex, arr);
        return sort(drawRandom(nextArr, nextCounter, nextResult));
    }
}

var genRandomSDRaddress = function(n,o){
    // generate a vector (length o) of random integers between 0 and n - 1
    // first, create an array of all possible indexes in the SDR
    var allIndexes = mapN(function(x){return x;},n - 1);
    // draw o indexes randomly, without replacement
    return drawRandom(allIndexes, o, [ ]);
}
/*
// recursive function OLD
var genSDR = function(n,o,c, 
                       unallocatedIndexes,
                       allocatedIndexes,
                       result,
                       count){
  if (count <= 0){
    return result;
  } else {
      // first time through, only draw from unallocatedIndexes
     var sdr1 = allocatedIndexes.length != 0
      ? drawRandom(unallocatedIndexes, o - c, [ ])
      : drawRandom(unallocatedIndexes, o, [ ]);
    var sdr2 = (allocatedIndexes.length != 0) 
      ? drawRandom(allocatedIndexes, c, [ ])
      : [] ;
    var sdr = sort(Array.prototype.concat(sdr1, sdr2));
    var newUnallocatedIndexes = reduce(function(x,acc){ 
      return remove(x,acc);}, unallocatedIndexes, sdr);
    var newAllocatedIndexes = sort( 
      Array.prototype.concat(allocatedIndexes,sdr ));
    var newResult = Array.prototype.concat(result, [sdr]);
    var  newCount = count - 1;
    return genSDR(n,o,c,
                  newUnallocatedIndexes,
                  newAllocatedIndexes,
                  newResult, 
                  newCount)
  }
}

var genCoupledSDRsOLD = function(k,n,o,c){
    // generate k vectors of length o, each
    //   consisting of random integers between 0 and n - 1
    //   BUT with at least c common indexes between
    // first, create an array of all possible indexes in the SDR
    var unallocatedIndexes = mapN(function(x){return x;},n - 1);
    return genSDR(n,o,c, unallocatedIndexes, [ ], [ ], k);
}
*/
// recursive function
var genUncoupledSDR = function(n,o,c, 
                       unallocatedIndexes,
                       allocatedIndexes,
                       result,
                       count){
  if (count <= 0){
    return result;
  } else {
    var sdr =  drawRandom(unallocatedIndexes, o - c, [ ]);
    var newUnallocatedIndexes = reduce(function(x,acc){ 
      return remove(x,acc);}, unallocatedIndexes, sdr);
    var newAllocatedIndexes = sort( 
      Array.prototype.concat(allocatedIndexes,sdr ));
    var newResult = Array.prototype.concat(result, [sdr]);
    var  newCount = count - 1;
    return genUncoupledSDR(n,o,c,
                  newUnallocatedIndexes,
                  newAllocatedIndexes,
                  newResult, 
                  newCount);
  }
}


var genCoupledSDRs = function(k,n,o,c){
    // generate k vectors of length o, each
    //   consisting of random integers between 0 and n - 1
    //   BUT with at least c common indexes between
    // first, create an array of all possible indexes in the SDR
    var unallocatedIndexes = mapN(function(x){return x;},n - 1);
    
    // generate k vector of length o - c with no overlap
    var uSDRs = genUncoupledSDR(n,o,c, unallocatedIndexes, [ ], [ ], k);
    var allocated = dedup(sort(reduce(
      function(x,acc){
          return Array.prototype.concat(x,acc);},[ ], uSDRs)));
    // now create an array, one for each SDR, removing it's own allocated
    //   indexes.  (Selecting from self does not create coupling!)
    var allocatedK = mapN(
      function(x){
        return map(function(y){
          return remove(
            function(z){return z==y;},allocated)},uSDRs[x]);
      },k);
    var cSDRs = mapN(
      function(x){ 
         return drawN(c,allocatedK[x])
          ;},k);
    var sdrs = map2(
      function(x,y){
          return Array.prototype.concat(x,y);},uSDRs,cSDRs);
    return sdrs;
}

var modSDRaddress = function(sdr){
  // randomly pick one SDR index to swap with another not currently set = 1
  var allIndexes = mapN(function(x){return x;},N - 1);
  var availableIndexes = addIfNotIn(allIndexes,sdr,[]);
  // pick one to drop
  var dropIndex = sample(RandomInteger({n: sdr.length}));
  var newSDR = removeIndexed(dropIndex, sdr);
  // pick one to add
  var addIndex = sample(RandomInteger({n: availableIndexes.length}));
  return sort(Array.prototype.concat(newSDR, availableIndexes[addIndex]) );
}

// return similarity between two SDRs
var similarityP = function(sdr1, sdr2){
  return reduce(function(x,acc){
    return any(function(y){return x==y;},sdr2) ? acc + 1 : acc;
  },0,sdr1);
}

// test for min and max similarity in an array of SDRs
var similarityPairwise = function(arr){
  var allIndexes = mapN(function(x){return x;},arr.length - 1);
  var results = reduce(function(x,acc){
    var alterIndexes = mapN(function(y){return y + x + 1;},arr.length - x - 1);
    return Array.prototype.concat(acc,
      map(function(z){return similarityP(arr[x],arr[z]);},alterIndexes)
                                  );
  }, [], allIndexes);
  return results;
}

// test for overall similarity in an array of SDRs,
//  Where similarity for any SDR is the *max* overlap with *any* other SDR
var similarity = function(arr){
  var allElements = mapN(function(x){return x;},arr.length);
  var results = reduce(function(x,acc){
    var alterIndexes = remove(x,allElements);
        //mapN(function(y){return y + x + 1;},arr.length - x - 1);
    return 
      Array.prototype.concat(acc,
         maxArray(
             map(function(z){
               return similarityP(arr[x],arr[z]);},alterIndexes)
         )
      );
  }, [], allElements);
  return results;
}

var test = genCoupledSDRs(50,20000,20,3);

~~~~



<div class="work_in_progress" markdown="1">

**To Do**

1. Finish Materials Design
1. Add Joints Design
1. Add Assembly Design
1. Add System Design

</div>




____

## Endnotes

<p class="note"><span id="f1">1.</span><a href="#a1">↩</a> End note 1</p>

____

## References

<p class="indent">
cite:sosa_computational_2005
</p>







