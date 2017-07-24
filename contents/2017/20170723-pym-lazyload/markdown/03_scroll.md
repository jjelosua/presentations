# Scroll tracking

### A world of possibilities.

[vertical-sep]

## Use case: Annotation rig

In our annotation rig, we needed a way to determine if an annotation was on the reader's viewport to use the cool automatic expand animation.

![Animation][scroll01] <!-- .element: class="img_60" -->

[scroll01]: images/scroll01.gif

[vertical-sep]

## Old solution

Since we had Pym.js we decided to use its [custom iframes events](http://blog.apps.npr.org/pym.js/#custom-events) in order to make that happen.

It works, and pretty well we can say, but there's a couple of caveats:

* There's a ton of messaging between parent & child.
* Coupling between the scroll tracker itself and Pym.js.
* One listener for each instance of the tracker.

Let's see that in more detail.

[vertical-sep]

## Caveat: Messaging

* A tracker listens to a scroll change:
    1. It sends a request to the child to get the element relative position in the iFrame.
    2. The child returns the BoundingRect back to the tracker through a custom message.
    3. The tracker calculates if it is visible or not based on that information.
    4. If it is visible it sends another custom event to the child to indicate that the element with id=example (the one this instance of the tracker was tracking is visible)
    5. The child acts accordingly (animates the element? Lazyloads assets, etc.)

[vertical-sep]

## Caveat: Coupling

* Since the tracker library needs to communicate with the child it needs a reference to the pym parent to be able to communicate.

* This generates complexity since we can't load the tracker and pym separately
* Gets worse when there's multiple embeds on the same page and some require scroll tracking and some don't
* Add to the mix the need to support different CMS in member stations.

[vertical-sep]

## Caveat: Listeners

* Each instance of the scroll tracker needs a scroll event listener.
* We needed multiple instances of the tracker since each one of them tracked a different element on the child and had a timer to determine if it was read or not.
* Performance could be affected if we track many different elements (have a lot of annotations).

[vertical-sep]

## New solution

* While creating the new set of loaders to allow universal rendering in NPR and member stations I was giving some thought to how could we improve our scroll tracking approach.

* The issue we faced, not being able to access the parent needed information, had to be circumverted somehow but WHAT IF we turned the tables.

* Instead of sending information from the child to the parent and making the calculation there, we could reverse the process.

[vertical-sep]

## Advantages of the new approach (1/2)

* We can add the scroll tracking natively as an option to Pym.js, that will cover more use cases than lazyloading:
    * Analytics events on child element visibility.
    * Geoip calls only when element is visible on the page.

* So these potentially costly services can be called when they are actually needed instead of on the child loading process.

[vertical-sep]

## Advantages of the new approach (2/2)

* We only need one listener on the parent instead of one for each desired child element.

* We send only one message from the parent to the child and then make the calculations on the sandboxed child, this woulb free as for potential conflicts with other elements that we do not control on the parent page.

[vertical-sep]

## Basic scroll tracking example

Check out the basic scroll tracking example included on Pym.js docs

<a target="_blank" href="http://blog.apps.npr.org/pym.js/examples/trackscroll/">
    <img alt="Track Scroll Pym Example" class="img_80" data-src="images/scroll02.png"></img>
</a>
