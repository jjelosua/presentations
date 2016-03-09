## Soluciones - Regexone

* Lesson 1a - abc.*
* Lesson 1b - .*123.*
* Lesson 2 - \.\s*$
* Lesson 3 - [cmf]an
* Lesson 4 - [^b]og
* Lesson 5 - [A-Z].{2}
* Lesson 6 - waz{2,}up
* Lesson 7 - a{2,}b*c+

[vertical-sep]

## Soluciones - Regexone

* Lesson 8 - .\s+files?\s+found\?
* Lesson 9 - \d\.\s+abc
* Lesson 10 - ^Mission:.*
* Lesson 11 - (.*)\.pdf$
* Lesson 12 - ([A-Z][a-z]{2}\s+(\d{4}))
* Lesson 13 - (\d{3,4})x(\d{3,4})
* Lesson 14 - I love (?:cats|dogs)

[slide-sep]

## Soluciones - Notepad++

* Primer paso (Cambiar formato de fecha y girarlo):
    * **find**: \s+(\d{1,2})/(\d{1,2})/(\d{4}) 
    * **replace**: ,$3-$2-$1
* Segundo paso (Cambiar meses de 1 dígito a 2):
    * **find**: -(\d)- **replace**: -0$1-
* Tercer paso (Cambiar días de 1 dígito a 2):
    * **find**: -(\d)$ **replace**: -0$1
* Cuarto paso (Incorporar el año):
    * **find**: ^ **replace**: 2015,

[slide-sep]

## Soluciones - OpenRefine

* Sobre la columna _pageURL:

```
value.replace(/.*Anio(\d{4}).*/,"$1")
```

* Sobre la columna recaudación:

```
value.replace(/(\d{3})(\d{2}).*/,"$1,$2")
value.replace(/\./,"")
value.replace(/,/,".")
```

* Sobre la columna espectadores:

```
value.replace(/(\d)\.(\d)/,"$1$2")
```

* Filtro sobre la columna anio:

```
\d{2}1\d
```