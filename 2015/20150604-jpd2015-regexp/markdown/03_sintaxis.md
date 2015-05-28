## Sintaxis - Literales

En la expresión regular más simple definimos el patrón con literales

![RegExp example][regexp1_img]

[regexp1_img]: images/regexp1.jpg

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

## [Ejemplo][ex1]

![RegExp example][regexp1_img]

[ex1]: http://rubular.com/r/4WgZslSaHg
[regexp1_img]: images/regexp1.jpg

[slide-sep]

## Sintaxis - Caracteres alternativos

Se definen dentro de corchetes
* Podemos incluir ‘^’ dentro del corchete para negar el conjunto de caracteres.
* Podemos incluir rangos tanto alfabéticos como numéricos: [a-f] [0-9]

###CAPTURA

[slide-sep]

## Sintaxis - **'.'** es un comodín

Sirve de sustituto de cualquier carácter

¿Pero y si queremos localizar un '.' en nuestro texto?

* Para aquellos caracteres que las RegExp otorgan un significado especial, debemos escapar (meter '\' delante) si queremos que se trate como literal.

    * Por ejemplo '\\.'

###CAPTURA

[slide-sep]

## Sintaxis - Marcadores posicionales

No describen caracteres sino su posición 
* Principios de línea '^'
* Fin de línea '$'
* Delimitador de palabra '\\b'