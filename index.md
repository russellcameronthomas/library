---
layout: default

---

{% assign sorted_pages = site.pages | sort:"name" %}

<div class = "author-block">
by <br>
{{ site.author }}<br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>
{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
            {% if p.is_section %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}**<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" target="_blank">{{ p.title }}</a>**<br>{% endif %}
        <em>{{ p.description }}</em>
            {% else %}
                {% if p.status == 'stub' %}
    1. **{{ p.title }}**<br>{% else %}
    1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" target="_blank">{{ p.title }}</a>**<br>{% endif %}
            <em>{{ p.description }}</em>        
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}

### Other Resources

A. <a href="{{ site.baseurl }}/editor.html" target="_blank">Interactive editor</a> -- to create and modify your own markdown pages, saved in your browser's cache.

B. <a href="https://probmods.org" target="_blank"><em>Probabilistic Models of Cognition</em></a> -- an on-line book for the cognitive science applications of WebPPL.

C.  <a href="http://dippl.org/chapters/02-webppl.html" target="_blank">WebPPL Language Manual</a> -- a tutorial introduction to the design of WebPPL, which can help you understand how the language is interpreted and executed, and therefore why the language is designed the way it is (e.g. functional programming).

D.  <a href="http://docs.webppl.org/en/master/" target="_blank">WebPPL Language Reference</a> -- specification of components and functions in the language.

E.  <a href="http://webppl.org" target="_blank">WebPPL.org</a> -- interactive editor and local installation instructions. (Note: this editor does not have all the javascript libraries necessary to run the models presented here.)