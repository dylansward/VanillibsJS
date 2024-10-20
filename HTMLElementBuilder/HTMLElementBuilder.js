/**
 * @fileoverview Defines the HTMLElementBuilder class, a wrapper for HTMLElement that allows HTMLElement's methods to be called from the returns of one another. This grants users the ability to create a chain of method calls that can build a complex HTMLElement in a single statement.
 * @author Dylan Sward
 * @version 1.0.0
 * @license MIT-0
 */



/**
 * A wrapper for HTMLElement that allows the class's methods to be called from one another.
 * @class
 */
export default class HTMLElementBuilder {
    /**
     * @type {HTMLElement}
     * @private
     * */
    #el;

    /**
     * Creates an object of HTMLElementBuilder, which wraps HTMLElement to allow for chaining of its methods. This allows complex HTMLElements to be created and used as a value all within one statement.
     * @constructor HTMLElementBuilder
     * @param {HTMLElement | string} el  Either a newly-created HTMLElement created with document.createElement(), or the name of the desired tag as a string
     */
    constructor(el) {
        if(typeof(el) === "string") this.#el = document.createElement(el);
        else this.#el = el;
    }


    /**
     * A function used to get the element stored in HTMLElementBuilder. It is meant to be the final method call in the chain.
     * @returns {HTMLElement}   The internally stored HTMLElement
     */
    ReturnElement() {
        return this.#el;
    }

    /**
     * A function that allows actions not natively supported by HTMLElementBuilder to be performed on the internally stored HTMLElement element.
     * @param {(element: HTMLElement) => any} func      The function to be run using the element. The parameter passed to the function is the HTMLElement
     * @param {Object | undefined} ref                  An object that will store the return value of func. Any return value will be ignored without this
     * @param {string | undefined} property             The property of ref that will store the return value. Any return value will be ignored without this
     * @returns {HTMLElementBuilder}                    A reference of this object from which more method calls can be chained
     */
    RunFunctionOnElement(func, ref, property) {
        if(ref == undefined || property == undefined) func(this.#el);
        else ref[property] = func(this.#el);
        return this;
    }
    
    /**
     * A function that allows modifying of element properties that HTMLElementBuilder does not natively modify.
     * @param {string} property         The element's property being modified
     * @param {any} value               The value that the element's property is being set to
     * @returns {HTMLElementBuilder}    A reference of this object from which more method calls can be chained
     */
    SetElementProperty(property, value) {
        this.#el[property] = value;
        return this;
    }

    /**
     * A function that sets the element's innerHTML property to the value passed as an argument.
     * @param {string} value            The value getting assigned to the element's innerHTML property
     * @returns {HTMLElementBuilder}    A reference of this object from which more method calls can be chained
     */
    Set_innerHTML(value) {
        this.#el.innerHTML = value;
        return this;
    }

    /**
     * A wrapper for the setAttribute() method of HTML elements that allows for chaining method calls.
     * @param {string} qualifiedName    Name of the element's attribute
     * @param {string} value            Value being passed into the element's attribute
     * @returns {HTMLElementBuilder}    A reference of this object from which more method calls can be chained
     */
    setAttribute(qualifiedName, value) {
        this.#el.setAttribute(qualifiedName, value);
        return this;
    }

    /**
     * A wrapper for the addEventListener() method of HTML elements that allows for chaining method calls.
     * @param {any} type                                        The event type that the listener is being added to
     * @param {(this: HTMLElement, ev: any) => any} listener    A function that executes when a certain event fires. To access the HTMLElement using the this-keyword, use ES5 anonymous functions
     * @returns {HTMLElementBuilder}                            A reference of this object from which more method calls can be chained
     */
    addEventListener(type, listener) {
        this.#el.addEventListener(type, listener);
        return this;
    }

    /**
     * A wrapper for the appendChild() method of HTML elements that allows for chaining method calls.
     * @param {any} node                The node that you want to append to the HTMLElement
     * @returns {HTMLElementBuilder}    A reference of this object from which more method calls can be chained
     */
    appendChild(node) {
        this.#el.appendChild(node);
        return this;
    }
}