## D3.js Updates

[vertical-sep]

## Actualizar datos

* Para actualizar los datos necesitamos dos cosas

    * Vincular los nuevos datos a la visualización
    * Actualizar los elementos visuales para reflejar el cambio

* Lo más sencillo cambiar todos los datos al mismo tiempo (mismo tamaño)

[vertical-sep]

## Ejemplo de actualización de datos

<a target="_blank" href="http://blockbuilder.org/jjelosua/298418746cff49e27678">
    <img alt="D3 examples" class="img_70" data-src="images/updates_01_example.jpg"></img>
</a>

* Explicación: Es difícil darse cuenta de lo que ocurre.
<!-- .element: class="sm_note_med" --> 

[vertical-sep]

## Transiciones

* Añadir transiciones en D3 es tan fácil como añadir una línea de código

    ```
    .transition()
    ```

* Necesitamos añadir dicha línea en la cadena después de la selección y vinculación de datos pero antes de los cambios de propiedades que queremos animar

[vertical-sep]

## Transiciones II 

* Transición del barchart.

<a target="_blank" href="http://blockbuilder.org/jjelosua/adf5e495f5de369b97ed">
    <img alt="D3 examples" class="img_70" data-src="images/updates_02_example.jpg"></img>
</a>

* Jugad con la duración para ver efectos raros
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transiciones III 

* Transición del scatterplot.

<a target="_blank" href="http://blockbuilder.org/jjelosua/42aa3995a5f4f6477b94">
    <img alt="D3 examples" class="img_70" data-src="images/updates_03_example.jpg"></img>
</a>

* Notice how the axis are also updated smoothly
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transiciones IV - each()

* Hacer algo al comenzar o acabar las transiciones

<a target="_blank" href="http://blockbuilder.org/jjelosua/95a585d575d1845b3911">
    <img alt="D3 examples" class="img_70" data-src="images/updates_04_example.jpg"></img>
</a>

Fijaos en que las nuevas transiciones interrumpen y “machacan” las antiguas
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Transiciones V

* Tras la versión 3 de D3 también podemos encadenar transiciones usando otra sintaxis

<a target="_blank" href="http://blockbuilder.org/jjelosua/5c6d52120fbb5bf236e0">
    <img alt="D3 examples" class="img_70" data-src="images/updates_05_example.jpg"></img>
</a>

Las transiciones dan una experiencia de usuario mucho más placentera, D3 las convierte en algo super simple...es como un juego!!!
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## La magía del método data()

* Cuando hacemos una seleccion y vinculamos con _data()_, D3 retorna referencias a todos los elementos a los que hemos vinculado datos.

* Cuando varía la longitud de los datos _data()_ retorna dos subselecciones:
    * enter(): Para elementos nuevos
    * exit(): Para elementos que han desaparecido.

[vertical-sep]

## Añadir nuevos valores

* Usamos _enter()_ para crear nuevos elementos visuales y acomodar los nuevos valores del dataset

<a target="_blank" href="http://blockbuilder.org/jjelosua/b52bb8308664e21dbe37">
    <img alt="D3 examples" class="img_70" data-src="images/updates_06_example.jpg"></img>
</a>

[vertical-sep]

## Eliminar elementos

* Usamos _exit()_ para eliminar los elementos visuales que ya no necesitamos

<a target="_blank" href="http://blockbuilder.org/jjelosua/7486c964050655799276">
    <img alt="D3 examples" class="img_70" data-src="images/updates_07_example.jpg"></img>
</a>

* Fijaos en el uso de la función remove() para borrar el elemento del DOM
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Vincular por clave I

* Hasta ahora la actualización se hacia por la posición de cada dato en el array

* Pero y si queremos actualizar o eliminar un elemento que está en el medio del dataset?

* Necesitamos identificar cada dato por una clave para poder referirnos a dicho elemento en la actualización.

[vertical-sep]

## Vincular por clave II

<a target="_blank" href="http://blockbuilder.org/jjelosua/8ff54b5cc0640152c563">
    <img alt="D3 examples" class="img_70" data-src="images/updates_08_example.jpg"></img>
</a>

* Ahora que hemos identificado los datos por clave podemos añadir y eliminar elementos de forma correcta
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Ejercicio con claves I

* Estamos en una tienda de ropa y queremos vizualizar ventas. En el año 2016 hemos decidido descartar los pantalones y empezar a vender camisetas y ropa interior para ver si mejoran nuestras ventas.

* Al final del año disponemos de los datos y queremos visualizarlo en d3 para impresionar al director general.

[vertical-sep]

## Ejercicio con claves II

<a target="_blank" href="http://blockbuilder.org/jjelosua/833f435d36464d2f28fb">
    <img alt="D3 examples" class="img_70" data-src="images/updates_09_exercise.jpg"></img>
</a>

[vertical-sep]

## Ejercicio - Tareas

1. Que se vea de que producto se trata cada barra
2. Que se actualice el elemento común tanto en altura como su etiqueta
3. Que los elementos que no están desaparezcan en vez de irse a la izquierda 

