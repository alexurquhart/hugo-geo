# hugo-geo
Theme I use for my github personal page. The two sections that I designed this for are `post`'s and `project`'s.

## Demo
I use this theme on my personal site: https://alexurquhart.com

## Dependencies
- Hugo v0.13 or better
- LESS if you wish to compile custom CSS

## Site Config
These are my `config.toml` settings to customize the sidebar:

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
	
	title = "ALEX URQUHART"
	subtitle = "GEOMATICS PROFESSIONAL"
	
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
