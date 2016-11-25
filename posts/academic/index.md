---
layout: blog
title: Blog - Academic
collection: posts 
categories: [ academic ]
status: work-in-progress
last_modified: 2016-11-15
--- 

<div class = "author-block">
<a href="{{ site.author_url }}" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>

{% assign academic = site.categories.academic | sort: "date" | reverse %}
<ol>
  {% for post in academic limit: 31 %}
   {% if forloop.index == 31 %}
<li style="list-style-type:none;"><em><a href="{{ page.url }}">previous...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | | truncatewords: 25 %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><span class="annotate"> ({{ post.date | slice: 0, 10 }}) </span> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
  {% endfor %}
</ol>
