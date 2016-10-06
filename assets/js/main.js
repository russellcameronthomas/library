"use strict";


// Github links

//var github_repository = "https://github.com/agentmodels/agentmodels.org/";

var github_repository = "https://github.com/russellcameronthomas/riskmodels/";

function markdown_url(page_url) {
    return page_url.slice(0, -4) + "md";
}

function github_edit_url(page_url) {
    return github_repository + "edit/gh-pages" + markdown_url(page_url);
}

function github_page_url(page_url) {
    if ((page_url == "/index.html") || (page_url == "/")) {
        return github_repository + "blob/gh-pages/chapters";
    } else {
        return github_repository + "blob/gh-pages" + markdown_url(page_url);
    };
}


// WebPPL editor

$(function(){
  var preEls = Array.prototype.slice.call(document.querySelectorAll("pre"));
  preEls.map(function(el) { wpEditor.setup(el, {language: 'webppl'}); });          
});


// References and bibliography

var textohtml_map = {
  "\\\"u": "&uuml;",
  "\\\"a": "&auml;",
  "\\\"o": "&ouml;",
  "\\'e": "&eacute;",
  "\\'a": "&aacute;",  
  "\\\"U": "&Uuml;",
  "\\\"A": "&Auml;",
  "\\\"O": "&Ouml;",
  "\\'E": "&Eacute;",
  "\\'A": "&Aacute;",  
  "\\\"{u}": "&uuml;",
  "\\\"{a}": "&auml;",
  "\\\"{o}": "&ouml;",
  "\\'{e}": "&eacute;",
  "\\'{a}": "&aacute;",  
  "\\\"{U}": "&Uuml;",
  "\\\"{A}": "&Auml;",
  "\\\"{O}": "&Ouml;",
  "\\'{E}": "&Eacute;",
  "\\'{A}": "&Aacute;"  
};

function textohtml(tex) {
    for (var key in textohtml_map) {
        if (textohtml_map.hasOwnProperty(key)) {
            tex = tex.replace("{" + key + "}", textohtml_map[key]);
            tex = tex.replace(key, textohtml_map[key]);
        };
    };
    return tex;
}

function replace_html(source, target) {
    $('p, li').each(function () {
        var html = $(this).html();
        $(this).html(html.replace(new RegExp(source, "ig"), target));
    });
}

/* OLD citation format
 
function format_citation(citation) {
    var s = "";
    if (citation["URL"]) {
        s += "<a href='" + citation["URL"] + "'>" + citation["TITLE"] + "</a>. ";
    } else {
        s += citation["TITLE"] + ". ";
    };
    s += citation["AUTHOR"] + " (" + citation["YEAR"] + ").";
    if (citation["JOURNAL"]) {
        s += " <em>" + citation["JOURNAL"] + "</em>.";
    }
    return textohtml(s);
}
 */

// RCT added
function removeDupDashes (pageString){
    return pageString.replace(/-+/, '-');
}

// RCT added
function toTitleCase(str)
{
    return removeBraces(str.replace(/\w\S*/g,
                         function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
                        );
}

// RCT added
function toSentenceCase(str){
    //var s = str.replace(/(?!^.*[A-Z]{2,}.*$)^[A-Za-z]*$/g,
    var s = removeBraces(String(str))
    
    //s.replace(/[A-Z][a-z]*/g
    
    // Javascript does not support positive or negative lookbehind. This mimics it
    //http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
    //// Mimic leading, negative lookbehind like replace(/(?<!es)t/g, 'x')
   // var output = 'testt'.replace(/(es)?t/g, function($0, $1){
   //                              return $1 ? $0 : 'x';
   //                              });
    s = s.replace(/([A-Z]{2,}[a-z]*)?[A-Z]\S*/g,function($0, $1){return $1 ? $0 : $0.toLowerCase();});
    s = s.charAt(0).toUpperCase() + s.substr(1);
    
    // Javascript does not support positive or negative lookbehind. This mimics it
    //http://blog.stevenlevithan.com/archives/mimic-lookbehind-javascript
    // Mimic leading, positive lookbehind like replace(/(?<=es)t/g, 'x')
    //var output = 'testt'.replace(/(es)?t/g, function($0, $1){
    //                             return $1 ? $1 + 'x' : $0;
    //                             });
    // output: tesxt
   // $0.charAt(0).toUpperCase() + $0.substr(1)
    s = s.replace(/([:;\-] +)?[A-Za-z]+/g,
                  function($0, $1){return $1 ? $1 + $0.charAt(2).toUpperCase() + $0.substr(3) : $0;})
    return s ;
    
}

// RCT added
function replaceAnds(str) { // if more than one " and " joining names, the replace all but last with ", "
    var nth = 0;
    var s = String(str);
    var lim = s.match(/ and /g) === null ? 0 : s.match(/ and /g).length;
    if (lim > 1) {
        s = s.replace(/ and /g, function (match, i, original) {
                      nth++;
                      return (nth < lim) ? ', ' : match;
                      });
    }
    return s;
}


// RCT added

function toInitials(str){
    var s = String(str);
    if (s.length > 0){
        s = s.replace(/([A-Z][A-Za-z0-9_\-'']+, )([A-Z][A-Za-z0-9_\-\.]+)( [A-Z][A-Za-z0-9_\-\.]*)*/g,
                      function($0, $1,$2,$3, $4) {
                      var sr = '';
                      //if ($4) {
                      //  sr= $1 + $2.charAt(0).toUpperCase() + ". " + $3.charAt(1).toUpperCase() + ". " + $4.charAt(1).toUpperCase() + ".";
                      //} else
                      if ($3) {
                        sr= $1 + $2.charAt(0).toUpperCase() + ". " + $3.charAt(1).toUpperCase() + ".";
                      } else {
                        sr= $1 + $2.charAt(0).toUpperCase() + ".";
                      }
                      return sr;
                      });
    }
    return replaceAnds(s);
}



//RCT added
function extractYear(str){
    var s = String(str);
    return s.match(/[0-9]{4}/);
}

// RCT added
function removeBraces (str){
    var s = String(str)
    s = s.replace(/\}+/g,'');
    s = s.replace(/\{+/g,'');
    return s;
}

// RCT modified for HARVARD style
function format_citation(citation) {
    var s = "";
    s += toInitials(citation["AUTHOR"]) + " (" + extractYear(citation["YEAR"]) + ")";
    if (citation["entryType"] == "BOOK"){
        s += ". <em>" + toTitleCase(citation["TITLE"]) + "</em>";
    } else {
        s += ". " + toSentenceCase(citation["TITLE"]);
    }
    if (citation["JOURNAL"]) {
        s += ". <em>" + toTitleCase(citation["JOURNAL"]) + "</em>";
    } else if (citation["entryType"]== "INPROCEEDINGS") {
        s += ". In <em>" + removeBraces(citation["BOOKTITLE"]) + "</em>, " + citation["YEAR"];
    }

    if (citation["VOLUME"] && citation["NUMBER"] && citation["PAGES"]) {
        s += " <b>" + citation["VOLUME"] + "</b>" + "(" + citation["NUMBER"] + ")" + ": " + removeDupDashes(citation["PAGES"]);
    } else if (citation["VOLUME"] && citation["PAGES"]) {
        s += " <b>" + citation["VOLUME"] + "</b>" +  ": " + removeDupDashes(citation["PAGES"]);
    }else{
        if (citation["PAGES"]){
            s += ", p " + removeDupDashes(citation["PAGES"]) ;
        }
    }
    if (citation["ADDRESS"] && citation["PUBLISHER"]) {
        s += ", " + removeBraces(citation["ADDRESS"]) + ": " + removeBraces(citation["PUBLISHER"]);
    } else if (citation["PUBLISHER"]) {
        s += ", " + removeBraces(citation["PUBLISHER"]) ;
    }
    if (citation["URL"]) {
        s += ", <a href='" + citation["URL"] + "'>" + citation["URL"] + "</a>";
    }
    s += ".";
    
    return textohtml(s);
}

function author_lastname(authorString) {
  var names = authorString.split(", ");
  if (names.length == 0) {
    console.error('Expected first and last name, got: ' + authorString);
    return;
  }
  return names[0];
}

function short_authors(authorsString) {
  if (!authorsString) {
    console.warn('short_authors got:' + authorsString);
    return;
  }
  var authors = authorsString.split(" and ");
  if (authors.length === 0) {
    console.error('Expected >= 1 author, got: ' + authorsString);
    return authorsString;
  }
  var firstAuthor = authors[0];
  if (authors.length === 1) {
    return author_lastname(firstAuthor);
  } else if (authors.length === 2) {
    var secondAuthor = authors[1];
    return author_lastname(firstAuthor) + ' and ' + author_lastname(secondAuthor);
  } else {
    return author_lastname(firstAuthor) + ' et al.';
  }
}

function cite_url(citation) {
  if (citation["URL"]) {
    return citation["URL"];
  }
  return 'https://scholar.google.com/scholar?q="' + removeBraces(citation["TITLE"]) + '"';
}

function format_reft(citation) {
  var s = "";
  s += "<a class='ref' href='" + cite_url(citation) + "'>";
  s += short_authors(citation["AUTHOR"]) + " (" + citation["YEAR"] + ")";
  s += "</a>";
  return textohtml(s);
}

function format_refp(citation) {
  var s = "(";
  s += "<a class='ref' href='" + cite_url(citation) + "'>";
  s += short_authors(citation["AUTHOR"]) + ", " + citation["YEAR"];
  s += "</a>";
  s += ")";
  return textohtml(s);
}

$.get("/riskmodels.bib", function (bibtext) {
    $(function () {
        var bibs = doParse(bibtext);
        $.each(
            bibs,
            function (citation_id, citation) {
              replace_html("cite:" + citation_id, format_citation(citation));
              replace_html("reft:" + citation_id, format_reft(citation));
              replace_html("refp:" + citation_id, format_refp(citation));
            }
        );
    });
});


// LaTeX math
// based on https://github.com/cben/sandbox/blob/gh-pages/_layouts/katex.html

$(function(){
  var scripts = document.getElementsByTagName("script");
  for (var i = 0; i < scripts.length; i++) {
    /* TODO: keep going after an individual parse error. */
    var script = scripts[i];
    if (script.type.match(/^math\/tex/)) {
      var text = script.text === "" ? script.innerHTML : script.text;
      var options = script.type.match(/mode\s*=\s*display/) ?
          {displayMode: true} : {};
      try {
        script.insertAdjacentHTML("beforebegin",
                                  katex.renderToString(text, options));
      } catch (err) {
          console.log('KaTeX error:');
          console.log(err);
      }
    }
  }
  document.body.className += " math_finished";
});


// Analytics

(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-54996-14', 'auto');
ga('send', 'pageview');
