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

## Tutorials, Working Papers, and Interactive Models

{% assign sorted_col = site.collections | sort : "sort_order" %}

{% for col in sorted_col %}
{% if col.title %}
1. **<a class="chapter-link" href="/{{ col.label }}/index.html" target="_blank">{{ col.title }}</a>**<br>
{% endif %}
{% endfor %}
