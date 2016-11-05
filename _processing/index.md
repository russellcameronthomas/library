---
layout: default
title: "Table of Contents"
last_modified: "2016-10-27 23:01"

---
<style type="text/css">
ol li {
text-align:left;
list-style-type: upper-roman;
}
ol li ol li {
text-align:left;
list-style-type: decimal;
}
</style>


<div class = "author-block">
<a href="{{ site.author_url }}" style="font-weight: bold;font-size:120%;">{{ site.author }}</a><br>
{{ site.author_title }}<br>
{{ site.author_affiliation }}<br>
</div>

{% assign sorted_pages = site.processing | sort:"name" %}

{% for p in sorted_pages %}
    {% if p.hidden %}
    {% else %}
        {% if p.layout == 'chapter' %}
            {% if p.is_section %}
                {% if p.status == 'stub' %}
1. **{{ p.title }}** ⛔️<br>{% else %}
1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" >{{ p.title }}</a>**{% if p.status == 'version' %}&nbsp;<span style="color:#008000; font-weight:bold;">✓</span>&nbsp;<span class ="annotate">&nbsp;{{ p.version }}</span>{% elsif  p.status == 'draft' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/draft_icon.png" style = "height:28px;width:28px;vertical-align:-8px;"/>{% elsif p.status == 'work-in-progress' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/under_construction_icon2b.png" style = "height:20px;width:25px;vertical-align:-4px;"/>&nbsp;<span class ="annotate">{{ p.pct_complete }}</span>{% endif %}<br>{% endif %}
        <em>{{ p.description }}</em>
            {% else %}
                {% if p.status == 'stub' %}
    1. **{{ p.title }}** ⛔️<br>{% else %}
    1. **<a class="chapter-link" href="{{ site.baseurl }}{{ p.url }}" >{{ p.title }}</a>**{% if p.status == 'version' %}&nbsp;<span style="color:#008000; font-weight:bold;">✓</span>&nbsp;<span class ="annotate">&nbsp;{{ p.version }}</span>{% elsif  p.status == 'draft' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/draft_icon.png" style = "height:28px;width:28px;vertical-align:-8px;"/>{% elsif p.status == 'work-in-progress' %}&nbsp;<img src = "{{ site.baseurl }}/assets/img/under_construction_icon2b.png" style = "height:20px;width:25px;vertical-align:-4px;"/>&nbsp;<span class ="annotate">{{ p.pct_complete }}</span>{% endif %}<br>{% endif %}
            <em>{{ p.description }}</em>        
            {% endif %}
        {% endif %}
    {% endif %}
{% endfor %}

### Other Resources

A. <a href="https://p5js.org" target="_blank"><em>p5.js</em></a> -- a *JavaScript* library that starts with the original goals of *Processing*, and including the metaphor of a software sketchbook. <em>p5.js</em> has a full set of drawing functionality extending to the whole browser page. <em>p5.js</em> has addon libraries that make it easy to interact with other HTML5 objects, including text, input, video, webcam, and sound.

B. <a href="https://processing.org" target="_blank"><em>Processing</em></a> -- *Processing* is a flexible software sketchbook and a language for learning how to code within the context of the visual arts. It implemented as a domain-specific language built on *Java*.


