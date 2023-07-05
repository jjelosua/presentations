## Extra, Extra!! 

Hablamos de la importancia de un diseñador creativo...mirad esta delicia concebida por [Pablo Loscri][loscri]<!-- .element: target="_blank" -->

<a target="_blank" href="https://especiales.lanacion.com.ar/multimedia/proyectos/15/elecciones/elecciones_2015_arg_pv_hemiciclo/">
    <img alt="Hemiciclo 2015 Argentina" class="img_60" data-src="images/hemiciclo.png"></img>
</a>

[loscri]: https://twitter.com/ploscri

[vertical-sep]

## Detalles técnicos

[vertical-sep]

## OpenSource

Hemos liberado el código de varios de los proyectos que hemos mencionado aquí

* [PASO CABA 2015](https://github.com/lanacioncom/elecciones_2015_caba)<!-- .element: target="_blank" -->
* [PASO CABA por escuela](https://github.com/lanacioncom/2015_PASO_CABA_polling_stations_map)<!-- .element: target="_blank" -->
* [CABA 2015 por escuela](https://github.com/lanacioncom/2015_CABA_polling_stations_map)<!-- .element: target="_blank" -->

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

## [Gulp](http://gulpjs.com/)<!-- .element: target="_blank" --> (_Node_)

* Permite usar liveReload para el desarrollo
* Minimificar, _afear_ y versionar estáticos

![Gulp][gulp_img] <!-- .element: class="img_80" -->

[gulp_img]: images/gulp.jpg

[vertical-sep]

## [Fabric](http://www.fabfile.org/)<!-- .element: target="_blank" --> (_Python_)

* Despliegue a servidores, incluso en paralelo
* Coordinación de tareas y manejo de entornos virtuales

![Fabric][fabric_img] <!-- .element: class="img_80" -->

[fabric_img]: images/fabric.jpg

[vertical-sep]

## [Github Issues](https://guides.github.com/features/issues/)<!-- .element: target="_blank" -->

En nuestro trabajo hemos integrado los issues de github como mecanismo
de comunicacion de errores y mejoras.

![Github Issues][issues_img] <!-- .element: class="img_80" -->

[issues_img]: images/issues.jpg

* Flujo de trabajo: Ves un error creas un issue y continuas con tu tarea.
<!-- .element: class="sm_note" -->

[vertical-sep]

## Modularización 

Cuando la base de código crece necesitas modularizar para no convertir
el desarrollo en un laberinto.

* Frontend
    * Requirejs: como pegamento cuando javascript se desmadra

* Backend
    * Modulos python: tip sobre control del flujo de programa

[vertical-sep]

## [Requirejs](http://requirejs.org/)<!-- .element: target="_blank" -->

* Permite crear módulos asíncronos y mantenerlos coordinados.
* Cuenta con un [optimizador](http://requirejs.org/docs/optimization.html)<!-- .element: target="_blank" --> para producción

![Requirejs][require_img] <!-- .element: class="img_80" -->

[require_img]: images/requirejs.jpg

[vertical-sep]

## [Excepciones de usuario](https://docs.python.org/2/tutorial/errors.html)<!-- .element: target="_blank" -->

Para no pasar el control del programa entre módulos en modo laberinto
se pueden usar excepciones personalizables para dicho control.

![User Exceptions][excep1_img] <!-- .element: class="img_70" -->

[excep1_img]: images/excep1.jpg

![User Exceptions][excep2_img] <!-- .element: class="img_70" -->

[excep2_img]: images/excep2.jpg

[vertical-sep]

## Seguimiento en tiempo real

Lo hemos conseguido...pero está funcionando bien?

* Postman: Colecciones para testear las APIs

* Logging: Imprescindible para testear que el backend está vivo.

[vertical-sep]

## Postman

* Permite consultar APIs de manera sencilla y compartir con el equipo

![Postman][postman_img] <!-- .element: class="img_80" -->

[postman_img]: images/postman.jpg

[vertical-sep]

## Logging

* Ir viendo pasar matrix ante tus ojos...

![Logging][log_img] <!-- .element: class="img_80" -->

[log_img]: images/logging.jpg

