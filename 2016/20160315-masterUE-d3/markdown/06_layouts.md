## Layouts

[vertical-sep]

* Los layouts en D3 transforman o mapean los datos de entrada o otro formato, se usan para generar datos de una forma específica para una tarea visual

* Cabe resaltar que los layouts de D3 no generan ningún elemento visual en pantalla.

[vertical-sep]

* Aquí tenemos algunos de los layouts disponibles
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

* Ver la [referencia API](https://github.com/mbostock/d3/wiki/Layouts) para actualizaciones 

[vertical-sep]

## Force layout

* Revisemos el force layout y sus funcionalidades

* Los force layouts simulan fuerzas de la naturaleza para disponer los elementos en una pantalla.

* Se usan mucho para gráficos de redes.

[vertical-sep]

## Force layout II

* Existen dos partes en los gráficos de red 
    * Nodos: Entidades en el dataset
    * Enlaces: Conexiones entre nodos

* El _force layout_ de D3 espera de entrada nodos y enlaces como arrays de objetos separados

* Debemos especificar que ocurre en cada iteración del modelo del _force layout_.

[vertical-sep]

## Force layout III

* Hay muchos parámetros que podemos variar para adaptar la visualización a nuestros requerimientos
    * linkDistance, charge, gravity, etc.

* Revisad la [documentacion](https://github.com/mbostock/d3/wiki/Force-Layout) para más detalles sobre como parametrizar el layout

[vertical-sep]

## Force layout IV

* Veamos un ejemplo simple

<a target="_blank" href="http://blockbuilder.org/jjelosua/93dd38fba6098391c37b">
    <img alt="D3 examples" class="img_70" data-src="images/layouts_01_example.jpg"></img>
</a>

Fijaos que si pasamos el ratón sobre las etiquetas no crea ningún efecto.
<!-- .element: class="sm_note_med" -->