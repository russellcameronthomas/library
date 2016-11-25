---
layout: blog-post
title: What Is The Value Of This Website?
status: draft
tags:
---

From a security point of view, it is important to start with some analysis of the value of a web site -- to the author (me), to readers/viewers, and also to potential threat actors.  For my purposes here, I don't need a complicated or quantiative analysis.

Aside from the specifics, there are two key points. *First*, for security to provide value, it needs to permit/ support "good things" while detecting/preventing/recovering from "bad things".  If it does the later at the expense of the former, then *it is bad security*.  It is easy for security people to let this slip out of our awareness and consideration.  *Second*, the form and degree of value differs significantly across the stakeholders because of their very different goals, capabilities, and circumstances.  I will probably write other posts on the value of information as an experience.

## Value to Author

There are five categories of value that I hope to get from this site and it's content.

### 1. Authoring Workbench

The main value I get is as a tool for me to write and edit on academic and business topics that interest me, and support the process of getting academic papers published.  At some point, I may also use this site to create one or more books. This authoring value comes from two functions: version control and public accessibility.

Version control on all the drafts and works-in-progress (via git and Github), I get functionality to 1) backup the work and recover it if anything goes wrong; 2) collaborate with other authors and editors when that need arises, tracking/controlling all the changes that everyone makes; and 3) automatically generating data about the authoring and document evolution process.

Public accessibility helps me in the writing process, both early and late in the process.  Early on, it helps me to write and post partial and unfinished work.  Psychologically these serve as intermediate "deliverables" (waystations in a journey).  Late in the process, after a complete draft is created, it's helpful to get reactions and feedback from readers and colleagues.  While it is possible to send drafts via email or post them as static files like PDF, I like the idea of having a rich reading/feedback platform, especially one that I can design and modify as I go. 

From an economic viewpoint, the only cost of this website is the time I spend to create the content and design/configure/debug the website.  This cost is not fully incremental, because I would be spending this time on writing and publishing via other means.  Therefore, I am mainly shifting my time-cost from one set of tools and platforms to another.  Of course, if I take this site and content in a more commercial direction, then there might be other costs.

### 2. Interaction with Readers

When it works well, interaction with readers is like co-authoring.  Beyond the value for the content/document at hand, there is the broader value of enhancing my relationships and reputation in the academic and industry communities.

### 3. Services to Readers/Users

This is speculative and aspirational, but I might use this site to offer services to readers/users. For example, I might use it to teach a class, or as self-paced on-line learning.  Because I'm not *starting* with these as purposes, I won't be creating much functionality to support it in the near term.

### 4. Experiment in Secure Website Design

Finally, as exemplified in this blog category, I am using this as a self-experiment in security-by-design.  By keeping a journal and also reflecting on events along the way, this self-experiment could serve as empirical data for research or industry publication.

### 5. A Portfolio to Demonstrate My Skills

More and more, technical and professional workers are being expected to show their skills through some sort of portfolio. For programmers, this can include their Github "repos" showing the work they have done on their own projects and contributions they have made to others.  For academics, this is new territory because the traditional portfolio consisted of published papers, and maybe working papers and presentations.  But with the growth in on-line learning, MOOCs, and similar, I think it is important for academics to demonstrate their research and teaching abilities through an interactive website like this one.


## Value to Reader

The value to readers depends on their *experience* in reading/interacting, given their goals, purposes, capabilities, and circumstances.  I have the ambition to look into this much more deeply, but for now I forsee the following "use cases" for readers:

### 1. Curiosity

Some readers will be curious and get value from the experience of seeing what is here.  They might find something that peaks their interest, or not.  Curious readers will surf from page to page, poking here and there.  They might come back for more, or share with other people, or not.  Curious readers get value from having a satisfying scanning/surfing experience.  Having a website that is well organized and easy to use helps them realize this value.

### 2. Sampling or Answering Specific Questions

Some readers are interested in a specific topic or subtopic, or they have specific questions that need answering.  They will search for the relevant content, read it, interact with it, and then move to some other task.  These readers get value from answers to their questions or by taking in information pertient to their topic of interest, perhaps leading them to some other document or resource.   Having a website that is organized,  written, and presented well will help them, along with good search functionality.

### 3. Collaboration

A few readers will view themselves as collaborators, in the sense of giving me feedback or by making derivative works or through co-authoring projects.  These readers will spend more time reading and will read more completely than the previous two classes.  They bring quite a bit of relevant knowledge even if some or all of the specifics are new to them.

### 4. Learning

The last classs of readers have a goal of gaining knowledge by reading and interacting with the website. Not only do they need well-written and well-presented content, but they need guidance and (possibly) support during the learning process.  Ideally, there will be some sort of feedback process so learners can confirm and solidify the knowledge they have gained.


## Value to Threat Actor

### 1. Information Content to Improperly Copy and Reuse

Most copying and reuse isn't a *threat* because I am licensing this content under Creative [Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/). But there are some uses that are prohibited and would cause harm:

1. Copying and rehosting the content on a commercial website, either behind a paywall or ad supported.
2. Copying and publishing the content as their original work, without attribution to me.  This could happen in a commercial setting (book, paid speech, etc.) or, more likely, in a non-commercial setting like students plagarizing the content for their reports, theses, or dissertations.

### 2. Malicious Access to or Use of the Web Server

Some threat actors get value by compromising the web server, sometimes as a computing/communications resource and sometimes as a stepping stone to something else of value.  Since Github is hosting all the content and most of the software for services, there is nothing special or unique about the web servers behind this web site.  Github has been compromised before (see [here](http://thehackernews.com/2016/06/github-password-hack.html) and [here](http://www.pcworld.com/article/2065340/github-bans-weak-passwords-after-bruteforce-attack-results-in-compromised-accounts.html), for example), but security associated with their web servers are *probably* as good as any cloud service. (I have no evidence that they are any worse than average).

### 3. Malicious Access to or Use of User Data

There isn't much user data recorded or stored, and certainly not much that is readily monetized -- no credit card numbers, no personal identifying information (PII), no confidential data entered by users, etc.  And, unlike many other sites, this site doesn't use "widgets" or services (like Google Analytics or Custom Search) that send user activity information to aggregators like Facebook, Google, Apple, Microsoft, and others.

### 4. Malicious Compromise of User (Client) Devices

The final category of value to some threat actors is to use the web site as a vector to infect the user's devices ("client"). They might want to do this as part of an broad, untargeted attack.  For example, unpatched Wordpress websites (and other content management systems) have been systematically identified via scanning, followed by compromise of the server, followed by distributing malware to client machines visiting those Wordpress sites.  (See [here](https://www.wordfence.com/blog/2016/04/hackers-compromised-wordpress-sites/) and [here](https://sucuri.net/website-security/website-hacked-report))

For a few threat actors, they might value in compromising *specific* users, especially those involved in "sensative" jobs in "sensative" organizations.







