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

**Blog<!--(/blog/index.html)-->** ⛔️


**Document Workbench**

{% assign sorted_col = site.collections | sort : "sort_order" %}

{% for col in sorted_col %}
{% if col.title and col.index == true %}
{% assign num_chap = col.docs | size  | minus: 1 %}
1. {% if num_chap > 0 %}**<a class="chapter-link" href="/{{ col.label }}/index.html" target="_blank">{{ col.title }}</a>**<br>
<span class="annotate">{{ col.docs | size  | minus: 1 }} chapters</span>{% else %}**{{ col.title }}** ⛔️{% endif %}<br/>
{% endif %}
{% endfor %}

____

**Description**

This site is primarily an authoring workbench. Documents here are in the process of being created and revised. Posts in the Blog are are a chronological journal of observations along the way, and thus more stable and cumulative. Overall, the goal of this site is to help us -- both you and me -- learn new topics and tools (e.g. probabilistic programming) and to explore interesting and challenging applications. 

The intended audience both academia and industry.  The writing style is mostly tutorial and informal. References and citations are included for people who want to dive deeper. 

Because the documents and pages are work-in-progress and perpetually changing, I recommend *against* citing to articles or hyperlinking to any specific web pages.  When they reach a point of completion, I'll post them in online archive services.

____

**Site**

1. **Issues**

<ol class="note">
<ol>
<li>Search functionality is currently inadequate. Switch to static search engine. <em>(10/29)</em></li>
<li>Need to add stats for each sub-book in this Table of Contents: a) count by status, and b) max last modified. <em>(10/29)</em></li>
<li>Make blog functional. <em>(10/29)</em></li>
<li>Citation for book section omits book title and book editor. <em>(10/31)</em></li>
</ol>
</ol>


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