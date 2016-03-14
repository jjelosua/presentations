## Interacción

[vertical-sep]

* D3 maneja los eventos javascript estándar
    * Mouseover, click, mouseout, ...

* D3 ofrece el método _on()_ para vincular eventos a selecciones D3
    * Recibe dos argumentos: El nombre del evento y una función _callback_ para realizar las acciones deseadas

* Crear una visualización interactiva requiere de dos pasos
    * Vincularse a los eventos de entrada del usuario.
    * Definir el comportamiento para cada uno de ellos.

[vertical-sep]

## Cambio de color en mouseover

<a target="_blank" href="http://blockbuilder.org/jjelosua/0a35a22e85371bebb7ba">
    <img alt="D3 examples" class="img_70" data-src="images/interactivity_01_example.jpg"></img>
</a>

Fijaos que si pasamos el ratón por los textos no se crea el efecto.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Pro tip - pointer-events

* Esto se puede resolver por CSS

    ```
    svg text {pointer-events: none;}
    ```

* Explicación: Al no recibir eventos el texto SVG entonces el mouseover lo pasa al elemento que está debajo
<!-- .element: class="sm_note_med" --> 

[vertical-sep]

## Ordenación

* La interactividad permite al lector buscar diferentes puntos de vista de los datos

* La capacidad de ordenar es muy importante
    * D3 permite ordenar de manera sencilla

[vertical-sep]

## Click para ordenar

<a target="_blank" href="http://blockbuilder.org/jjelosua/1cea913412fc46e99aef">
    <img alt="D3 examples" class="img_70" data-src="images/interactivity_02_example.jpg"></img>
</a>

Si hacemos click en cualquier barra, se reordenarán en orden ascendente o descendente alternativamente
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Tooltips

* En muchos casos no es necesario etiquetar cada dato en la vista inicial.

* Pero dicho nivel de detalle debería ser accedido por los lectores.

* Ahí es donde entran en escena los tooltips.

[vertical-sep]

## Tooltips II

* Podemos crear tooltips es con _divs_ HTML

* A mi me gusta crear un _div_ oculto en HTML
    * Cuando un elemento detecta el _mouseover_
    * Rellenamos el tooltip con la información deseada
    * Posicionamos el tooltip
    * Mostramos el tooltip
    * Lo volvemos a esconder en el _mouseout_

[vertical-sep]

## Tooltips III

<a target="_blank" href="http://blockbuilder.org/jjelosua/9c10c82154508fb4ce96">
    <img alt="D3 examples" class="img_70" data-src="images/interactivity_03_example.jpg"></img>
</a>