---
layout: default
---

{% assign sorted_pages = site.pages | sort:"name" %}

{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
            {% if p.is_section %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}**<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>**<br>{% endif %}
        <em>{{ p.description }}</em>
            {% else %}
                {% if p.status == 'stub' %}
    1. **{{ p.title }}**<br>{% else %}
    1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>**<br>{% endif %}
            <em>{{ p.description }}</em>        
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}

### Other Resources

A. [Interactive editor](/editor.html) -- to create and modify your own markdown pages, saved in your browser's cache.

A. *[Probabilistic Models of Cognition](https://probmods.org)* -- on-line book for cognitive science applications.

B. [WebPPL Language Manual](http://dippl.org/chapters/02-webppl.html) -- a tutorial introduction to the design of WebPPL, which can help you understand how the language is interpreted and executed, and therefore why the language is designed the way it is (e.g. functional programming).

C. [WebPPL Language Reference](http://docs.webppl.org/en/master/) -- specification of components and functions in the language.

D. [WebPPL.org](http://webppl.org) -- interactive editor and local installation instructions. (Note: this editor does not have all the javascript libraries necessary to run the models presented here.)