# Examples

[vertical-sep]

## Example 01 -  Challenge:

### Transform a csv file into JSON</br> to be used in a Web App

[vertical-sep]

## Solution (1)

Use csvjson - part of [csvkit](https://csvkit.readthedocs.io/)

For tasks related with csv wrangling, *[csvkit](https://csvkit.readthedocs.io/en/0.9.1/index.html)* is a great tool to have in your toolbox. Created by [@onyxfish](https://twitter.com/onyxfish)

Bundled with many other interesting tools that _you definitely should check out_ comes csvjson, a command line tool that does exactly what our proposed challenge needs.

By default it will output the json file as a list, one element for each row in the CSV.

    $ csvjson example.csv > example.json

[vertical-sep]

## Solution (2)

**CSV file**

![CSV file][csvjson1] <!-- .element: class="img_80" -->

[csvjson1]: images/examples01.jpg

[vertical-sep]

## Solution (3)

**JSON file**

![JSON file][csvjson2] <!-- .element: class="img_80" -->

[csvjson2]: images/examples02.jpg

[vertical-sep]

## Example 02 -  Tool:

### AppleScript to launch project setup

[vertical-sep]

## Description

* Using iterm2 AppleScripts can help you get up and running on a project quickly

* We use it on NPR to fire up our [dailygraphics](https://github.com/nprapps/dailygraphics#terminal-shortcut) rig

    * Create a three paned terminal window
        1. For the dailygraphics machine
        2. For a local webserver
        3. For the separate graphics repo

* You can also add it as an alias to `.bash_profile`

    alias dailygraphics="osascript ~/PATH/SCRIPT.scpt"

[vertical-sep]

**[Sample script](https://gist.github.com/jjelosua/53b416bd6655605846264eb9378e9c0e)**

![Script code][applescript1] <!-- .element: class="img_80" -->

[applescript1]: images/examples03.jpg

[vertical-sep]

**Script execution**

![Script execution][applescript2] <!-- .element: class="img_80" -->

[applescript2]: images/examples04.jpg

For tasks related with csv wrangling, *[csvkit](https://csvkit.readthedocs.io/en/0.9.1/index.html)* is a great tool to have in your toolbox. Created by [@onyxfish](https://twitter.com/onyxfish)

Bundled with many other interesting tools that _you definitely should check out_ comes csvjson a command line tool that does exactly what our proposed challenge needs.

By default it will output the json file as a list an element for each row in the CSV.

    $ csvjson example.csv > example.json
