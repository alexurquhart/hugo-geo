# hugo-geo
Theme I use for my personal website. Suitable for desktop and mobile. The two sections that I designed this for are `post`'s and `project`'s.

![screenshot](https://raw.githubusercontent.com/alexurquhart/hugo-geo/master/images/screenshot.png)

## Demo
I use this theme on my personal site: https://alexurquhart.com

## Dependencies
- Hugo v0.13 or better
- LESS if you wish to compile the custom CSS

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
