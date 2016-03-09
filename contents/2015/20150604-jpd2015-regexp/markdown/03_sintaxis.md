## Sintaxis - Literales

En la expresión regular más simple definimos el patrón con literales

[vertical-sep]

## Ejemplo con literales

<a target="_blank" href="http://rubular.com/r/4WgZslSaHg">
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

<a target="_blank" href="http://rubular.com/r/sIX0gu6JSH">
    <img alt="RegExp example" class="img_80" data-src="images/regexp_alias.jpg"></img>
</a>

[vertical-sep]

## Ejemplo espacios en blanco

<a target="_blank" href="http://rubular.com/r/MpUCNsDxK7">
    <img alt="RegExp example" class="img_80" data-src="images/regexp2.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Caracteres alternativos

Se definen dentro de corchetes
* Podemos incluir ‘^’ dentro del corchete para negar el conjunto de caracteres.
* Podemos incluir rangos tanto alfabéticos como numéricos: [a-f] [0-9]

[vertical-sep]

## Ejemplo con alternativos

<a target="_blank" href="http://rubular.com/r/pk4tAZEuIG">
    <img alt="RegExp example" class="img_80" data-src="images/regexp3.jpg"></img>
</a>

[slide-sep]

## Sintaxis - **'.'** es un comodín

Sirve de sustituto de cualquier carácter

¿Pero y si queremos localizar un '.' en nuestro texto?

* Para aquellos caracteres que las RegExp otorgan un significado especial, debemos escapar (meter '\' delante) si queremos que se trate como literal.

    * Por ejemplo '\\.'

[vertical-sep]

## Ejemplo comodín

<a target="_blank" href="http://rubular.com/r/mwTmlFL5HM">
    <img alt="RegExp example" class="img_80" data-src="images/regexp4.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Marcadores posicionales

No describen caracteres sino su posición 
* Principios de línea '^'
* Fin de línea '$'
* Delimitador de palabra '\\b'

[vertical-sep]

## Ejemplo marcadores posicionales

<a target="_blank" href="http://rubular.com/r/ejAS5vUAa4">
    <img alt="RegExp example" class="img_80" data-src="images/regexp5.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Opcionales

Podemos hacer una o varias letras opcionales con '?'
* juergas?
* lugar(es)? cuando son varios hay que usar paréntesis 
* Por qué puede ser erroneo lugare?s?

[vertical-sep]

## Ejemplo con opcionales

<a target="_blank" href="http://rubular.com/r/cjljCbx1fF">
    <img alt="RegExp example" class="img_80" data-src="images/regexp6.jpg"></img>
</a>

[slide-sep]

## Sintaxis - Repeticiones

Pasemos a varios caracteres
* '*' 0 o más veces
* '+' 1 o más veces
* {n} n veces
* {n,m} entre n y m veces inclusive
* {n,} n o más veces

[vertical-sep]

## Ejemplo con repeticiones

<a target="_blank" href="http://rubular.com/r/fnJ2D5rIjr">
    <img alt="RegExp example" class="img_80" data-src="images/regexp7.jpg"></img>
</a>

[slide-sep]

## Sintaxis - comportamiento repeticiones

Cuando usamos repetidores podemos definir su comportamiento
* _greedy_: es el comportamiento por defecto
* _lazy_: tendremos que poner un '?' tras el repetidor.

[vertical-sep]

## Ejemplo greedy

<a target="_blank" href="http://rubular.com/r/brHyVQ1Qz7">
    <img alt="RegExp example" class="img_80" data-src="images/regexp8.jpg"></img>
</a>

[slide-sep]

## Sintaxis - RegExp alternativas

Usaremos '|' para crear expresiones alternativas
* Si queremos limitar la alternativa a una parte del texto, podemos usar paréntesis para acotar el alcance de la alternativa.

[vertical-sep]

## Ejemplo regexp alternativas

<a target="_blank" href="http://rubular.com/r/MHnr8TN60a">
    <img alt="RegExp example" class="img_80" data-src="images/regexp9.jpg"></img>
</a>