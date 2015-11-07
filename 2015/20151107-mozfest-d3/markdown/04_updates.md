## D3.js Updates

[vertical-sep]

## Update data

* In order to update the data we need to do two things

    * Rebind the new data to the d3 visualization
    * Update the visuals needed to reflect the change

* The easiest update is when we change all the values (same length) at once

[vertical-sep]

## Update data example

<a target="_blank" href="http://blockbuilder.org/jjelosua/298418746cff49e27678">
    <img alt="D3 examples" class="img_70" data-src="images/example13.jpg"></img>
</a>

* Explanation: It is kind of difficult to know what has happened.
<!-- .element: class="sm_note_med" --> 

[vertical-sep]

## Transitions

* In D3 Making a nice, super smooth, animated transition is as simple as adding one line of code

    ```
    transition()
    ```

* We need to add this line in the chain after the selection has been made and before any attribute change that we want to animate

[vertical-sep]

## Transitions II 

* Barchart transition.

<a target="_blank" href="http://blockbuilder.org/jjelosua/adf5e495f5de369b97ed">
    <img alt="D3 examples" class="img_70" data-src="images/example14.jpg"></img>
</a>

* Play with the duration to see weird effects
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transitions III 

* Scatter plot transition.

<a target="_blank" href="http://blockbuilder.org/jjelosua/42aa3995a5f4f6477b94">
    <img alt="D3 examples" class="img_70" data-src="images/example15.jpg"></img>
</a>

* Notice how the axis are also updated smoothly
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transitions IV

* If we want something to happen at the start or at the end of a transition:
    _each(“start”,function)_ or _each(“stop”,function)_

<a target="_blank" href="http://blockbuilder.org/jjelosua/95a585d575d1845b3911">
    <img alt="D3 examples" class="img_70" data-src="images/example16.jpg"></img>
</a>

* Notice that newer transitions interrupt and override previous ones
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transitions V

* After v3 we can chain transitions using another syntax        

<a target="_blank" href="http://blockbuilder.org/jjelosua/5c6d52120fbb5bf236e0">
    <img alt="D3 examples" class="img_70" data-src="images/example17.jpg"></img>
</a>

Transitions are one of the most cool features on D3 since they provide a really good user experience....it’s like a game.
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## data() magic

* When we do a selection and rebind the data, the data() method returns references to all the elements to which data has been bound

* When the length of the dataset has changed, data() returns two subselections:
    * enter(): New elements
    * exit(): Elements that are not there now

[vertical-sep]

## Adding new values

* We use the subselection enter() to create the new visuals to accomodate the new data values of our dataset

<a target="_blank" href="http://blockbuilder.org/jjelosua/b52bb8308664e21dbe37">
    <img alt="D3 examples" class="img_70" data-src="images/example18.jpg"></img>
</a>

[vertical-sep]

## Removing elements

* We use the subselection exit() to remove the visuals that are not needed anymore

<a target="_blank" href="http://blockbuilder.org/jjelosua/7486c964050655799276">
    <img alt="D3 examples" class="img_70" data-src="images/example19.jpg"></img>
</a>

* Notice the use of the remove() function to delete the DOM element
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Data join with keys

* Up until now the dataset update was handled by the position of each data value in the array

* But what if we want to update only one of our elements or remove one in the middle?

* We need to identify each data point by a key in order to be able to work with it.

[vertical-sep]

## Data join with keys II

<a target="_blank" href="http://blockbuilder.org/jjelosua/8ff54b5cc0640152c563">
    <img alt="D3 examples" class="img_70" data-src="images/example20.jpg"></img>
</a>

* Now that we have identified data by keys we can create and remove elements correctly
<!-- .element: class="sm_note_med" -->
