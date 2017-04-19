![logo](https://github.com/alexurquhart/hugo-geo/blob/master/exampleSite/static/img/logo.png?raw=true)

A responsive blog theme I've developed for use on my personal website. Suitable for desktop and mobile. Designed for `tutorial` and `post` sections.

![screenshot](https://raw.githubusercontent.com/alexurquhart/hugo-geo/master/images/tn.png)

#[Example Site Demo](https://alexurquhart.github.io/hugo-geo/)

I also use it on my [personal website](https://alexurquhart.com)


## Dependencies
- Hugo v0.14 or better
- LESS if you wish to compile the custom CSS

## Features
- Use `highlight = true` in the front matter to include [highlight js](https://highlightjs.org/) javascript and css files.
- In the front matter, use `index = true` on the first post in a tutorial series to make that content the "index" page for the rest of the series
- Include custom scripts and css on individual pages in front matter like so:
```toml
scripts = [
"//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.8.0/languages/go.min.js",
]

css = [
"//cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css"
]
```

## Site Config
These are my `config.toml` settings:

```toml
BaseURL = "https://base-url-here/"
relativeURLs = false
languageCode = "en-us"
title = "SiteTitle.Com"
disqusShortname = "*****"
paginate = 5

[taxonomies]
	tag = "tags"
	tutorial = "tutorials"

[params]
	# Render the rotating globe in the sidebar
	showglobe = true

	# Include favicon
	favicon = "favicon.ico"
 	
	# Google Analytics
	analytics = "SHORT-CODE-HERE"

	# Email (optional)
	email = "alexurquhart@gmail.com"
	
	# Header Title for the main page
	header = "What I'm Thinking"
	
	# Sidebar profile picture
	profilepic = "img/smugmug.jpg"
	
	# Title/subtitle for the sidebar
	title = "ALEX URQUHART"
	subtitle = "GEOMATICS PROFESSIONAL"
	
	# Social buttons for sidebar
	# Each of these are optional
	[[params.socialbuttons]]
	faicon = "github"
	url = "https://github.com/alexurquhart"
	[[params.socialbuttons]]
	faicon = "twitter"
	url = "https://twitter.com/alexanderurq"
	[[params.socialbuttons]]
	faicon = "linkedin"
	url = "https://linkedin.com"
	[[params.socialbuttons]]
	faicon = "google-plus"
	url = "https://plus.google.com/+YourID"

	# Nav links below the profile picture
	[[params.navlinks]]
	name = "About"
	url = "about/"
	
	[[params.navlinks]]
	name = "Blog"
	url = "posts/"
	
	[[params.navlinks]]
	name = "Tutorials"
	url = "tutorial/"
```

## My TODO List (currently working on v2.0)
- Clean up and simplify the CSS
- Make Disqus comments optional on a per-page basis
- Previous/next post buttons on each page
- Improve list pages
- Add a sidebar on large screens with links to related posts
- Add next/previous links at the end of posts/tutorials
- Add breadcrumbs to top of page


#### Credits
World graphic in logo by <a href="http://www.greepit.com">Sarfraz Shoukat</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
