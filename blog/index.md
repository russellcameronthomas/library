---
layout: blog
title: Blog
collection: posts 
status: incomplete
last_modified: 2016-10-29
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>