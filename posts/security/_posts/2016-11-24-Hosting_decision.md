---
layout: blog-post
title: Hosting Decision
status: draft
tags:
---

The first practical decision for any website is where and how to host it. Of course, factors like cost, performance, and usability are important to fulfill the positive goals of the website, there are security considerations that will be our focus in this post.

## The Options

For simple websites, the base technical requirements to host a website are quite small.  You need 1) sufficient internet access; 2) a computer sufficient performance; 3) webserver software (e.g. Apache, NGINX, or other). People can and do host websites using small desktop machines in their proverbial basements<sup>*</sub>.  But there is no benefit to this pure do-it-yourself approach and plenty of negatives, so we'll consider the other main options.

<p class="note"><sup>*</sub>Yes, Hillary Clinton's infamous email server falls into this do-it-yourself category.  It sent and received email, but it could have just as easily served web pages.</p>

### 1: Self-hosting at an Internet Service Provider (ISP)

Nearly all ISPs and other vendors will rent webservers that come pre-configured with the basics.  These webservers can be dedicated or shared with other customers.  Beyond the basics, all configuration and administration are up to us, the customer.  I've done this before on several types of websites.  It does take time and attention, and getting behind in patches and updates can lead to major security problems.  For me, there is no real upside to doing my own server administration.

### 2: Hosting by an End-To-End Service Provider

For a long time, there were ISPs and other vendors that ran "end-to-end" services that took care of all the technical configuration, administration, storage, and communication necessary to serve web pages after the content is created.  Going way back, GeoCities might have been the first vendor to offer this service.  MySpace offered this service via configurable templates. Today, many companies offer this, including Web.com, Godaddy, Google Sites, and many others.

The service that interested me most was Github, because several other people I know were using it to host their blog and because of their integrated support for git version control.  I have a student account there (thanks to my PhD student status), so I get services for discount or free that others have to pay for.

Github Pages uses the Jekyll engine to create static web pages from "markdown" files that users author off-line, using a text editor or code editor of their choice.  This option is fine for me, since I use a similar workflow for academic papers, coded in LaTex using the TexShop tool, producing PDF file output.

Jekyll can also be run on my machine to create a local web server, accessible only to me. This allows me to rapidly review and test pages before I push them to Github for the public to see.

### 3: Using an All-in-One Service

I have used Google Blogger since 2012, and there are similar services hosted by Wordpress.  Here all the authoring is done on-line through their web pages, mostly in a What-You-See-Is-What-You-Get editor.  You can add *some* extra features via widgets, but most everything about the site is locked down and controlled by the service provider.

These all-in-one services provide page templates, graphics, buttons in a point-and-click design mode.  Those are nice, but I do just fine with Jekyll templates, CSS, etc.

Since I wanted to host interactive code widgets (i.e. with "Run" buttons and user-modifiable code), this option was not going to work.

## The Decision

I chose to go with Github Pages.  It offers the best mix of cost, functionality, and security.  If this site ever becomes popular (high traffic) or I greatly expand it, I may need to move to a paid option, but that step will be smooth with the foundation in place.  Nothing will change in terms of authoring tools or workflow.


