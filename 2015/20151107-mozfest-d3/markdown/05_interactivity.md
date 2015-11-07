## Interactivity

[vertical-sep]

* D3 handles the standard javascript events
    * Mouseover, click, mouseout, ...

* D3's _on()_ method is a handy way to quickly bind event listeners to D3 selections
    * It takes two arguments: The event name and an anonymous function to create the desired behavior

* Making a visualization interactive requires two steps
    * Binding event listeners
    * Defining the behavior

[vertical-sep]

## Shading on mouseover

<a target="_blank" href="http://blockbuilder.org/jjelosua/0a35a22e85371bebb7ba">
    <img alt="D3 examples" class="img_70" data-src="images/example21.jpg"></img>
</a>

Notice that if we pass the mouse over the text labels it does not create any efect.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Pro tip

* Did you notice that if we pass the mouse over the text it does not change colors?

* You can change that with CSS pointer-events property

    ```
    svg text {pointer-events: none;}
    ```

[vertical-sep]

## Sorting

* Interactivity is great to allow the reader to search for different views on the data

* The ability to sort data is extremely important
    * D3 makes it very easy to sort elements

[vertical-sep]

## Click to sort

<a target="_blank" href="http://blockbuilder.org/jjelosua/1cea913412fc46e99aef">
    <img alt="D3 examples" class="img_70" data-src="images/example22.jpg"></img>
</a>

If you click on any of the bars it will reorder descending and ascending alternatively
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Tooltips

* In many cases, it's not necessary to label every individual data value in the default view

* But that level of detail should still be accessible to users

* That's where tooltips come in

[vertical-sep]

## Tooltips II

* One way to create tooltips is with HTML divs

* I like to create a hidden div in my HTML file
    * When a element detects a mouseover
    * Populate the tooltip with the corresponding data
    * Position the tooltip
    * Show the tooltip
    * We need to hide again the tooltip on mouseout

[vertical-sep]

## Tooltips III

<a target="_blank" href="http://blockbuilder.org/jjelosua/9c10c82154508fb4ce96">
    <img alt="D3 examples" class="img_70" data-src="images/example23.jpg"></img>
</a>