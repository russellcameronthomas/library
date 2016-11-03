---
layout: default
title: "Table of Contents"
last_modified: "2016-11-02"
---

{% assign sorted_pages = site.info | sort:"name" %}

{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
            {% if p.is_section %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}** ⛔️<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" >{{ p.title }}</a>**{% if p.status == 'work-in-progress' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/under_construction_icon2b.png" style = "height:20px;width:25px;vertical-align:-4px;"/>&nbsp;<span class ="annotate">{{ p.pct_complete }}</span>{% endif %}<br>{% endif %}
        <em>{{ p.description }}</em>
            {% else %}
                {% if p.status == 'stub' %}
    1. **{{ p.title }}** ⛔️<br>{% else %}
    1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" >{{ p.title }}</a>**{% if p.status == 'work-in-progress' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/under_construction_icon2b.png" style = "height:20px;width:25px;vertical-align:-4px;"/>&nbsp;<span class ="annotate">{{ p.pct_complete }}</span>{% endif %}<br>{% endif %}
            <em>{{ p.description }}</em>        
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}