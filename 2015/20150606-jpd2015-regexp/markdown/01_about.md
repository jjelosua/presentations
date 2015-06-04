# Expresiones regulares
### Magia negra a tu servicio..._sh{2,}_

_[Juan Elosua][blog]_ 

[blog]: http://www.juanelosua.com

[slide-sep]

## ¿Quién soy?

### [Juan Elosua Tomé][blog] ([@jjelosua][twitter])

Ingeniero de Telecomunicaciones que trabaja como desarrollador con experiencia en análisis y visualizaciones de datos. [2015 Knight-Mozilla Fellow][fellow] en [La Nación Data][lndata]

Algunos proyectos en los que he colaborado:
* <a target="_blank" href="http://www.espanaenllamas.es">España en Llamas</a>
* <a target="_blank" href="http://www.elindultometro.es">El indultometro</a>
* <a target="_blank" href="http://dondevanmisimpuestos/ccaa">Donde van mis impuestos - CCAAs</a>
* <a target="_blank" href="http://www.lanacion.com.ar/1788681-como-fueron-los-resultados-de-las-paso-en-la-escuela-donde-votaste">Elecciones PASO Buenos Aires 2015</a>

[blog]: http://www.juanelosua.com
[twitter]: https://twitter.com/jjelosua
[fellow]: http://opennews.org/what/fellowships/2015meet
[lndata]: http://www.lanacion.com.ar/data

[vertical-sep]

### <a target="_blank" href="http://www.espanaenllamas.es">España en Llamas</a>

Este fue mi primer proyecto de periodismo de datos. Tras un periplo por las administraciones públicas con peticiones de información junto a [civio][civio] intentamos dar contexto y concienciar sobre el problema de los incendios forestales en España

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.espanaenllamas.es">
    <img alt="España en llamas" class="img_60" data-src="images/eel.jpg"></img>
</a>

[civio]: http://civio.es

[vertical-sep]

### <a target="_blank" href="http://www.elindultometro.es">El indultometro</a>

En [civio][civio] hemos recopilado, desgranado y clasificado toda la información contenida en el BOE sobre los indultos concedidos en España desde 1996. Busca por tipo de delito, compara datos anuales y valora el uso que cada gobierno ha hecho de ellos

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.elindultometro.es">
    <img alt="El Indultometro" class="img_60" data-src="images/EI.jpg"></img>
</a>

[civio]: http://civio.es

[vertical-sep]

### <a target="_blank" href="http://dondevanmisimpuestos.es/ccaa">Donde van mis impuestos - CCAAs</a>

De nuevo colaborando con [civio][civio] hemos integrado una comparativa regional de los presupuestos donde se puede ver en qué area funcional gasta más cada C.C.A.A. Se puede observar tanto el gasto presupuestado total, como el presupuesto por habitante.

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://dondevanmisimpuestos/ccaa">
    <img alt="Donde van mis impuestos" class="img_60" data-src="images/DVMI.jpg"></img>
</a>

[civio]: http://civio.es

[vertical-sep]

### <a target="_blank" href="http://www.lanacion.com.ar/1788681-como-fueron-los-resultados-de-las-paso-en-la-escuela-donde-votaste">Elecciones PASO Buenos Aires 2015</a>

Ya en Argentina como parte de mi fellowship en [La Nación][lanacion] he colaborado en el seguimiento de las PASO 2015 para la ciudad de Buenos Aires. Desglosando los resultados por establecimiento de voto.

<!-- .element: class="proj_desc"-->

<a target="_blank" href="http://www.lanacion.com.ar/1788681-como-fueron-los-resultados-de-las-paso-en-la-escuela-donde-votaste">
    <img alt="2015 PASO Buenos Aires" class="img_60" data-src="images/paso.jpg"></img>
</a>

[lanacion]: http://www.lanacion.com.ar/

[slide-sep]

## ¿Vamos a aprender klingon?

<iframe class="stretch" data-src="https://www.youtube.com/embed/3g_97I3AGtI" frameborder="0" allowfullscreen></iframe>

[slide-sep]

## No, no vamos a aprender Klingon

El objetivo de este taller es que al final de la sesión esto:

```
por hechos? cometidos?\s*el\s*(?:\d+ de\s+[^ ]+\s+(?:de\s+)?(\d{4}))

\s*(?:El|La)\s*Ministr[oa] (?:.*?)[,\.]\s*(.*)\s*$
minister = $1
```

#### ¡¡No os parezca Klingon!!