## Selecciones en D3.js

[vertical-sep]

## selectores CSS3

* D3 usa selectores CSS3 para localizar elementos del DOM.

* Podemos seleccionar un elemento
    * El primero que satisfaga el criterio

    ```
    d3.select(“body”)
    ```

* O seleccionar todos los elementos

    ```
    d3.selectAll("p.active")
    ```

[vertical-sep]

## Nuevos elementos

* Podemos usar d3 para crear nuevos elementos HTML

<a target="_blank" href="http://blockbuilder.org/jjelosua/3d9f51b2c7a7e49840a8">
    <img alt="D3 examples" class="img_70" data-src="images/core_01_example.jpg"></img>
</a>

* Explicación: Seleccionamos el body ya existente y añadimos un párrafo con el texto que queremos
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Sintaxis encadenada

* D3 permite encadenar métodos para generar una base de código pequeña

    ```
    d3.select("body").append("p").text("New paragraph");
    ```

* Es lo mismo que:

    ```
    var body = d3.select("body");
    var p = body.append("p");
    p.text("New paragraph");
    ```

[vertical-sep]

## Asociar datos

* La visualización de datos consiste en asociar datos a elementos visuales.

* En D3 asociamos nuestros datos de entrada a elementos del DOM
    * Asociar/Vincular es como añadir una propiedad al elemtento del DOM

* Este es un paso crucial para poder realizar visualizaciones de datos.

[vertical-sep]

## Asociar datos II

* Necesitamos
    * Datos
    * Una selección de elementos del DOM

* Empecemos por los datos
    * D3 nos proporciona muchas formas de cargar datos en nuestra página: d3.csv(), d3.json(), ...

* d3.csv() por ejemplo recibe dos argumentos:
    * Una ruta hasta el fichero
    * Una función (anónima) que será llamada cuando se hayan recibido los datos (carga asíncrona)

[vertical-sep]

## Asociar datos III

<a target="_blank" href="http://blockbuilder.org/jjelosua/58f360e13a4397bf3dad">
    <img alt="D3 examples" class="img_70" data-src="images/core_02_example.jpg"></img>
</a>

* La carga es asíncrona por lo que debemos incluir en el callback las funciones que trabajan con los datos para asegurar que ya están cargados
<!-- .element: class="sm_note_med" -->

* D3 ofrece utilidades de manejo de arrays para transformar los datos como: [d3.nest()](https://github.com/mbostock/d3/wiki/Arrays#d3_nest)
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## Asociar datos IV

* La magía de la vinculación se hace en [data()](https://github.com/mbostock/d3/wiki/Selections#data) sobre una determinada selección
    * Calcula cuantos elementos hay en el dataset
    * Asocia cada dato a un elemento del DOM.
    * Desde data() hasta el final de la cadena todo será ejecutado n veces (siendo n el tamaño del dataset)
    * D3 pasa a la función de la cadena dos argumentos para cada elemento function(d,i)
        * d: se corresponde con el/los dato/s
        * i: indice del elemento en el dataset

[vertical-sep]

## Asociar datos V

* Veamos un ejemplo para asegurarnos de que lo hemos entendido.

<a target="_blank" href="http://blockbuilder.org/jjelosua/fe38f5960d1276833555">
    <img alt="D3 examples" class="img_70" data-src="images/core_03_example.jpg"></img>
</a>

[vertical-sep]

## Ejercicio asociación I

* Queremos crear tantos parrafos como datos de entrada recibimos.

<a target="_blank" href="http://blockbuilder.org/jjelosua/ab293c5472d02639ca4f">
    <img alt="D3 exercise" class="img_70" data-src="images/core_01_exercise.jpg"></img>
</a>

[vertical-sep]

## Ejercicio - Tareas

* Identificar cuantos datos tenemos de entrada.
* Entender porqué parece que solamente llega 1.
* Modificar código para que veamos los 3 datos en medio de los parrafos incial y final.

[vertical-sep]

## Dibujar SVG

* Usemos la capacidad del navegador de dibujar SVGs

<a target="_blank" href="http://blockbuilder.org/jjelosua/95f7e0f6ce686f7f2ec1">
    <img alt="D3 examples" class="img_70" data-src="images/core_04_example.jpg"></img>
</a>

* Explicación: Seleccionar el body y añadir un SVG y después añadir un rectángulo por cada elemento en los datos
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Pero está al revés!!

* Las coordenadas SVG empiezan desde la esquina top-left x=0,y=0

<a target="_blank" href="http://blockbuilder.org/jjelosua/84c9384ce8bd8f646c45">
    <img alt="D3 examples" class="img_70" data-src="images/core_05_example.jpg"></img>
</a>

* Explicación: Empezamos en un punto variable y terminamos al final
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Propiedades CSS al rescate.

<a target="_blank" href="http://blockbuilder.org/jjelosua/905ebf419d8f2173559c">
    <img alt="D3 examples" class="img_70" data-src="images/core_06_example.jpg"></img>
</a>

* Explicación: Usando CSS podemos ajustar la visualización a nuestras necesidades
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Número desconocido de datos

* Quizá querramos que nuestra visualización se adapte al número de elementos del dataset

<a target="_blank" href="http://blockbuilder.org/jjelosua/dcc17252ca6ed6b4cd39">
    <img alt="D3 examples" class="img_70" data-src="images/core_07_example.jpg"></img>
</a>

* Explicación: Usaremos el tamaño del dataset al definir la visualización.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Test con datos aleatorios

<a target="_blank" href="http://blockbuilder.org/jjelosua/cf2f10e2777378a10960">
    <img alt="D3 examples" class="img_70" data-src="images/core_08_example.jpg"></img>
</a>

* Explicación: Generamos números aleatorios para comprobar la adaptabilidad.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Hagámoslo un poco más bonito

<a target="_blank" href="http://blockbuilder.org/jjelosua/b205e546900294c8cfa5">
    <img alt="D3 examples" class="img_70" data-src="images/core_09_example.jpg"></img>
</a>

* Explicación: Podemos cambiar los atributos svg usando la función [attr()](https://github.com/mbostock/d3/wiki/Selections#attr).
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Etiquetas para las barras

<a target="_blank" href="http://blockbuilder.org/jjelosua/ab12c8414a75a2314271">
    <img alt="D3 examples" class="img_70" data-src="images/core_10_example.jpg"></img>
</a>

* Explicación: Añadimos texto svg centrado sobre cada barra.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Etiquetas cortadas?

* Multiplicar la altura de las barras por un factor
* Añadir una altura mínima para no cortar las etiquetas

<a target="_blank" href="http://blockbuilder.org/jjelosua/2543c1be52a4b4a7899d">
    <img alt="D3 examples" class="img_70" data-src="images/core_11_example.jpg"></img>
</a>

* Explicación: Cuando veamos d3.scales podremos hacer esto mejor.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## [d3.scales()](https://github.com/mbostock/d3/wiki/Quantitative-Scales#linear)

* D3 nos permite crear escalas
    * Las escalas son funciones que transforman un dominio de entrada en un rango de salida
    * El dominio de entrada es el rango de posibles valores de nuestros datos de entrada
    * El rango de salida de la escala se usa habitualmente para visualizar valores en pixels

* Hay varios tipos de escalas
    * ordinal, logarítmica, exponencial, etc.

[vertical-sep]

## Escalas en un scatterplot

<a target="_blank" href="http://blockbuilder.org/jjelosua/cca11b12170c1b5fe09e">
    <img alt="D3 examples" class="img_70" data-src="images/core_12_example.jpg"></img>
</a>

* Explicación: Usando escalas nos podemos adaptar a outliers en los datos.
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## [d3.svg.axis()](https://github.com/mbostock/d3/wiki/SVG-Axes)

* A diferencia de la escalas, cuando la función eje es llamada no retorna un valor, sino que genera elementos visuales, incluyendo líneas, etiquetas, ticks.

![Axis][core01] <!-- .element: class="img_60" -->

[core01]: images/core01.jpg

Las funciones de ejes son específicas de SVG ya que generan elementos SVG.
<!-- .element: class="sm_note" -->

[vertical-sep]

## Ejes en nuestro scatterplot

<a target="_blank" href="http://blockbuilder.org/jjelosua/54e6814dcb4a91780707">
    <img alt="D3 examples" class="img_70" data-src="images/core_13_example.jpg"></img>
</a>

* Explicación: Los ejes dan contexto a nuestra viz. IMPRESCINDIBLES!!
<!-- .element: class="sm_note_med" -->
