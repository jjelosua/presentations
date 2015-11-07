## D3.js Introduction

[vertical-sep]

## Data Visualization

* Data visualization is a very important piece in the data journalism world.

* In the information overloaded world that we live, data visualization is one of the fastest way to communicate with others.

* A good visualization must be easy to understand and can’t contain elements that do not add value or that distract the audience

[vertical-sep]

## Interactive data viz 

* Interactive data visualization allows readers to explore data by themselves.
    * Searching for stories that they're more interested in.

* Even if the reader has the ability to explore data, we should always try to give a guided tour on how to explore the data
    * Sometimes a complex visualization can be overwhelming at the beginning.
    * We need to think in a wider audience when designing a visualization

[vertical-sep]

## D3.js gallery

<a target="_blank" href="http://d3js.org/">
    <img alt="D3 examples" class="img_60" data-src="images/intro01.jpg"></img>
</a>

[vertical-sep]

## [d3.js](https://d3js.org)

* D3 or D3.js is an open source javascript library for creating data visualizations.

* D3 relies on web standards like HTML5, CSS3 and SVG
    <blockquote>D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining
    powerful viz components and a data-driven approach to DOM manipulation</blockquote>

The name comes from Data-Driven Documents.
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## Web standards

* SVG: Scalable vector graphics
    * [XML](https://en.wikipedia.org/wiki/XML)-based [vector image](https://en.wikipedia.org/wiki/Vector_graphics) format for 2D graphics
    * Types: rect, circle, text, line, path ...
    * [Tutorial](http://www.w3schools.com/svg/)

* [HTML5](https://en.wikipedia.org/wiki/HTML5): HyperText Markup Language
    * Elements: body, div, p, a, span, table, ...
    * [Introduction](http://www.w3schools.com/html/html5_intro.asp)

* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): Cascading style sheets
    * Selectors, backgrounds, text effects, ...
    * [Tutorial](http://www.w3schools.com/css/)

[vertical-sep]

## What can D3 do?

* Create and handle web documents with data
    * _Loading_ data into the browser’s memory.
    * _Binding_ data to elements within the document, creating new elements as needed.
    * _Transforming_ those elements by interpreting each
    element’s bound datum and setting its visual properties accordingly

[vertical-sep]

## What isn't D3 meant for?

* Exploratory analysis graphs
    * D3 is not oriented to exploratory analysis, where you need to quickly generate many _views_ of a dataset to extract meaning of the data.

* Support for older browsers

* D3 doesn’t hide your original data
    * If privacy is a concern do not use it.
    * But you are doing data visualization right?

[vertical-sep]

## D3js setup

* Download D3 library from the home website
    * [Normal](https://github.com/mbostock/d3/blob/master/d3.js) version: Good for debugging and inspecting.
    * [Minified](https://github.com/mbostock/d3/blob/master/d3.min.js) version: Good for production performance

* Because of the security restrictions on browsers accessing local files it is good to have a local web server available to test D3
    * There are several options (python SimpleHttpServer, node gulp, WAMP, XAMPP, ...)
    * For this session we will use a cloud based service

[vertical-sep]

## Online tools

* In order to speed up this workshop, I have used [blockbuilder](http://blockbuilder.org/) to create a bunch of examples that will help us go through the core concepts in D3js

<a target="_blank" href="http://blockbuilder.org/jjelosua/30ad6abd1aacada4c6d3">
    <img alt="D3 examples" class="img_70" data-src="images/example00.jpg"></img>
</a>

[vertical-sep]

## [Blockbuilder](http://blockbuilder.org/)

* Developed by [@enjalot](https://twitter.com/enjalot) let's you quickly create and test d3 visualizations, inspired by bl.ocks from [Mike Bostock](https://twitter.com/mbostock)

* You can edit the code and view the results interactively. There are two view modes: standard or side-by-side

* You can login with your [Github](https://github.com/) account and each time you save the code will be stored in a public gist on your account

* Basic elements
    * Readme.md: Describes the purpose of this code
    * Index.html: main web page with inline code and styles