## Características básicas

[vertical-sep]

Para ir siguiendo la explicación juntos, veamos un ejemplo:

1. Abrir Refine

2. Localizar el proyecto "cine_largometrajes_2013_2002_refine.google-refine.tar.gz"

3. Importar proyecto

[vertical-sep]

## Proyecto largometrajes

![OpenRefine import project][basic01]

[basic01]: images/basic01.jpg


Nota: No debemos descomprimir el proyecto - (extensión .tar.gz)
<!-- .element: class="sm_note_med" -->

[vertical-sep]

* Facetas: Parecido a filtros excel pero con contadores.
    * Texto
    * Numérico
    * Fechas
    * Especiales (blancos vs. no blancos, ...)

* Filtros de texto
    * Admite expresiones regulares

* Podemos fácilmente modificar las partes de los datos en las que estamos interesados

* Deshacer y rehacer pasos de forma sencilla

[vertical-sep]

## Facetas

* Se pueden combinar multiples 
    * Útil para obtener una visión global

![OpenRefine facets][basic02] <!-- .element: class="img_60" -->

[basic02]: images/basic02.jpg

[vertical-sep]

## Deshacer y rehacer

* Mantiene toda la historia
    * No hay que tener miedo!!!

![OpenRefine facets][basic03] <!-- .element: class="img_60" -->

[basic03]: images/basic03.jpg

[vertical-sep]

## Transformaciones

* Renombrar/eliminar columnas

* Más usadas a un click
    * Quitar espacios
    * Convertir entre tipos de datos (número a texto,etc.)
    * Reemplazar partes de un campo (replace)

* Añadir columna basada en otra columna

* Eliminar filas "filtradas"
    * Tras aplicar un filtro o seleccionar un grupo de una faceta podemos eliminar los datos "encontrados"

[vertical-sep]

## Transformaciones más usadas

![OpenRefine common transformations][basic04] <!-- .element: class="img_80" -->

[basic04]: images/basic04.jpg

[vertical-sep]

## Transformaciones - GREL

* [GREL][grel] es el lenguaje que podemos usar en transformaciones
    * substring, vlookup, if, etc. (_excel_)

[grel]: https://github.com/OpenRefine/OpenRefine/wiki/General-Refine-Expression-Language

![OpenRefine column transformations][basic05] <!-- .element: class="img_60" -->

[basic05]: images/basic05.jpg

[vertical-sep]

## Preview, history, starred

* Podemos comprobar si obtenemos el resultado esperado

![OpenRefine transformations preview][basic06] <!-- .element: class="img_70" -->

[basic06]: images/basic06.jpg

[vertical-sep]

## Eliminar/exportar filas "filtradas"

![OpenRefine filtered rows][basic07] <!-- .element: class="img_80" -->

[basic07]: images/basic07.jpg

Nota: Muy útil para quedarnos con partes de un gran fichero
<!-- .element: class="sm_note_med" -->