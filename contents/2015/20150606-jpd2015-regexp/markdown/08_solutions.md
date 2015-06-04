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