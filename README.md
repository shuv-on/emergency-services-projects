1) i) getElementById: Select one element by its unique id. ii) getElementsByClassName: Selects all elemnets with same class name. iii) querySelector/querySelectorAll: Selects all elements matching the CSS selector.
2) i) Create element → document.createElement()
   ii) Set attributes/content → textContent, innerHTML
   iii) Insert into DOM → appendChild, append
3) Event bubbling in JS is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM.
4) Event delegation: Instead of adding event listeners to many child elements, add one listener to the parent and use event.target to detect which child was clicked.
    Useful for: i) Save memory and code.
                ii) dynamically created elements
5)i) event.preventDefault() :  stops the default browser behavior.
  ii) stopPropagation(): block event bubbling to parents. 
