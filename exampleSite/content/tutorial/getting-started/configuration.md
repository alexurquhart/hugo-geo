+++
title = "Site Configuration"
highlight = true
nodisqus = false
notoc = true
sharebuttons = true
date = "2017-02-05T11:18:44-05:00"
tags = []
scripts = []
css = []
tutorial = "Getting Started With Hugo-Geo"
description = "A guide on how to configure the hugo-geo theme"
+++

The `config.toml` file presented below is a bit of a beast, but once you've gone 
through the process of configuring your site once, you can then focus on writing content.

Parameters listed as optional can be removed.

```toml
baseurl = "http://replace-this-with-your-hugo-site.com/"
relativeURLs = false
languageCode = "en-us"

# Shown in page title and left sidebar
title = "Your Name"

# Shown in the footer
copyright = "2001 - 2017"
theme = "hugo-geo"
paginate = 5
googleAnalytics = "code-here"
disqusShortname = "shortcode-here"

# Author appears in the footer
[author]
    name = "My Name Here"

[taxonomies]
    tag = "tags"

[params]
    # Appears in sidebar
    profilepic = "img/profile.png"

    # Appears in sidebar - optional
    subtitle = "My Hugo Blog"

    # Appears on index page - optional
    tagline = "What I'm Thinking"
    
    # Whether to show theme credits in the footer - optional
    attribution = true

    # URL for twitter feed widget in the sidebar for posts - optional
    twitterwidgeturl = "https://twitter.com/alexanderurq"

    # Array of all available social share buttons - optional
    sharebuttons = [
        "email",
        "print",
        "rss",
        "facebook",
        "twitter",
        "linkedin",
        "reddit",
        "googleplus"
    ]

    # Array of additional CSS files to be loaded on every page - optional
    css = []

    # Array of additional Javascript files to be loaded on every page
    scripts = []

    # Locale information to be specified in Open Graph meta tags - optional
    # See http://ogp.me/
    oglocale = "en_US"

    # For use with Facebook Developer Insights - optional
    # See https://developers.facebook.com/docs/platforminsights/domains
    fbappid = "App-Id-Here"

    # For use with Open Graph meta tags - optional
    # Can be overridden by post front matter
    metaimage = "/path/to/image"

    # Twitter account of the author, and website - optional
    # See https://dev.twitter.com/cards/getting-started
    twittercreator = "@alexanderurq"
    twittersite = "@alexanderurq"

    # Color of browser bar on mobile sites - optional
    # Be sure to update if you tweak the site CSS
    themecolor = "#2d4054"

# Left hand sidebar and mobile nav link menu
# Add or remove links as you see fit
[[menu.sidenav]]
    name = "Blog"
    identifier = "blog"
    url = "/"
    weight = -1
[[menu.sidenav]]
    name = "Tutorials"
    identifier = "tutorials"
    url = "/tutorial/"
    weight = 1

# Social sharing icons for left hand sidebar
# Links here appear in the footer on mobile
# Add or remove as you see fit
[[menu.social]]    
    name = "GitHub"
    url = "https://www.github.com/alexurquhart"
    pre = '<i class="fa fa-github" aria-hidden="true"></i>'
    weight = 0

[[menu.social]]
    name = "Twitter"
    url = "https://twitter.com/alexanderurq"
    pre = '<i class="fa fa-twitter" aria-hidden="true"></i>'
    weight = 1

[[menu.social]]    
    name = "E-Mail"
    url = "mailto:alexurquhart@gmail.com"
    pre = '<i class="fa fa-envelope-o" aria-hidden="true"></i>'
    weight = 2

[[menu.social]]    
    name = "LinkedIn"
    url = "https://www.linkedin.com/in/alex-urquhart-65979695"
    pre = '<i class="fa fa-linkedin" aria-hidden="true"></i>'
    weight = 3

# Righthand sidebar menu appears on posts and tutorial pages
[[menu.sidebar]]
    pre = '<img src="/img/do.png" class="responsive pure-img">'
    url = "https://m.do.co/c/78ae6b852549"

# Additional links to add in the footer
# Can also be specified in content front matter
[[menu.footer]]
    name = "Link 1"
    url = "#"
[[menu.footer]]
    name = "Link 2"
    url = "#"
```