![logo](https://github.com/alexurquhart/hugo-geo/blob/master/exampleSite/static/img/logo.png?raw=true)

A responsive blog theme I've developed for use on my personal website. Suitable for desktop and mobile. Designed for `tutorial` and `post` sections.

![screenshot](https://raw.githubusercontent.com/alexurquhart/hugo-geo/master/images/tn.png)

[Example Site Demo](http://alexurquhart.github.io/hugo-geo/)

I also use it on my [personal website](https://alexurquhart.com)

## Dependencies
- Hugo v0.18 or better

## Developing
The CSS for hugo-geo is compiled using SASS, while the JS is transpiled using Babel (see `.babelrc` to 
change browser presets)

```bash
# Install dependencies
npm install

# Develop
gulp watch

# Build
gulp
```


## Contributing
I ask that everyone who wishes to contribute open a GitHub issue
detailing the enhancement, feature, or bugfix that are working on. If you're submitting a pull request please ensure that:

- It references an open GitHub issue
- Any new features or config changes are documented in the example site and README.md
- Any text in the theme that isn't user specified is inserted to `data/hugogeo/strings.toml` to allow for i18n

#### Credits
World graphic in logo by <a href="http://www.greepit.com">Sarfraz Shoukat</a> from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Made with <a href="http://logomakr.com" title="Logo Maker">Logo Maker</a>
