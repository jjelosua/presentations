## Conclusiones - Expresiones Regulares

* Las expresiones regulares son una herramienta muy útil para el procesado de textos.
* Es un paquete que se incluye en la práctica totalidad de los lenguajes de programación.
* También pueden ser usados en editores de texto y otros softwares comerciales.

[slide-sep]

## Conclusiones - Patrones

* Las expresiones regulares definen patrones que podemos localizar en textos.
* Debemos conocer la sintaxis de las expresiones regulares y sus caracteres especiales.
* Podemos tomar decisiones basadas en la presencia o ausencia de un determinado patrón.

[slide-sep]

## Conclusiones - Captura

* Utilizando las agrupaciones o grupos (xxx) podemos capturas partes de las expresiones regulares.
* Podemos reutilizar dichos grupos para modificar el texto para adecuarlo a nuestro formato deseado.
* Podemos ignorar grupos de captura con la expresión (?:xxxx)

[slide-sep]

## Conclusiones - Editores de texto

* Usando expresiones regulares dentro de un editor de texto podemos adaptar el texto a nuestras necesidades
* Realizando pequeñas adaptaciones de formato
    * Por ejemplo cuando queremos un csv (inglés) desde un excel
* También podemos añadir información al texto al principio o al final

[slide-sep]

## Conclusiones - Open Refine

* Refine está pensado para limpiar datos. 
* Su capacidad de aplicar las operaciones de un proyecto a otro fichero con el mismo formato nos puede ahorrar mucho tiempo. 

* Cuando usamos expresiones regulares dentro de una función GREL debemos recordar encerrar la expresión entre barras ‘/’ para que Refine sepa tratarlo como tal.

```
value.replace(/[Aa](.*)/,”a$1”)
```


