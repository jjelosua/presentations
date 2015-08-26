## Sintaxis - Literales

En la expresión regular más simple definimos el patrón con literales

[vertical-sep]

## Ejemplo con literales

<a target="_blank" href="http://rubular.com/r/xW0VG0lmPJ">
    <img alt="RegExp example" class="img_80" data-src="images/regexp1.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Caracteres especiales

Tienen un significado específico dentro de las RegExp

* Alias: \d, \w, \s, etc.
* Caracteres alternativos: []
* Comodín para cualquier carácter: .
* Marcadores posicionales: ^,$,\b
* Repeticiones: \*,+,{n,m}
* Opcional: ?
* RegExp alternativas: |
* Grupos de captura: ()

**Veremos cada uno de estos en detalle**

Note: El cerebro de las expresiones regulares da una funcionalidad propia, Por eso es necesario exceptuar dichos caracteres al utilizarlos como literales

[slide-sep]

## Sintaxis - Alias

La sintaxis nos proporciona una serie de alias para facilitar la creación de expresiones regulares, por ejemplo:

* \d: cualquier dígito
* \D: cualquier no dígito
* \w: una letra, dígito o un guión bajo
* \t: tabulador
* \n: nueva línea
* \s: representar caracteres en blanco, espacios, tabuladores, etc.

[vertical-sep]

## Ejemplo con alias

<a target="_blank" href="http://rubular.com/r/b60UH5Wnom">
    <img alt="RegExp example" class="img_80" data-src="images/regexp_alias.jpg"></img>
</a>

[vertical-sep]

## Ejemplo espacios en blanco

<a target="_blank" href="http://rubular.com/r/Q7dbq6XIs4">
    <img alt="RegExp example" class="img_80" data-src="images/regexp2.jpg"></img>
</a>

[slide-sep]

## Caracteres alternativos

Se definen dentro de corchetes **[Jj]**

<a target="_blank" href="http://rubular.com/r/3uL1GEKyOs">
    <img alt="RegExp example" class="img_80" data-src="images/regexp3.jpg"></img>
</a>

* Podemos incluir ‘^’ dentro del corchete para negar el conjunto de caracteres.
<!-- .element: class="sm_note" -->
* Podemos incluir rangos tanto alfabéticos como numéricos: [a-f] [0-9]
<!-- .element: class="sm_note" -->

[vertical-sep]

## Ejemplo 2 - negación

<a target="_blank" href="http://rubular.com/r/ZQCmR6IjwQ">
    <img alt="RegExp example" class="img_80" data-src="images/regexp3_2.jpg"></img>
</a>

[vertical-sep]

## Ejemplo 3 - rango

<a target="_blank" href="http://rubular.com/r/VbsuV3ivXE">
    <img alt="RegExp example" class="img_80" data-src="images/regexp3_3.jpg"></img>
</a>

[slide-sep]

## Sintaxis - **'.'** es un comodín

Sirve de sustituto de cualquier carácter

¿Pero y si queremos localizar un '.' en nuestro texto?

* Para aquellos caracteres que las RegExp otorgan un significado especial, debemos escapar (meter '\' delante) si queremos que se trate como literal.

    * Por ejemplo '\\.'

[vertical-sep]

## Ejemplo comodín

<a target="_blank" href="http://rubular.com/r/eVCrBEafVh">
    <img alt="RegExp example" class="img_80" data-src="images/regexp4.jpg"></img>
</a>

[vertical-sep]

## Ejemplo punto como literal

<a target="_blank" href="http://rubular.com/r/hJZ1n0bgh6">
    <img alt="RegExp example" class="img_80" data-src="images/regexp4_2.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Marcadores posicionales

No describen caracteres sino su posición 
* Principios de línea '^'
* Fin de línea '$'
* Delimitador de palabra '\\b'

[vertical-sep]

## Ejemplo marcadores posicionales - Inicio

<a target="_blank" href="http://rubular.com/r/Ge0JzMbkjJ">
    <img alt="RegExp example" class="img_80" data-src="images/regexp5.jpg"></img>
</a>

[vertical-sep]

## Ejemplo marcadores posicionales - Final

<a target="_blank" href="http://rubular.com/r/0AZTUcXwFy">
    <img alt="RegExp example" class="img_80" data-src="images/regexp5_2.jpg"></img>
</a>

¿Alguien ve algo raro?
<!-- .element: class="sm_note_med" -->

[slide-sep]

## Sintaxis - Opcionales

Podemos hacer una o varias letras opcionales con '?'
* juergas?
* lugar(es)? cuando son varios hay que usar paréntesis 
* Por qué puede ser erroneo lugare?s?

[vertical-sep]

## Ejemplo con opcionales

<a target="_blank" href="http://rubular.com/r/kvo2AlFYDk">
    <img alt="RegExp example" class="img_80" data-src="images/regexp6.jpg"></img>
</a>

¿Pero agarra 'Plan' y si solo quiero los artículos? 
<!-- .element: class="sm_note_med" -->

[slide-sep]

## Sintaxis - Repeticiones

Viene lo divertido...pasemos a varios caracteres
* '*' 0 o más veces
* '+' 1 o más veces
* {n} n veces
* {n,m} entre n y m veces inclusive
* {n,} n o más veces

[vertical-sep]

## Ejemplo con repeticiones

<a target="_blank" href="hhttp://rubular.com/r/xIXzHdn4SF">
    <img alt="RegExp example" class="img_80" data-src="images/regexp7.jpg"></img>
</a>

[slide-sep]

## Sintaxis - comportamiento repeticiones

Cuando usamos repetidores podemos definir su comportamiento
* _greedy_: es el comportamiento por defecto
* _lazy_: tendremos que poner un '?' tras el repetidor.

[vertical-sep]

## Ejemplo greedy

<a target="_blank" href="http://rubular.com/r/unVbQLboFo">
    <img alt="RegExp example" class="img_80" data-src="images/regexp8.jpg"></img>
</a>

[slide-sep]

## Sintaxis - RegExp alternativas

Usaremos '|' para crear expresiones alternativas
* Si queremos limitar la alternativa a una parte del texto, podemos usar paréntesis para acotar el alcance de la alternativa.

[vertical-sep]

## Ejemplo regexp alternativas

<a target="_blank" href="http://rubular.com/r/xa3EDVHaKa">
    <img alt="RegExp example" class="img_80" data-src="images/regexp9.jpg"></img>
</a>