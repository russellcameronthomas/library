---
layout: blog
title: Blog
collection: posts 
status: work-in-progress
last_modified: 2016-11-11
--- 

<div class = "author-block">
<a href="{{ site.author_url }}" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>

**[General](/blog/general/index.html)**

{% assign general = site.categories.general | sort: "date" %}

<ol>
{% for post in general limit: 6 %}
   {% if forloop.index == 6 %}
<li style="list-style-type:none;"><em><a href="/blog/general/index.html">all...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | slice: 0, 160 %}
        {% if post.excerpt.size >= 160 %}
           {% assign dots = "..." %}
        {% endif %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><span class="annotate"> ({{ post.date | slice: 0, 10 }}) </span> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
{% endfor %}
</ol>

**[Academic](/blog/academic/index.html)**

{% assign academic = site.categories.academic | sort: "date" %}
<ol>
  {% for post in academic limit: 6 %}
   {% if forloop.index == 6 %}
<li style="list-style-type:none;"><em><a href="/blog/academic/index.html">all...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | slice: 0, 160 %}
        {% if post.excerpt.size >= 160 %}
           {% assign dots = "..." %}
        {% endif %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><span class="annotate"> ({{ post.date | slice: 0, 10 }}) </span> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
  {% endfor %}
</ol>

**[Author's Diary](/blog/diary/index.html)**

{% assign diary = site.categories.diary | sort: "date" %}
<ol>
  {% for post in diary limit: 6 %}
   {% if forloop.index == 6 %}
<li style="list-style-type:none;"><em><a href="/blog/diary/index.html">all...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | slice: 0, 160 %}
        {% if post.excerpt.size >= 160 %}
           {% assign dots = "..." %}
        {% endif %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><span class="annotate"> ({{ post.date | slice: 0, 10 }}) </span> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
  {% endfor %}
</ol>

**[Journal: Toward a Secure Website](/blog/security/index.html)**

{% assign security = site.categories.security | sort: "date" %}
<ol>
  {% for post in security limit: 6 %}
   {% if forloop.index == 6 %}
<li style="list-style-type:none;"><em><a href="/blog/security/index.html">all...</a></em></li>
   {% else %}
   {% if post.status != "stub" %}
   {% assign fixedExerpt = "" %}
   {% assign dots = "" %}
   {% if post.excerpt.size > 0 %}
        {% assign fixedExerpt = post.excerpt | strip_html | slice: 0, 160 %}
        {% if post.excerpt.size >= 160 %}
           {% assign dots = "..." %}
        {% endif %}
   {% endif %}
<li style="margin-bottom: 0.5em;"><strong><a href="{{ post.url }}">{{ post.title }}</a></strong><span class="annotate"> ({{ post.date | slice: 0, 10 }}) </span> &mdash; {{ fixedExerpt }}{{ dots }}</li>
{% endif %}
{% endif %}
  {% endfor %}
</ol>
