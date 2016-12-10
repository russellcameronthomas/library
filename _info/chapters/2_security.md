---
layout: chapter
title: "Security and Privacy"
last_modified: "2016-12-09"
description: "Description of the security and privacy features and policies for this site."
status: version
is_section: true
version: "December 9, 2016"
---

The site has been designed to minimize security and privacy risks while still providing useful content, especially interactive code demonstrations and visualizations.  This page will be updated periodically as the content and features change.  For notes and commentary about security decisions, see the blog posts under "[Security](/posts/security/index.html)".

**Static web pages** -- The content on this site consists of static web pages with embedded Javascript, mostly for math formatting, bibliographic citations and references, and also to edit and run WebPPL.  All of the Javascript runs on the "client", meaning in your browser on your device (desktop, laptop, mobile). Compared to actively-generated web pages (e.g. Wikipedia, Wordpress, etc.), static web pages (".html") are intrinsically more secure because there are many fewer ways for attackers to access data or programs on the web server.  Likewise, there are fewer ways for malicious code coming from the web server to do bad things to your browser or your computer.

**Limited user tracking** -- We use [piwik](https://piwik.org) open source analytics platform to monitor website traffic and user interaction.  *You can opt out of this by setting your browser option to "[Do Not Track](http://donottrack.us)"*. Very simply, when you load any web page on this site, a small image (a 'web bug') is loaded from our analytics server. During this load process, information about your browser, language, and IP address is collected. The last byte of the IP address is masked, which makes it less specific to you and your geolocation.

No advertising-related tracking is done.  This is in contrast to many (most?) web sites that use Google Analytics. This involves putting a small script on every page, and it passes nearly all your website activity back to Google, which they use for advertising purposes.

Client-side search is used, meaning that neither your search terms nor results go to any server. There is no advertising or advertising-related user tracking. This site does not access any information on your computer outside of the browser.

**HTTP rather than HTTPS** -- This site uses HTTP (unencrypted) rather than HTTPS (encrypted) protocol between your browser and the web server (hosted by Github). The reason is that GitHub does not yet support HTTP for   custom domain names like this one: "library.meritology.com".  

<p class = "note">This shouldn't be a big risk for most people because no information from you (e.g. real name, email, passswords, credit card numbers, etc.) is collected from your device or sent through the browser to Github's servers.  There is a small chance that an *advanced* adversary could "sit in the middle" of the traffic between browser and server, and in doing so send some javascript malware to your computer.  There are easier attacks (e.g. phishing email), so most people don't have to worry about "man in the middle" attacks.</p>

**Cookies** -- The only use of "cookies" (local files managed by your browser) is to record your preferences for font size.  If you disable cookies or browse in "private mode", the site will work just fine.

**Local Storage** -- A local, browser-only file system is available within codeboxes (e.g. for writing and reading CSV files), but this is in memory, not on disk, and therefore only lasts as long as your browser window is open.

**Don't enter confidential or proprietary information** -- With all this said, it would be prudent for users to not enter any confidential or proprietary information (data or programs) into the codeboxes or interactive editor.  While this information stays within your browser (until you clear/erase history), there is a slight chance that an attacker could gain priviledged access to your browser, and therefore to the contents of the browser cache.

<div class="work_in_progress" markdown="1">

**Trackers** -- font services, content delivery networks (CDN), etc.

**Known Vulnerabilities** -- (To do)

</div>
