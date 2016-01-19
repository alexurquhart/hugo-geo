# hugo-geo
Theme I use for my personal website. Suitable for desktop and mobile. Designed for `tutorial` and `post` types.

![screenshot](https://raw.githubusercontent.com/alexurquhart/hugo-geo/master/images/tn.png)

[## Demo](https://alexurquhart.com)

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
[params]
	# Render the rotating globe in the sidebar
	showglobe = true
 	
	# Google Analytics
	analytics = "SHORT-CODE-HERE"

	# Social buttons for sidebar
	github = "https://github.com/alexurquhart"
	twitter = "https://twitter.com/alexanderurq"
	linkedin = "https://linkedin.com"
	email = "alexurquhart@gmail.com"
	
	profilepic = "img/smugmug.jpg"
	
	# Title/subtitle for the sidebar
	title = "ALEX URQUHART"
	subtitle = "GEOMATICS PROFESSIONAL"
	
	# Nav links below the profile picture
	[[params.navlinks]]
	name = "Blog"
	url = "blog/"
	
	[[params.navlinks]]
	name = "Projects"
	url = "projects/"
	
	[[params.navlinks]]
	name = "About"
	url = "about/"
```

## TODO
- Clean up and simplify the CSS
- Make Disqus comments optional on a per-page basis
- Previous/next post buttons on each page
- Improve list pages
