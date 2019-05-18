# Functional Web Components

FWC (Functional Web Components) is a tiny library based on Lit-Html that allows lightweight Custom Elements using function definitions.

## Examples
### Hello World
<img src="https://raw.githubusercontent.com/jamesbmadden/fwc/master/img/hello-world-0.1.png">
<i>Note: In the future, Lit-Html will most likely be exported from the fwc package, but for now, you must import it from the lit-html package.</i>

The Component constructor takes an element tag (in this example, 'hello-world'), and a function for rendering. The rending function MUST use an object deconstructor assignment, but in the future there will be another way to define observed properties for better support in older browsers.

## Limitations

The current version, 0.1.x, has many limitations, including the lack of event handlers, lack of ability to support older browsers, and inability to add functions or properties to the element, other than with the object deconstructor assignment.

These issues will be resolved in future releases of the library.