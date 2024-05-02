https://www.youtube.com/watch?v=dxADq_DlS-w

offsetLeft :
 offsetLeft gives you the distance between the left edge of the element and the left edge of its nearest positioned ancestor(its parent) (or the document if there's no positioned ancestor), in pixels.

 +-------------------+
|        Parent     |
| +---------------+ |
| |    Element    | | <- offsetLeft measures this distance
| |               | |
| +---------------+ |
+-------------------+

Keep in mind that offsetLeft returns an integer value representing the number of pixels, and it's relative to the element's offset parent, not to the browser window. If you want the position relative to the window, you may need to consider other properties like getBoundingClientRect().

clientX and clientY:
    Represents the coordinate of the mouse pointer relative to the viewport or the visible portion of the browser window.  NOT including any scrolling.

PageX and PageY:
    Represents the coordinate of the mouse pointer relative to the entire document.  including any scrolling. 

screenX  
    It provides the coordinate relative to the user's screen or display device.

Coordinate Properties
Property	            Relative to
The screenX Property	The Screen area
The screenY Property	The Screen area
The clientX Property	The Window area
The clientY Property	The Window area
The pageX Property	The Page (Document)
The pageY Property	The Page (Document)
The offsetX Property	The target Element
The offsetY Property	The target Element

 Viewport: Represents the visible portion of the browser window.
Document: Represents the entire webpage, including content that may be outside the viewport.
Screen: Represents the user's display device (monitor or screen).   