## <a target="_blank" href="http://regexone.com/">RegExOne</a>

Plataforma online para aprender expresiones regulares

<a target="_blank" href="http://regexone.com/">
    <img alt="RegExpOne screenshot" class="img_80" data-src="images/regexpone.jpg"></img>
</a>

[vertical-sep]

## <a target="_blank" href="http://regexone.com/lesson/0">RegExOne</a>

Vamos a poner en práctica los conocimientos aprendidos
* Realizar los ejercicios de las primeras 14 lecciones

[slide-sep]

## Caso de uso - Notepad++

Podemos usar RegExp dentro de la opción buscar/reemplazar
* CTRL+F o CTRL+H
* Seleccionando el modo de RegExp

[vertical-sep]

## Notepad++ - Buscar/Reemplazar

![Notepad++ RegExp][notepad] <!-- .element: class="img_80" -->

[notepad]: images/notepad++.jpg

[vertical-sep]

## Ejercicio 1

<a target="_blank" href="data/asistentes.txt">Fichero de ejemplo</a>

Tareas:
1. Convertir fecha a formato AAAA-MM-DD
2. Convertir el fichero en delimitado por comas
3. Añadir el año actual al principio del fichero

Nuestro objetivo un fichero como éste:

```
2015,Juan Elosua,1976-05-21,@jjelosua
2015,Marta Alonso,1975-3-31,@marta_af
2015,Lucas,1974-9-2,@lucas_dev
```

[slide-sep]

## Caso de uso - OpenRefine

OpenRefine es una magnífica herramienta para realizar tareas repetitivas en múltiples ficheros de datos que siguen exactamente el mismo formato.
* Podemos usar el flujo “extract - apply” de un proyecto base de OpenRefine para no tener que repetir trabajo.
* Combinando esta capacidad con el uso de expresiones regulares podemos optimizar el tiempo empleado en “limpiar” datos.

[vertical-sep]

Podemos usar RegExp dentro de OpenRefine:
* En funciones dentro de “Edit cell/transform”
* En un filtro de columna
* Al partir una columna en varias

[vertical-sep]

## Open Refine - Filtro con RegExp

![Open Refine example][refine_exercise]

[refine_exercise]: images/refine_exercise.jpg

[vertical-sep]

## OpenRefine - Transformaciones

Muchas funciones en <a target="_blank" href="https://github.com/OpenRefine/OpenRefine/wiki/GREL-Functions">GREL</a> pueden usar RegExp como argumentos

* replace normal

```
value.replace("5","8")
```
* replace con regexp 

```
value.replace(/\d/,"0")
```

[vertical-sep]

## Ejercicio 2

<a target="_blank" href="data/recaudacion2012_2008.csv">Fichero de recaudación</a>

Utilizando expresiones regulares
1. Extraer el año de la URL a una columna
2. Limpiar los datos de recaudación
3. Limpiar los datos de espectadores
4. Filtrar los datos de la década de 2010-2019

[vertical-sep]

## Objetivo final

![OpenRefine resultado][refine_exercise_result] <!-- .element: class="img_80" -->

[refine_exercise_result]: images/refine_exercise_result.jpg


