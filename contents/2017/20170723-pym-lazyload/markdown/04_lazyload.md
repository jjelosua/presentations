# New Lazyload approach breakdown

[vertical-sep]

## Components to make it happen

* [Pym.js v1.3.0](https://github.com/nprapps/pym.js/blob/master/src/pym.js)
* [npr-pym-loader](https://github.com/nprapps/npr-pym-loader/blob/master/src/npr-pym-loader.js)
* [pymchild-scroll-visibility](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js)

Let's go through those components in more detail.

[vertical-sep]

## Pym.js v1.3.0 (1/4)

* Add an optional [listener](https://github.com/nprapps/pym.js/blob/master/src/pym.js#L440-L442) to the scroll.

![Listener][lazyload01] <!-- .element: class="img_100" -->

[lazyload01]: images/lazyload01.png

[vertical-sep]

## Pym.js v1.3.0 (2/4)

* Add throttle functionality [throttle](https://github.com/nprapps/pym.js/blob/master/src/pym.js#L110-L162).

![Throttle][lazyload02] <!-- .element: class="img_60" -->

[lazyload02]: images/lazyload02.png

[vertical-sep]

## Pym.js v1.3.0 (3/4)

* `viewport-iframe-position` [message](https://github.com/nprapps/pym.js/blob/master/src/pym.js#L653-L673).

![message][lazyload03] <!-- .element: class="img_100" -->

[lazyload03]: images/lazyload03.png

[vertical-sep]

## Pym.js v1.3.0 (4/4)

* `resize` needs to update [the parent information](https://github.com/nprapps/pym.js/blob/master/src/pym.js#L452-L457) too.

![resize][lazyload04] <!-- .element: class="img_100" -->

[lazyload04]: images/lazyload04.png

[vertical-sep]

## `npr-pym-loader` (1/2)

* We use a special loader in order to accomodate the needs for NPR.org and the needs for member stations in a single universal loader. For example:
    * We add carebot to the mix if we are on NPR.org but ignore it on member stations.

[vertical-sep]

## `npr-pym-loader` (2/2)

* We need to parse [data-attributes](https://github.com/nprapps/npr-pym-loader/blob/master/src/npr-pym-loader.js#L70-L84) to opt-in scroll tracking on Pym.js.

![data-attributes][lazyload05] <!-- .element: class="img_100" -->

[lazyload05]: images/lazyload05.png

[vertical-sep]

## [pymchild-scroll-visibility](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js)

* We created a small library to be included on the child page that handles the calculations of visibility of a particular element once we have all the needed information.

* Optionally we can provide a callback also for when an element is visible for more than a customizable amount of time (_read simulation_).

[vertical-sep]

## [pymchild-scroll-visibility](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js)

* [CheckIfVisible](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js#L119-L136): Parse message, check visibility and invoke callbacks.

![check-visible][lazyload06] <!-- .element: class="img_100" -->

[lazyload06]: images/lazyload06.png

[vertical-sep]

## [pymchild-scroll-visibility](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js)

* Math [calculations](https://github.com/nprapps/pymchild-scroll-visibility/blob/master/src/pymchild-scroll-visibility.js#L86-L117) for partial and full visibility of an element.

![calculations][lazyload07] <!-- .element: class="img_60" -->

[lazyload07]: images/lazyload07.png
