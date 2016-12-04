---
layout: chapter
title: Interactive p5.js Codebox
description: "Demonstrates an interactive codebox for p5.js -- a Javascript version of Processing."
status: work-in-progress
pct_complete: "40%"
last_modified: "2016-12-03"
is_section: true
---


Here is p5-widget embedded:

<!-- this script only needs to get added once even if there are multiple widget instances -->

<!-- <script src="//toolness.github.io/p5.js-widget/p5-widget.js"></script> -->
<script src="/assets/js/p5-widget.js"></script> 

<pre>
<script type="text/p5" data-height="700" >
var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(648, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}

</script>
</pre>


