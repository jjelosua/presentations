## D3.js Selections

[vertical-sep]

## CSS3 selectors

* D3 uses CSS3 selectors to select DOM elements.

* We can select one element
    * The first one that matches the criteria

    ```
    d3.select(“body”)
    ```

* Or we could select multiple elements

    ```
    d3.selectAll("p.active")
    ```

[vertical-sep]

## New elements

* We can use D3 to create new elements in our web page

<a target="_blank" href="http://blockbuilder.org/jjelosua/3d9f51b2c7a7e49840a8">
    <img alt="D3 examples" class="img_70" data-src="images/example01.jpg"></img>
</a>

* Explanation: We first select the existing body element and then append a new paragraph element with the desired text
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Chain syntax

* D3 allows to use chained methods keeping the code small

    ```
    d3.select("body").append("p").text("New paragraph");
    ```

* Is equivalent to:

    ```
    var body = d3.select("body");
    var p = body.append("p");
    p.text("New paragraph");
    ```

[vertical-sep]

## Binding data

* Data visualization is a process of mapping data to visuals.

* In D3 we bind our data input values to elements in the DOM
    * Binding is like attaching a data element to a DOM element

* This is a crucial step in order to be able to transform visuals according to our data.

[vertical-sep]

## Binding data II

* For the binding step we need two elements
    * Data
    * A selection of DOM elements

* Let’s begin with the data
    * D3 offers us many ways to load data into our web visualizations: d3.csv(), d3.json(), ...

* d3.csv() for example takes two arguments:
    * The path to the data file
    * A callback function (anonymous) to be called once the data is loaded (asynchronous loading)

[vertical-sep]

## Binding data III

<a target="_blank" href="http://blockbuilder.org/jjelosua/58f360e13a4397bf3dad">
    <img alt="D3 examples" class="img_70" data-src="images/example02.jpg"></img>
</a>

* Since the loading is asynchronous it is a good practice to include in the anonymous function the calls to the methods that will work with the data so that we know it is already loaded
<!-- .element: class="sm_note_med" -->

* D3 offers many utils to work with array data and transform it to our needs: [d3.nest()](https://github.com/mbostock/d3/wiki/Arrays#d3_nest)
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## Binding data IV

* The magic of binding is done with the [data()](https://github.com/mbostock/d3/wiki/Selections#data) method over a selection
    * Calculates how many items are in our dataset
    * Binds each item with a DOM element.
    * From the data() method on in the chain everything will be executed n times (where n is the length of our dataset)
    * D3 makes sure keeps that, for each element that we are treating, the anonymous function receives two arguments function(d,i)
        * d: the corresponding data item
        * i: index of this item inside the dataset

[vertical-sep]

## Binding data

* Let's check an example to ensure we all understand how this works.

<a target="_blank" href="http://blockbuilder.org/jjelosua/fe38f5960d1276833555">
    <img alt="D3 examples" class="img_70" data-src="images/example03.jpg"></img>
</a>

[vertical-sep]

## Drawing SVG

* Let’s now use the SVG browser capabilities to draw

<a target="_blank" href="http://blockbuilder.org/jjelosua/95f7e0f6ce686f7f2ec1">
    <img alt="D3 examples" class="img_70" data-src="images/example04.jpg"></img>
</a>

* Explanation: First select the existing body element and then append a SVG and then add a rectangle for each element in the dataset
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## But wait that is upside down

* SVG coordinates start from the top-left corner x=0,y=0

<a target="_blank" href="http://blockbuilder.org/jjelosua/84c9384ce8bd8f646c45">
    <img alt="D3 examples" class="img_70" data-src="images/example05a.jpg"></img>
</a>

* Explanation: We need to start at a variable point and finish at the bottom
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## CSS properties to the rescue.

<a target="_blank" href="http://blockbuilder.org/jjelosua/905ebf419d8f2173559c">
    <img alt="D3 examples" class="img_70" data-src="images/example05b.jpg"></img>
</a>

* Explanation: Using CSS we can tweak our visualization to our needs
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Unknown number of elements

* Maybe we want our data to be scalable depending on the number of data elements

<a target="_blank" href="http://blockbuilder.org/jjelosua/dcc17252ca6ed6b4cd39">
    <img alt="D3 examples" class="img_70" data-src="images/example06.jpg"></img>
</a>

* Explanation: We need to use the length of our dataset in our viz.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Test with random data

<a target="_blank" href="http://blockbuilder.org/jjelosua/cf2f10e2777378a10960">
    <img alt="D3 examples" class="img_70" data-src="images/example07.jpg"></img>
</a>

* Explanation: We generate random numbers to test our new viz.
<!-- .element: class="sm_note_med" -->
