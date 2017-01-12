+++
date = "2017-01-11T18:27:38-05:00"
title = "Theme Demonstration"
draft = false
tags = ["blog", "hugo", "hugo-atlas", "demonstration"]
highlight = true
+++

On this page I'd like to showcase all of the themes features.

# Typography

Emphasis, aka italics, with *asterisks* or _underscores_.
```markdown
Emphasis, aka italics, with *asterisks* or _underscores_.
```

Strong emphasis, aka bold, with **asterisks** or __underscores__.
```markdown
Strong emphasis, aka bold, with **asterisks** or __underscores__.
```

Combined emphasis with **asterisks and _underscores_**.
```markdown
Combined emphasis with **asterisks and _underscores_**.
```

Strikethrough uses two tildes. ~~Scratch this.~~
```markdown
Strikethrough uses two tildes. ~~Scratch this.~~
```

Links to [different websites](https://gohugo.io)
```markdown
Links to [different websites](https://gohugo.io)
```

# Code

You can use [highlight.js](https://highlightjs.org/) to highlight most languages.

```javascript
function multiply(a, b) {
    returh a * b;
}

console.log(multiply(5, 5));
```

## Inline Code

Inline code is supported as well `console.log('This is inline code')`

## GitHub Gists

```
{{</* gist spf13 7896402 */>}}
```
{{< gist spf13 7896402 >}}

# Media

Here is how the default media shortcodes look on this theme

## Twitter

```
{{</* tweet 666616452582129664 */>}}
```
{{< tweet 666616452582129664 >}}

## YouTube

```
{{</* youtube w7Ft2ymGmfc */>}}
```
{{< youtube w7Ft2ymGmfc >}}

## Vimeo

```
{{</* vimeo 146022717 */>}}
```
{{< vimeo 146022717 >}}


## Instagram

```
{{</* instagram BMokmydjG-M hidecaption */>}}
```

{{< instagram BMokmydjG-M hidecaption >}}

# Custom Shortcodes

## Image

By default all images will 

{{< image src="http://lorempixel.com/g/640/480/" >}}

## Grid

This theme uses [Pure.css](http://purecss.io/) for its' base css, including its' [grid system](http://purecss.io/grids/).

There are a few [shortcodes](http://gohugo.io/extras/shortcodes/) provided in order for you to generate your own grids inside the content body of posts.

```
{{</* row */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
{{</* /row */>}}
```

This renders as the following HTML:

```html
<div class="pure-g clear">
    <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    </div>
    <div class=" pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    </div>
    <div class=" pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    </div>
    <div class=" pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    </div>
</div>
```
This will will be displayed same as below. Resize your browser window to see the responsive grid in action.

{{< row >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
{{< /row >}}

Try resizing your browser window to see the responsive grid in action.

### Row

The `{{</* row */>}}` shortcode

### Column
