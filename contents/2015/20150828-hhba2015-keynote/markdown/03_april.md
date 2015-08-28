## Abril 2015

[vertical-sep]

Recibimos los datos de prueba el viernes 24 de Abril, dos días antes de las elecciones debido a un cambio de proveedor de la información.

![Pánico][panico_img] <!-- .element: class="img_80" -->

[panico_img]: images/panico.jpg

[vertical-sep]

#### Elecciones PASO CABA <br> Tiempo Real

<a target="_blank" href="http://www.lanacion.com.ar/1787651-elecciones-2015-resultados-de-las-paso-portenas-en-un-mapa-interactivo">
    <img alt="Mapa tiempo real PASO CABA" class="img_70" data-src="images/20150426_PASO_CABA.jpg"></img>
</a>

[vertical-sep]

#### Elecciones PASO CABA <br> Escuela por escuela

<a target="_blank" href="http://www.lanacion.com.ar/1788681-como-fueron-los-resultados-de-las-paso-en-la-escuela-donde-votaste">
    <img alt="Mapa resultados por escuela PASO CABA" class="img_60" data-src="images/20150426_PASO_CABA_POLLING.jpg"></img>
</a>

Basado en un trabajo previo de <!-- .element: class="sm_note" -->[Manuel Aristarán](https://twitter.com/manuelaristaran)

[slide-sep]

### Lecciones Aprendidas

* Montar tu propio simulador de datos para poder realizar pruebas bajo ciertas condiciones.

* Mejorar la visualización cuando hay un único ganador.

* Resultados por escuela:

    * Bajar los resultados electorales a un ámbito hiperlocal suele tener éxito ya que los lectores sienten curiosidad por saber que ocurrió en su escuela de voto.

    * La interactividad y definición visual estaba un poco restringida debido al uso de tiles de CartoDB...implementar con [D3](http://d3js.org/).