## What is this?
In JavaScript, the "this" keyword refers to an object.

## Which object depends on how "this" is being invoked (used or called).

## The "this" keyword refers to different objects depending on how it is used:

## In an object method, "this" refers to the object.
## Alone, "this" refers to the global object (in browser window).
## In a function, "this" refers to the global object.
## In a function, in strict mode, "this" is undefined.
## In an event, "this" refers to the element that received the event.
## Methods like call(), apply(), and bind() can refer "this" to the refernce object.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.