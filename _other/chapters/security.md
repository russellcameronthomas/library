---
layout: chapter
title: "Security and Privacy"
last_modified: "2016-11-02"
---

*(Updated: November 2, 2016)*

The site has been designed to minimize security and privacy risks while still providing useful content, especially interactive code demonstrations and visualizations.  This page will be updated periodically as the content and features change.

**Static web pages** -- The content on this site consists of static web pages with embedded Javascript, mostly for math formatting, bibliographic citations and references, and also to edit and run WebPPL.  All of the Javascript runs on the "client", meaning in your browser on your device (desktop, laptop, mobile). Compared to actively-generated web pages (e.g. Wikipedia, Wordpress, etc.), static web pages (".html") are intrinsically more secure because there are many fewer ways for attackers to access data or programs on the web server.  Likewise, there are fewer ways for malicious code coming from the web server to do bad things to your browser or your computer.

**No user tracking** -- When you use this site, no user information goes to the web server, including programs you modify or create in the codeboxes or interactive editor.  We don't track any user activity while you are on the site. [Duckduckgo](https://duckduckgo.com/privacy) is used in the search bar under the header. There is no advertising or advertising-related user tracking. This site does not access any information on your computer outside of the browser.

**HTTP rather than HTTPS** -- This site uses HTTP (unencrypted) rather than HTTPS (encrypted) protocol between your browser and the web server (hosted by Github). The reason is that GitHub does not yet support HTTP for   custom domain names like this one: "library.meritology.com".  This shouldn't be a big risk for most people because no information from you (e.g. real name, email, passswords, credit card numbers, etc.) is transmitted from your device, through the browser, to Github's servers.  There is a small chance that an advanced adversary could "sit in the middle" (a.k.a. "Man in the Middle" (MITM)) of the traffic between browser and server, and in doing so send some javascript malware to your computer.  There are easier attacks (e.g. phishing email), so most people don't have to worry about MITM.

**Cookies** -- The only use of "cookies" (local files managed by your browser) is to record your preferences for font size.  If you disable cookies or browse in "private mode", the site will work just fine.

**Don't enter confidential or proprietary information** -- With all this said, it would be prudent for users to not enter any confidential or proprietary information (data or programs) into the codeboxes or interactive editor.  While this information stays within your browser (until you clear/erase history), there is a slight chance that an attacker could gain priviledged access to your browser, and therefore to the contents of the browser cache.

<div class="work_in_progress" markdown="1">

**Trackers** -- font services, content delivery networks (CDN), etc.

**Known Vulnerabilities** -- (To do)

</div>
