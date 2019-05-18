# Functional Web Components

FWC (Functional Web Components) is a tiny library based on Lit-Html that allows lightweight Custom Elements using function definitions.

## Examples
### Hello World
<img src="https://raw.githubusercontent.com/jamesbmadden/fwc/master/img/hello-world-0.3.png">
The Component constructor takes an element tag (in this example, 'hello-world'), and a function for rendering. The rending function MUST use an object deconstructor assignment, but in the future there will be another way to define observed properties for better support in older browsers.

### Counter
<img src="https://raw.githubusercontent.com/jamesbmadden/fwc/master/img/counter-example-0.3.png">
The Counter Component shows how to use lit-html's event listeners to change the component's properties. Simply take the component instance as a second argument in the render function. Each property has the same name as in the deconstructing assignment.

## Limitations

The current version, 0.2.x, has many limitations, lack of ability to support older browsers, and inability to add functions or properties to the element, other than with the object deconstructor assignment.

These issues will be resolved in future releases of the library.
Current versions are mostly focused on testing and building a solid foundation before expanding to more features.