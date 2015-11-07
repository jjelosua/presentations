## Layouts

[vertical-sep]

* D3 layouts take data that you provide and remap or otherwise transform it, thereby generating new data that is more convenient for a specific visual task

* D3 layouts do not, in fact, lay anything out for you on the screen.

[vertical-sep]

* Here is a list of the available layouts
    * Bundle
    * Chord
    * Cluster
    * Force
    *Histogram
    * Pack
    * Partition
    * Pie
    * Stack
    * Tree
    * Treemap

* Check the [API reference](https://github.com/mbostock/d3/wiki/Layouts) for updates

[vertical-sep]

## Force layout

* Let's review the force layout and its functionalities

* Force layouts use simulations of physical forces to arrange elements on the screen

* Force layouts are normally used to make a network graph

[vertical-sep]

## Force layout II

* There are two components in network graphs
    * Nodes: Entities in the dataset
    * Links: Connections between nodes

* D3 force layout expects us to provide nodes and links separately as arrays of objects

* We have to specify what happens in every iteration of the force layout model

[vertical-sep]

## Force layout III

* There are many parameters that we can modify to adapt the visualization to our needs
    * linkDistance, charge, gravity, etc.

* Take a look at the [documentation](https://github.com/mbostock/d3/wiki/Force-Layout) for more details on how to tweak the layout

[vertical-sep]

## Force layout IV

* Let's check a simple example

<a target="_blank" href="http://blockbuilder.org/jjelosua/93dd38fba6098391c37b">
    <img alt="D3 examples" class="img_70" data-src="images/example24.jpg"></img>
</a>

Notice that if we pass the mouse over the text labels it does not create any efect.
<!-- .element: class="sm_note_med" -->