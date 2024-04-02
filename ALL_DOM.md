## Prototype under the hood behaviour

// str (under the hood yeh bhi object h in js Engine (eg-> str.length)) -> Object -> null

// arr -> Object -> null

// boolean -> Object -> null
// any datatype -> Object -> null

## innerText and textContent and innerHTML

innerText and textContent : Not support HTML tags + its support text
innerHTML : support HTML tags

if you style Element with display :none
inner Text will give you only the value not the disply none element value
the display none value will be and the parent element text given by textContent

NodeList and HTMLCollection
NodeList (querySelectorAll, querySelector) : is not array...but you can use forEach on it ...but not map method
HTMLCollection (getElementsByClassName, getElementById): You have to convert it into array ? hOw? Array.from(yourHTMLCollection)

A nodelist is a collection of document nodes which includes text nodes , attribute nodes and element nodes. And only the first line break is also counted in nodelist but only first one. All subsequent line breaks are ignored by browser. they are represented as textNode in nodelist

````javascript
<ul class="list">
        <li class="myList">One </li>
        <li class="myList">Two </li>
        <li class="myList">Three</li>
        <li class="myList">Four </li>
        <li class="myList">Five</li>
    </ul>

        const list = document.querySelector('.list');
        const li = list.querySelectorAll('.myList'); //nodeList..Array Like Property
        console.log(li);
       /*  li.forEach((item) => {
            item.style.color = "blue";
        });  */

        const liHTML = list.getElementsByClassName('myList'); //HTMLCollectionList...Array Like Property
        const convertIntoArray = Array.from(liHTML);
        console.log(convertIntoArray);
        convertIntoArray.forEach(function(item){
            item.style.color = "red"
        })

        ```
````
