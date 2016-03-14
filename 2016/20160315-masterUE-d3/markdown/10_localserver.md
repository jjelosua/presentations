## Python local webserver

[vertical-sep]

## Python test

* First you need [python](https://www.python.org/downloads/) installed on your computer
    * OSX, UNIX, Linux comes already with python installed

* Open a terminal and type
    
    ```
    $ python
    ```

![Python console][python] <!-- .element: class="img_60" -->

[python]: images/localserver_01_python.jpg

[vertical-sep]

## Python webserver

* To run a local webserver on your machine you just need to go ot the folder you want to serve, open a terminal and type

    ```
    $ python -m SimpleHTTPServer
    ```

![Python SimpleHTTPServer][server] <!-- .element: class="img_60" -->

[server]: images/localserver_02_server.jpg

[vertical-sep]

## Python webserver in browser

* Open a browser and head to localhost:8000 you should see an image like this one

![local server in browser][browser] <!-- .element: class="img_60" -->

[browser]: images/localserver_03_browser.jpg