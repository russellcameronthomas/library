---
layout: default
title: Advanced Search
exclude_from_search: true
---

# Advanced Search

<!-- Powered by <a href="/blog/2016/01/04/how-to-make-lunrjs-jekyll-work-together/">lunr.js</a>. -->

<form action="get" id="site_search">
<center>
  <input type="text" id="search_box" size="28" placeholder="Search">
  <input type="submit" style="background-color:#FFFFBB;" value="🔍">
</center>
</form>
____

<center>
<div style="display:inline; ">
<span style="white-space: nowrap;">
<input type="checkbox" id="documents_check" name="c1" checked />
<label for="documents_check"><span></span>Documents</label></span> &nbsp;
<span style="white-space: nowrap;">
<input type="checkbox" id="blog_check" name="c2" onclick='checkboxClick(this);' checked />
<label for="blog_check" style="padding-bottom:3px;border:medium none black;border-bottom: thin solid #CCCCCC;"><span></span>Blog</label></span> &nbsp;
<span style="white-space: nowrap;">
<input type="checkbox" id="misc_check" name="c3"  />
<label for="misc_check"><span></span>Index & Misc.</label></span>
</div>
<br/>
<span style="color:#CCCCCC;">&nbsp;│&nbsp;</span>
<br/>
<div style="padding:5px;border: thin solid #CCCCCC;">
<div id="blog_categories" style="display:inline;">
<span style="white-space: nowrap;">
<input type="checkbox" id="general_blog_check" name="c4" checked />
<label for="general_blog_check"><span></span>General</label></span> &nbsp;
<span style="white-space: nowrap;"> 
<input type="checkbox" id="diary_blog_check" name="c5" checked />
<label for="diary_blog_check"><span></span>Diary</label></span> &nbsp;
<span style="white-space: nowrap;"> 
<input type="checkbox" id="academic_blog_check" name="c6" checked/>
<label for="academic_blog_check"><span></span>Academic</label></span> &nbsp;
<span style="white-space: nowrap;">
<input type="checkbox" id="security_blog_check" name="c7" checked/>
<label for="security_blog_check"><span></span>Security</label></span>
</div>
</div>
</center>
____

<ul id="search_results"></ul>

<script src="/assets/js/lunr.min.js"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
<script src="/assets/js/search.js"></script>
