+++
date = "2016-03-04"
title = "Getting Started With hugo-geo"
tags = ["tutorial", "series", "hugo"]
description = "A tutorial on how to use and customize the Hugo-Geo theme"
index = true
highlight = true
+++

Setting up and configuring hugo-geo is as simple as changing a few values in your site `config.toml`. Lets look at this example site's config and go over what
each of hugo-geo's site `[params]` do.

If this guide doesn't answer your question it may be covered in the [Hugo documentation](http://gohugo.io/overview/configuration/).

<!--more-->

```toml
baseurl = "http://replace-this-with-your-hugo-site.com/"
relativeURLs = false
languageCode = "en-us"
title = "My New Hugo Site"
disqusShortname = "shortcode-here"
paginate = 5

[taxonomies]
	tag = "tags"
	tutorial = "tutorials"

[params]
	showglobe = true

	favicon = "favicon.ico"

	analytics = "code-here"

	github = "https://github.com/alexurquhart"
	twitter = "https://twitter.com/alexanderurq"
	linkedin = "https://www.linkedin.com/profile/view?id=339355941"
	email = "alexurquhart@gmail.com"
	
	profilepic = "img/profile.png"
	
	title = "MY NAME"
	subtitle = "MY HUGO BLOG"
	
	[[params.navlinks]]
	name = "About"
	url = "about"
	
	[[params.navlinks]]
	name = "Blog"
	url = ""
	
	[[params.navlinks]]
	name = "Tutorials"
	url = "tutorial/"
```

##### The Spinning Globe

`showglobe =  true`

Set this to `false` and the spinning globe in the sidebar will not be rendered.

##### Favicon

`favicon = "favicon.ico"`

Copy your site's icon file to the `static` folder of your site. Delete this parameter if you don't wish to display a favicon.

##### Analytics

In order to remain compatible with Hugo v0.14, the analytics shortcode is specified in the site params.

##### Social Links

```toml
github = "https://github.com/alexurquhart"
twitter = "https://twitter.com/alexanderurq"
linkedin = "https://www.linkedin.com/profile/view?id=339355941"
email = "alexurquhart@gmail.com"
```

These social settings set the icon links in the sidebar. If you don't want to have a certain icon or link show up, simply remove it.

##### Sidebar Profile Picture

`profilepic = "img/profile.png"`

This is the path to the profile image shown in the sidebar, relative to the `baseurl`

##### Title & Subtitle

Either of these can be removed. If the `title` param is removed, then the site `title` will be used instead.

##### Nav Links

A customizable array of links that will appear in the sidebar, or dropdown menu when viewed on mobile. The URL is relative to the `baseurl`.

## Content Front Matter

There are few custom settings you can specify in your content front matter that will effect how hugo generates your site.

##### Syntax highlighting with hljs

Set `highlight = true` in your post front matter to include [highlight.js](https://highlightjs.org/) javascript and css.

##### Custom JS/CSS

Include custom CSS and Javascript on an individual piece of content like so:

```toml
scripts = [
"//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/languages/go.min.js",
]

css = [
"//cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css"
]
```

##### Posting Tutorials

In order for a `tutorial` to show up on the `/tutorials/` page list, it must have `index = true` present in the front matter of the post.
New `tutorial`'s will not show up on the front page of the site, yet.

Multi-paged tutorial series can be accomplished by including links to each page of the tutorial on the page with `index = true`.