# Expresiones regulares
### Magia negra a tu servicio..._sh{2,}_

_[Juan Elosua][blog]_ - _[bit.ly/2016_master_regexp][slides]_

[blog]: http://www.juanelosua.com
[slides]: http://bit.ly/2016_master_regexp

Note: https://juanelosua.titanpad.com/master-regexp

[slide-sep]

## ¿Quién soy?

### [Juan Elosua Tomé][blog] ([@jjelosua][twitter])

Ingeniero de Telecomunicaciones que trabaja como desarrollador con experiencia en análisis y visualizaciones de datos. [2015 Knight-Mozilla Fellow][fellow] en [La Nación Data][lndata]

Algunos proyectos en los que he colaborado:
* <a target="_blank" href="http://www.espanaenllamas.es">España en Llamas</a>
* <a target="_blank" href="http://www.elindultometro.es">El indultometro</a>
* <a target="_blank" href="http://www.lanacion.com.ar/1846694-elecciones-2015-mapa-de-resultados-del-ballottage-por-provincia-municipio-y-comuna">Elecciones Argentina 2015 - tiempo real</a>
* <a target="_blank" href="http://www.lanacion.com.ar/1848689-como-fue-el-resultado-del-ballottage-en-la-escuela-donde-votaste">Elecciones Argentina 2015 - por establecimiento</a>

[blog]: http://www.juanelosua.com
[twitter]: https://twitter.com/jjelosua
[fellow]: http://opennews.org/what/fellowships/2015meet
[lndata]: http://www.lanacion.com.ar/data

[vertical-sep]

### <a target="_blank" href="http://www.espanaenllamas.es">España en Llamas</a>

Este fue mi primer proyecto de periodismo de datos. Tras un periplo por las administraciones públicas con peticiones de información junto a [civio][civio] intentamos dar contexto y concienciar sobre el problema de los incendios forestales en España

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.espanaenllamas.es">
    <img alt="España en llamas" class="img_60" data-src="images/proj_eel.jpg"></img>
</a>

[civio]: http://civio.es

[vertical-sep]

### <a target="_blank" href="http://www.elindultometro.es">El indultometro</a>

En [civio][civio] hemos recopilado, desgranado y clasificado toda la información contenida en el BOE sobre los indultos concedidos en España desde 1996. Busca por tipo de delito, compara datos anuales y valora el uso que cada gobierno ha hecho de ellos

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.elindultometro.es">
    <img alt="El Indultometro" class="img_60" data-src="images/proj_EI.jpg"></img>
</a>

[civio]: http://civio.es

[vertical-sep]

### <a target="_blank" href="http://www.lanacion.com.ar/1846694-elecciones-2015-mapa-de-resultados-del-ballottage-por-provincia-municipio-y-comuna">Elecciones Argentina - Tiempo Real</a>

Ya en Argentina como parte de mi fellowship en [La Nación][lanacion] he colaborado en el seguimiento de las elecciones 2015. Tanto en la visualización de resultados en tiempo real como a posteriori con mayor grado de detalle.

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.lanacion.com.ar/1846694-elecciones-2015-mapa-de-resultados-del-ballottage-por-provincia-municipio-y-comuna">
    <img alt="Elecciones CABA 2015" class="img_60" data-src="images/proj_arg_live.jpg"></img>
</a>

[lanacion]: http://www.lanacion.com.ar/

[vertical-sep]

### <a target="_blank" href="http://www.lanacion.com.ar/1848689-como-fue-el-resultado-del-ballottage-en-la-escuela-donde-votaste">Resultados por establecimiento</a>

Otro proyecto como Fellow en [La Nación][lanacion] fue visualizar los resultados de las elecciones al mayor nivel de detalle. Pudiendo el lector customizar el área sobre el que quiere obtener resultados a través del plugin [leaflet-draw](https://github.com/Leaflet/Leaflet.draw).

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.lanacion.com.ar/1848689-como-fue-el-resultado-del-ballottage-en-la-escuela-donde-votaste">
    <img alt="2015 PASO Argentina" class="img_60" data-src="images/proj_arg_detailed.jpg"></img>
</a>

[lanacion]: http://www.lanacion.com.ar/

[slide-sep]

## ¿Vamos a aprender klingon?

<iframe class="stretch" data-src="https://www.youtube.com/embed/3g_97I3AGtI" frameborder="0" allowfullscreen></iframe>

[vertical-sep]

## No, no vamos a aprender Klingon

El objetivo de este taller es que al final de la sesión esto:

```
por hechos? cometidos?\s*el\s*(?:\d+ de\s+[^ ]+\s+(?:de\s+)?(\d{4}))

\s*(?:El|La)\s*Ministr[oa] (?:.*?)[,\.]\s*(.*)\s*$
minister = $1
```

#### ¡¡No os parezca Klingon!!