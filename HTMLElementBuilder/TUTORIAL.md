# HTMLElementBuilder  
HTMLElementBuilder is a library that defines the `HTMLElementBuilder` class, which is designed to be a wrapper for `HTMLElement` that allows `HTMLElement`'s methods to be called from the returns of one another. This grants users the ability to create a chain of method calls that can build a complex `HTMLElement` in a single statement.  

This tutorial is for the latest updated version of this library, which is 1.0.0  

## [`HTMLElementBuilder.js`](https://github.com/dylansward/VanillibsJS/blob/main/HTMLElementBuilder/HTMLElementBuilder.js)  
`HTMLElementBuilder.js` is the only file of HTMLElementBuilder. It is an ES6 module, and should be imported into other JS files.  

### Global Variables and Constants  
`HTMLElementBuilder.js` does not define any global variables or constants.  

### Functions  
`HTMLElementBuilder.js` does not define any functions.  

### Classes  
`HTMLElementBuilder.js` defines the following class:  

- `HTMLElementBuilder`: A wrapper for `HTMLElement` that allows the class's methods to be called from one another. This is the default export for the file.  

    - Instance Fields  

        - `#el`: A private field that stores the `HTMLElement` being built by the object.  

    - Instance Methods  

        - `constructor(HTMLElement | string)`: Creates an object of `HTMLElementBuilder`. This constructor takes in one parameter, either an HTMLElement or the tag (stored in a string) of one.  
            ``` javascript
            // This code creates two HTMLElementBuilder objects, both of which building an HTMLParagraphElement
            let builderFromElement = new HTMLElementBuilder(document.createElement("p"));
            let builderFromTag = new HTMLElementBuilder("p");
            ```

        - `ReturnElement() => HTMLElement`: Returns the `HTMLElement` privately stored within `#el`.  
            ``` javascript
            // This code appends two HTMLParagraphElements as children of the body element.
            const builder = new HTMLElementBuilder("p");
            document.querySelector("body").appendChild(builder.ReturnElement());

            document.querySelector("body").appendChild(new HTMLElementBuilder("p").ReturnElement());
            ```

        - `RunFunctionOnElement( (HTMLElement) => any, Object|undefined, string|undefined ) => HTMLElementBuilder`: Runs the function passed in the first parameter, allowing users to perform their own actions on the element that are not natively supported by `HTMLElementBuilder`. If the function returns anything, it can be stored by passing in an object and string as the second and third arguments, respectively. This will then store the return value in a property of the object whose name that can be indexed via the string.  
            ``` javascript
            let returnContainer = {};
            const builder = new HTMLElementBuilder("p").RunFunctionOnElement((element) => {
                // #el will be passed to element as the argument, allowing this function to have direct access to the element.
                return element.outerHTML;
            }, returnContainer, "returnProperty");
            console.log(returnContainer["returnProperty"]) // output: <p></p>
            ```

        - `SetElementProperty(string, any) => HTMLElementBuilder`: Changes the `HTMLElement`'s property, determined by the first argument, to the value of the second argument.  
            ``` javascript
            // Creates a builder for a disabled button.
            const builder = new HTMLElementBuilder("button").SetElementProperty("disabled", true);
            ```
        
        - `Set_innerHTML(string) => HTMLElementBuilder`: Changes the `HTMLElement`'s `innerHTML` property to the value passed as an argument.  
            ``` javascript
            // Creates an HTMLParagraphElement with the text: "This is a paragraph"
            const builder = new HTMLElementBuilder("button").Set_innerHTML("This is a paragraph");
            ```
        
        - `setAttribute(string, string) => HTMLElementBuilder`: Sets the `HTMLElement`'s attribute, determined by the first parameter, to the second argument.  
            ``` javascript
            // Creates a button element that is focused by default.
            document.querySelector("body").appendChild(new HTMLElementBuilder("button")
                .setAttribute("autofocus", "true")
                .ReturnElement());
            ```
        
        - `addEventListener(any, (any) => any) => HTMLElementBuilder`: Adds an event listener to the `HTMLElement` for the event specified by the first parameter.  
            ``` javascript
            document.querySelector("body").appendChild(new HTMLElementBuilder("p")
                .Set_innerHTML("Click me! ")
                .addEventListener("click", function () {
                    // Pre-ES6 anonymous functions are recommended for this, as they absorb the scope of whatever object they are being called from. As a result, the this-keyword is a reference to the HTMLElement.
                    this.innerHTML += "Click me! ";
                })
                .ReturnElement());
            ```
        
        - `appendChild(any) => HTMLElementBuilder`: Appends a child node to the `HTMLElement`.  
            ``` javascript
            // Creates an h1 element that contains its own italicized element as a child.
            document.querySelector("body").appendChild( new HTMLElementBuilder(document.createElement("h1"))
                .Set_innerHTML("Example Page for ")
                .appendChild( new HTMLElementBuilder("i")
                    .Set_innerHTML("HTMLElementBuilder.js")
                    .ReturnElement())
                .ReturnElement());
            // See the page for "./Examples/ex1.html" in order to visualize how this works.
            ```