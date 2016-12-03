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
<script type="text/p5" data-height="500" data-preview-width="300">
function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255, 0, 200);
}
</script>
</pre>

