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
  <input type="submit" value="🔍">
</center>
</form>
____

<center>
<div style="display:inline; ">
<input type="checkbox" id="documents_check" name="c1" checked />
<label for="documents_check"><span></span>Documents</label> &nbsp;
<input type="checkbox" id="blog_check" name="c2" onclick='checkboxClick(this);' checked />
<label for="blog_check" style="padding-bottom:3px;border:medium none black;border-bottom: thin solid #CCCCCC;"><span></span>Blog</label> &nbsp;
<input type="checkbox" id="misc_check" name="c3"  />
<label for="misc_check"><span></span>Index & Misc.</label>
</div>
<br/>
<span style="color:#CCCCCC;">&nbsp;│&nbsp;</span>
<br/>
<div id="blog_categories" style="display:inline; padding-top:5px;border:medium none black;border-top: thin solid #CCCCCC;">
<input type="checkbox" id="general_blog_check" name="c4" checked />
<label for="general_blog_check"><span></span>General</label> &nbsp; 
<input type="checkbox" id="diary_blog_check" name="c5" checked />
<label for="diary_blog_check"><span></span>Diary</label> &nbsp; 
<input type="checkbox" id="academic_blog_check" name="c6" checked/>
<label for="academic_blog_check"><span></span>Academic</label>
<input type="checkbox" id="security_blog_check" name="c7" checked/>
<label for="security_blog_check"><span></span>Security</label>
</div>
</center>
____

<ul id="search_results"></ul>

<script src="/assets/js/lunr.min.js"></script>
<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> -->
<script src="/assets/js/search.js"></script>
