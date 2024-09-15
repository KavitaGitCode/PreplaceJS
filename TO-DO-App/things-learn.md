Regarding why we choose insertAdjacentHTML instead of appendChild:

Performance: insertAdjacentHTML is generally faster than creating a container element, setting its innerHTML, and then appending its child. It directly parses( process of analyzing ) the HTML string and inserts it into the DOM.

Convenience: insertAdjacentHTML allows you to specify where the HTML should be inserted relative to the element (beforebegin, afterbegin, beforeend, or afterend). This provides more flexibility than appendChild, which only appends the HTML as the last child of the element.

Simplicity: Using insertAdjacentHTML often results in cleaner and more concise code, especially when you're dealing with HTML strings generated dynamically.

# local storage
The browser local storage, is a Web Storage API that allows us to store data for a domain across browser sessions.

local storage works with string values, we can stringify the objects and arrays ourselves, in such a way that the contents of the value are not lost. We do this using JSON.stringify() method.