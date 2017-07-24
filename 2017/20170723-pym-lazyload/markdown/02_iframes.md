# Come on!! It's 2017: Why IFrames?

[vertical-sep]

## Serving Multiple CMS environments

* Our embeds are used not only in NPR.org but also on various member stations.
* IFrames provide a sandboxed environment that allows us to isolate from where the project it is embedded in.
* That way we do not have to deal with conflicts on css naming, javascript library versions, etc.

[vertical-sep]

## Isolation comes with a price

* For security reasons browsers do not allow an IFramed page (let's call this the child page) to get information from the parent window.
    * This is true if the iframed content and parent content do not live under the same domain.
    * We (Visuals) normally use `https://apps.npr.org` for our content but we are embedded into `http://www.npr.org` ...so no luck there.
    * Even the https vs http or the app port will count as a different domain for a browser.
* Bummer!!
* But...wait for it!!! Here comes [Pym.js](http://blog.apps.npr.org/pym.js/)

[vertical-sep]

## Pym.js to the rescue

* Pym is a javascript library that is included in both pages: parent & child.
    * Once we do that, parent and child can communicate with each other using [postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).
    * Pym.js was designed to help iFrames resize responsively according to resize changes on the parent.
        1. Parent sends its width to the child after resize.
        2. Child re-renders itself and calculates its new height.
        3. Child sends a message to the parent with the new height.
        4. Parent updates the height of the IFrame to fit all the child's content.

[vertical-sep]

## Pym.js resizing example

Check out this [example](http://blog.apps.npr.org/pym.js/examples/graphic/) of a responsive graphic.

<a target="_blank" href="http://blog.apps.npr.org/pym.js/examples/graphic/">
    <img alt="Graphic Pym Example" class="img_60" data-src="images/iframes01.png"></img>
</a>

[vertical-sep]

## Phew!!! we got away with that.

* But responsiveness is not the only problem when you are a poor child that has not access to its parents. &#x1F622;

* You do not have access for example to the viewport size nor to the position of the iFrame in the parent page during a scroll event.

* On the next section we'll introduce the change added in [Pym v1.3.0](http://blog.apps.npr.org/pym.js/#optional-scroll-tracking) that allows that information to be sent to the child.

