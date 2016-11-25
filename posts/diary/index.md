---
layout: blog
title: Blog - Diary
collection: posts 
categories: [ diary ]
status: work-in-progress
last_modified: 2016-11-15
--- 

<div class = "author-block">
<a href="{{ site.author_url }}" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>

### Author's Diary

{% assign diary = site.categories.diary | sort: "date" | reverse %}
<ol>
  {% for post in diary limit: 36 %}
   {% if forloop.index == 36 %}
<li style="list-style-type:none;"><em><a href="{{ page.url }}">previous...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | | truncatewords: 25 %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
  {% endfor %}
</ol>
