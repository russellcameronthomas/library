# An Author's Workbench

This site is primarily an authoring workbench related to my academic work (Computational Social Science: risk, innovation, institutions), and especially recent work using probabilistic programming with *WebPPL*. Documents here are in the process of being created and revised. Posts in the Blog are are a chronological journal of observations along the way, and thus more stable and cumulative. Overall, the goal of this site is to help us -- both you and me -- learn new topics and tools (e.g. probabilistic programming) and to explore interesting and challenging applications. 

The intended audience both academia and industry.  The writing style is mostly tutorial and informal. References and citations are included for people who want to dive deeper. 

Because the documents are perpetually changing, I recommend *against* citing them or hyperlinking to any specific web pages.  When they reach a point of completion, I'll post them in an online archive service.

## Setup

~~~~
npm install -g browserify uglifyjs watchify grunt-cli
gem install jekyll
~~~~

## Development

Running a local server:

~~~~
jekyll serve
~~~~

## Updating dependencies

To update webppl and webppl packages (`./scripts/update-webppl`):

~~~~
npm install --save webppl@latest webppl-timeit@latest webppl-dp@latest agentmodels/webppl-agents
cd node_modules/webppl
npm install
grunt bundle:../webppl-timeit:../webppl-dp:../webppl-agents
cp bundle/webppl.min.js ../../assets/js/webppl.min.js
cd ../..
~~~~
