## Algunas tips técnicas

[vertical-sep]

## OpenSource

Hemos liberado el código de varios de los proyectos que hemos mencionado aquí

* [PASO CABA 2015](https://github.com/lanacioncom/elecciones_2015_caba)
* [PASO CABA por escuela](https://github.com/lanacioncom/2015_PASO_CABA_polling_stations_map)
* [CABA 2015 por escuela](https://github.com/lanacioncom/2015_CABA_polling_stations_map)

Iremos liberando el resto poco a poco tras limpieza y documentación
<!-- .element: class="sm_note_med" -->

[vertical-sep]

## Automatizar todo

Pero todo todo...lo agradecerás el día de las elecciones 
cuando tengas que solucionar algo rápidamente

* Frontend
    * Dependencias: npm y bower
    * Gulp: build para producción

* Backend
    * Fabric: despliegue y coordinación de tareas

[vertical-sep]

## [Gulp]() (_Node_)

* Permite usar liveReload para el desarrollo
* Minimificar, _afear_ y versionar estáticos

[Imagen]

[vertical-sep]

## [Fabric]() (_Python_)

* Despliegue a servidores, incluso en paralelo
* Coordinación de tareas y manejo de entornos virtuales

[Imagen]

[vertical-sep]

## [Github Issues]()

**Si no es un issue no existe**

En nuestro trabajo hemos integrado los issues de github como mecanismo
de comunicacion de errores y mejoras.

* Flujo de trabajo: Ves un error creas un issue y continuas con tu tarea.
 
[Imagen]

[vertical-sep]

## Modularización 

Cuando la base de código crece necesitas modularizar para no convertir
el desarrollo en un laberinto.

* Frontend
    * Requirejs: como pegamento cuando javascript se desmadra

* Backend
    * Modulos python: tip sobre control del flujo de programa

[vertical-sep]

## [Requirejs]()

* Permite crear módulos asíncronos y mantenerlos coordinados.
* Cuenta con un optimizador para producción [enlace]

[Imagen]

[vertical-sep]

## [Excepciones de usuario]()

Para no pasar el control del programa entre módulos en modo laberinto
se pueden usar excepciones personalizables para dicho control.

[imagen1]

[imagen2]

[vertical-sep]

## Seguimiento en tiempo real

Lo hemos conseguido...pero está funcionando bien?

* Postman: Colecciones para testear las APIs

* Logging: Imprescindible para testear que el backend está vivo.

