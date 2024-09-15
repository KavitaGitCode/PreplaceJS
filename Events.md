 READ all this
 // type, timestamp, defaultPrevented
    // target, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode
   // mouseenter,mouseleave,mouseout,mouseover,dragenter,dragleave
   
    Propagation means bubbling up to parent elements or capturing down to child elements.
    event propogation: is related with  event bubbling up and event capturing
    event bubbling: from child to parent
    event capturing: from parent to child
    the default is event bubbling which is false; and true for event capturing
    eg;
````javascript
    document.getElementById('ID').addEventListener("click", function(e){
        alert('test')
         e.stopPropogation(); //it will stop bubbling up your event..and it won't go the parent element...it will stays with your clicked eleemnt 
    }, false) ...this is event bubbling

     document.getElementById('ID').addEventListener("click", function(e){
        alert('test')
       
    }, true) ...this is event capturing ...trigger from parent element
````

    e.preventDefault(); //stop default action especially if you mention any link on href or form submit stop its default actions
