## Abril 2015

[vertical-sep]

Recibimos los datos de prueba el viernes 24 de Abril, dos días antes de las elecciones debido a un cambio de proveedor de la información.

![Pánico][panico_img] <!-- .element: class="img_80" -->

[panico_img]: images/panico.jpg

[vertical-sep]

#### Elecciones PASO CABA <br> Tiempo Real

[![Mapa tiempo real PASO CABA][paso_caba_img] <!-- .element: class="img_70" -->][paso_caba_url]
<!-- .element: target="_blank" -->

[paso_caba_url]: https://especiales.lanacion.com.ar/multimedia/proyectos/15/elecciones/elecciones_2015_caba/build/index.html
[paso_caba_img]: images/20150426_PASO_CABA.jpg


[vertical-sep]

#### Elecciones PASO CABA <br> Escuela por escuela

![Mapa resultados por escuela PASO CABA][paso_caba_poll_img] <!-- .element: class="img_70" -->

[paso_caba_poll_img]: images/20150426_PASO_CABA_POLLING.jpg

Basado en un trabajo previo de [Manuel Aristarán][manuel]<!-- .element: target="_blank" -->

<!-- .element: class="sm_note" -->

[manuel]:https://blog.jazzido.com/

[slide-sep]

### Lecciones Aprendidas

* Montar tu propio simulador de datos para poder realizar pruebas bajo ciertas condiciones.

* Mejorar la visualización cuando hay un único ganador.

* Resultados por escuela:

    * Bajar los resultados electorales a un ámbito hiperlocal suele tener éxito ya que los lectores sienten curiosidad por saber que ocurrió en su escuela de voto.

    * La interactividad y definición visual estaba un poco restringida debido al uso de tiles de CartoDB...implementar con [D3][d3]<!-- .element: target="_blank" -->.

[d3]: http://d3js.org/