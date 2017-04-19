+++
date = "2017-01-11T18:27:38-05:00"
title = "Theme Demonstration"
description = "A comprehensive example of the unique features available in the hugo-geo theme"
draft = false
tags = ["blog", "hugo", "hugo-atlas", "demonstration"]
highlight = true
sharebuttons = true
+++

On this page I'd like to showcase all of the themes features.

<!--more-->

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

Block quotes look like this

> Block quotes look like this

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

## Images

By default all images have a lightbox using [Lightbox.js](http://lokeshdhakar.com/projects/lightbox2/).

```text
{{</*image src="path/to/your/image" */>}}

Parameters
    id - Applied to the <figure> tag. Can be used for custom CSS
    *src - Image source
    caption - Optional. Caption for <figcaption>, lightbox, and alt text
    alt - Alt text for image. Uses caption text if not present
    nolightbox - set to 1 to remove lightbox
    gallery - Name many images with the same gallery attribute to be able to click "next" and "previous" in the lightbox
    responsive - Set to 1 to make image width 100%

* Mandatory parameter
```

### Examples


```text
{{</*image src="http://lorempixel.com/400/400/animals/5/" caption="This is a caption for an image" */>}}
```
{{< image src="http://lorempixel.com/400/400/animals/5/" caption="This is a caption for an image" >}}

```text
{{</*image src="http://lorempixel.com/g/1000/1000" caption="This is a caption for an image" responsive="1" nolightbox="1" */>}}
```
{{< image src="http://lorempixel.com/g/1000/1000" caption="This is a caption for a responsive image" responsive="1" nolightbox="1" >}}

## Grid

This theme uses [Pure.css](http://purecss.io/) for its' base css, including its' [grid system](http://purecss.io/grids/).

There are a few [shortcodes](http://gohugo.io/extras/shortcodes/) provided in order for you to generate your own grids inside the content body of posts.

```
{{</* row */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
    {{</* col size="1" md-size="1-2" lg-size="1-4" */>}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{</* /col */>}}
{{</* /row */>}}
```

This renders as the following HTML:

```html
<div class="hg-row pure-g clear">
  <div class="hg-col pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit
    error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
  </div>
  <div class="hg-col pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit
    error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
  </div>
  <div class="hg-col pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit
    error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
  </div>
  <div class="hg-col pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum, cupiditate id voluptatem, velit
    error necessitatibus soluta quidem debitis, ducimus labore. Unde, veniam, eos tempora sit ratione optio!
  </div>
</div>
```
This will will be displayed same as below. Resize your browser window to see the responsive grid in action.

{{< row >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
    {{< col size="1" md-size="1-2" lg-size="1-4" >}}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, voluptate vero rerum,
        cupiditate id voluptatem, velit error necessitatibus soluta quidem debitis, ducimus labore.
        Unde, veniam, eos tempora sit ratione optio!
    {{< /col >}}
{{< /row >}}

Try resizing your browser window to see the responsive grid in action.

### Row

The `{{</* row */>}}` shortcode, as you might expect, creates a new row. There are two optional parameters:

- `id` applies an ID to the row div
- `class` applies a class to the row div. Multiple classes can be separated by a space. The default classs `hg-row` is applied to all rows, to make it easier to customize the CSS.

#### Example
```
{{</* row id="first-row" class="class1 class2" */>}}
    ...cols...
{{</* /row */>}}
```

### Column

The column shortcode should be nested inside of a row shortcode. It has parameters that correspond
with the various CSS breakpoints set by the [Pure.css](https://purecss.io/grids/) grid system.

- `id` applies an ID to the column div
- `size` corresponds to anyone of the 5<sup>ths</sup> or 24<sup>ths</sup> based grid units. **\* mandatory**
- `sm-size` grid size applied at the small screen breakpoint (≥ 568px)
- `md-size` grid size applied at the medium screen breakpoint (≥ 768px)
- `lg-size` grid size applied at the large screen breakpoint (≥ 1024px)
- `xl-size` grid size applied at the XL screen breakpoint (≥ 1280px)
- `class` applies a class to the column div. Multiple classes can be separated by a space. The default classs `hg-col` is applied to all columns, to make it easier to customize the CSS.

#### Examples

A grid with 3 columns

```
{{</* row id="first-row" class="class1 class2" */>}}
    {{</* col size="1-3" */>}}
        ...content...
    {{</* /col */>}}
    {{</* col id="middle-col" size="1-3" */>}}
        ...content...
    {{</* /col */>}}
    {{</* col size="1-3" */>}}
        ...content...
    {{</* /col */>}}
{{</* /row */>}}

```