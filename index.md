---
layout: default
last_modified: "2016-10-29"

---
<style type="text/css">
ol li {
text-align:left;
list-style-type: upper-roman
}
ol li ol li {
text-align:left;
list-style-type: decimal;
}
</style>


<div class = "author-block">
<a href="{{ site.author_url }}" target="_blank" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>

**[Blog](/blog/index.html)** -- *(stub)*


**Documents in Progress**

{% assign sorted_col = site.collections | sort : "sort_order" %}

{% for col in sorted_col %}
{% if col.title and col.index == true %}
1. **<a class="chapter-link" href="/{{ col.label }}/index.html" target="_blank">{{ col.title }}</a>**<br>
{% endif %}
{% endfor %}

____

**Description**

This library site is a workbench. Documents here are the process of being created and revised. The goal is to help all of us learn new topics and tools (e.g. probabilistic programming) and to explore interesting and challenging applications. 

The intended audience both academia and industry.  To make them widely accessible, the writing style is mostly tutorial and semi-informal. References and citations are included for people who want to dive deeper. 

Because the documents and pages are work-in-progress and perpetually changing, I recommend *against* citing them or hyperlinking to specific web pages.  When they reach a point of completion, I'll post them in online archive services.

____

**Site**

1. **Issues**

   1. Font resizing buttons aren't working yet. *(10/29)*
   1. Search functionality is currently inadequate. It seems that DuckDuckGo is not indexing the site very often. Hopefully this should improve in the future. *(10/29)*
   1. Need to add stats for each document in each Table of Contents: a) chapter count, b) status, and c) last modified. *(10/29)*
   1. Make blog functional. *(10/29)*

{% for p in site.other %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
            {% if p.is_section %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}**<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" target="_blank">{{ p.title }}</a>**<br>{% endif %}
            {% else %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}**<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" target="_blank">{{ p.title }}</a>**<br>{% endif %}     
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}