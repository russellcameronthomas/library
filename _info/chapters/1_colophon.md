---
layout: chapter
title: Colophon
last_modified: "2016-11-02"
description: "How this web site is built and rendered: layouts, fonts, authoring tools, javascript, etc."
status: draft
is_section: true
---

The following information might be useful for anyone who wants to create a web site and content similar to this Library.

## Layout and Fonts

The screen layout is aimed at live presentations and also mobile devices.  This guided the choice of font and is why the full browser window is not used.

The text screen font is Merriweather, which is a strong serif font that facilitates both use on mobile devices and also projected during live presentations.  

For printer output (including PDF file format), the text font is Garamond, which is lighter and more readable on paper.

Mathematical expressions and equations are coded and rendered using $$\KaTeX$$ (similar to LaTeX). [KaTeX](https://github.com/Khan/KaTeX) is a fast, easy-to-use JavaScript library for TeX math rendering on the web.

## Web Page Authoring, Hosting, and Rendering

Markdown pages (.md) are authored locally using on a Mac using Xcode editor, though any plain text editor would work almost as well.  Xcode and other code editors help match parentheses and braces when writing code, which is nice.  There is also some syntax coloring.

Git (command line interface) is used for version control and for pushing changes to the host.

The pages are hosted on Github using the Github Pages feature.  Static HTML pages are rendered by Github using the [Jekyll](https://jekyllrb.com) engine. 

## WebPPL Code Boxes

The WebPPL code boxes are authored as part of the Markdown files.  They are rendered as interactive code boxes using Javascript libraries from the WebPPL team.


 


