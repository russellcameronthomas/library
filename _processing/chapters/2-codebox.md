---
layout: chapter
title: Interactive p5.js Codebox
description: "Demonstrates an interactive codebox for p5.js. CAUTION: This page has a Cross-Site Scripting (XSS) vulnerability in the widget."
status: work-in-progress
pct_complete: "40%"
last_modified: "2016-11-03"
is_section: true
---


Here is p5-widget embedded:

<!-- this script only needs to get added once even if there are multiple widget instances -->

<script src="//toolness.github.io/p5.js-widget/p5-widget.js"></script>

<!--
<style type="text/css">
.CodeMirror.cm-s-p5-widget {
   font-size: 80%;
}
</style>
-->

<script type="text/p5">
function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(255, 0, 200);
}
</script>

<div class="work_in_progress">

*To Do*

1. Investigate and fix the XSS (through p5.js-widget creator)
1. Find a way to adjust font sizes in the codebox.  Issue raised.

</div>