## Objetivos principales de hoy

[vertical-sep]

## Objetivos </br> (Pensando en grande!!)

* Entender como funcionan las selecciones en d3
    * enter()
    * update
    * exit()

* Entender la potencia de d3.scales

* Entemder como funcionan las transiciones

[vertical-sep]

## Objetivos secundarios 

* Interactividad

* D3 layouts

* Ejercicios

Quizá no lleguemos a verlo todo, pero os quedan las slides para futura referencia
<!-- .element: class="sm_note" -->

[slide-sep]

## Introducción a D3.js

[vertical-sep]

## Visualización de datos

* La visualización de datos es una parte muy importante del periodismo de datos en la actualidad

* En un mundo con excesiva información en le que vivimos la visualización es uno de las formas más rápidas de comunicarnos con otros.

* Una buena visualización debe ser fácil de entender y contener solamente aquello que agregue valor y no distraiga a los usuarios

[vertical-sep]

## Visualizaciones interactivas 

* Las visualizaciones interactivas permiten a los lectores explorar los datos ellos mismos.
    * Buscando las historias que más le interesen.

* Aunque el lector pueda explorar los datos, debemos proveer una guía introductoria que le permita comprender como utilizar la visualización
    * A veces las visualizaciones pecan de complejas e intimidantes al principio.
    * Necesitamos pensar en una audiencia heterogénea cuando diseñamos la visualización.

[vertical-sep]

## Galería de ejemplos con d3.js

<a target="_blank" href="http://d3js.org/">
    <img alt="D3 examples" class="img_60" data-src="images/intro_01_galeria.jpg"></img>
</a>

[vertical-sep]

## [d3.js](https://d3js.org)

* D3 o D3.js es una librería javascript de código abierto que facilita las visualizaciones.

* D3 se basa en estándares web como HTML5, CSS3 and SVG
    <blockquote>D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining
    powerful viz components and a data-driven approach to DOM manipulation</blockquote>

Nombre viene de: Data-Driven Documents.
<!-- .element: class="sm_note_left" -->

[vertical-sep]

## Estándares web

* SVG: Scalable vector graphics
    * [Gráfico vectorial](https://en.wikipedia.org/wiki/Vector_graphics) basado en [XML](https://en.wikipedia.org/wiki/XML) (Interactividad)
    * Tipos: rect, circle, text, line, path, ...
    * [Tutorial](http://www.w3schools.com/svg/)

* [HTML5](https://en.wikipedia.org/wiki/HTML5): HyperText Markup Language
    * Elementos: body, div, p, a, span, table, ...
    * [Introducción](http://www.w3schools.com/html/html5_intro.asp)

* [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets): Cascading style sheets
    * Selectores, fondos, efectos sobre texto, ...
    * [Tutorial](http://www.w3schools.com/css/)

[vertical-sep]

## Qué hace bien D3?

* Crear/gestionar documentos web con datos
    * _Cargando_ datos en la memoria del navegador.
    * _Asociando_ datos a elementos del DOM, creando nuevos elementos si es necesario.
    * _Transformando_ esos elementos y configurando su apariencia visual según los datos que tenga asociado de forma personalizada.

[vertical-sep]

## Qué no hace tan bien D3?

* Gráficas para exploración de datos
    * D3 no está orientado a la exploración, donde necesitas generar de forma rápida muchas vistas de un conjunto de datos para conocer su contenido.

* Soporte para navegadores antiguos

* D3 no esconde los datos (Cliente)
    * Si estamos preocupados por la privacidad, no debemos usar D3, pero queremos visualizar datos no?

[vertical-sep]

## instalación de D3.js

* Descargar la librería D3 de su website
    * Versión [Normal](https://github.com/mbostock/d3/blob/master/d3.js): Para depurar e inspeccionar.
    * Versión [Minificada](https://github.com/mbostock/d3/blob/master/d3.min.js): Para entornos de producción.

* Debido a restricciones de seguridad en los navegadores es bueno ejecutar D3 desde un servidor web local
    * Hay muchas opciones disponibles (python SimpleHttpServer, node gulp, WAMP, XAMPP, ...)
    * Para esta sesión utilizaremos un servicio en la nube

[vertical-sep]

## Herramientas en la nube

* Para acelerar la puesta en marcha del taller, he usado <a target="_blank" href="http://blockbuilder.org/">blockbuilder</a> para crear una serie de ejemplos que nos van a guiar sobre los principales conceptos de D3.js

<a target="_blank" href="http://blockbuilder.org/jjelosua/30ad6abd1aacada4c6d3">
    <img alt="D3 examples" class="img_70" data-src="images/intro_02_blockbuilder.jpg"></img>
</a>

[vertical-sep]

## [Blockbuilder](http://blockbuilder.org/)

* Desarrollado por [@enjalot](https://twitter.com/enjalot) te permite crear y probar visualizaciones creadas con d3.js, inspirada por bl.ocks de [Mike Bostock](https://twitter.com/mbostock)

* Puedes editar el código y ver el resultado de forma simultánea. Dos vistas: vertical o horizontal

* Puedes logarte con tu cuenta de [Github](https://github.com/) y cada vez guardes se almacenará el código en un _gist_ público

* Elementos básicos
    * Readme.md: Describe el objetivo del código
    * Index.html: página web con código y estilos embebidos