---
layout: default

---
<style type="text/css">
ol li {
list-style-type: upper-roman
}
ol li ol li {
list-style-type: decimal;
}
</style>


<div class = "author-block">
<a href="{{ site.author_url }}" target="_blank" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>


**Tutorials, Working Papers, and Computer Models**

{% assign sorted_col = site.collections | sort : "sort_order" %}

{% for col in sorted_col %}
{% if col.title and col.index == true %}
1. **<a class="chapter-link" href="/{{ col.label }}/index.html" target="_blank">{{ col.title }}</a>**<br>
{% endif %}
{% endfor %}

____

**Description**

The goal of this library is to help us all learn about some exciting new tools (e.g. probabilistic programming) and to explore interesting and challenging applications.  I say "...help *us* all..." because I'm learning in the process of writing and presenting. 

The intended audience both academia and industry.  These are perpetual works-in-progress, and are written mostly in a tutorial, semi-informal style. Don't cite these pages and I'd recommend against hyperlinking to specific web pages.

____

**Site**

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