/* import fetch from 'cross-fetch'; */
// What is Promise?
/* Promises are a built-in feature introduced in ECMAScript 2015 (ES6) that represent the eventual completion (or failure) of an asynchronous operation. They provide a way to write cleaner, more readable, and maintainable asynchronous code by simplifying the handling of asynchronous operations and their results. */

//HOw to produce Promise
//Example 1.
let promiseOne = new Promise((resolve, reject) => {
    //Do async call
    // DB calls, cryptography, network, fetching data from server

    let msg = "Good Morning";
    let isLogin = false
    let user = {
        userName: "Kavita"
    }
    setTimeout(() => {
        if (isLogin) {
            resolve(msg);
        } else {
            reject(`${user.userName} is ${ isLogin ? "Online" : "Offline"}`)
        }

    }, 3000)
});

//consume promise with then and catch
/* promiseOne.then((response) => {
    console.log(response)
}).catch((error) => {
    console.error(error);
}).finally(() => console.log("The promise is either resolved or rejected")) */

//consume promise with async and await
async function consumePromWithAsync() {
    try {
        const response = await promiseOne //don't innovke promiseOne() as its promise object not function
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}
consumePromWithAsync();

//direct call promise //Example 2.
function anotherExample(){
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('i am direct example with out save in variable');
            resolve({
                name: "React",
                version: 19,
                founder: "faceBook"
            });
        }, 2000)
    }).then((resp) => {
        console.log(resp)
    })
}
anotherExample();


//Asyn example
async function showUserInfo() {
    let reqUrl = await fetch('https://jsonplaceholder.typicode.com/users');
    let response = await reqUrl.json();
    /*  console.log(response);  */
    document.querySelector("#table-container").insertAdjacentElement("beforeend", createUserTableData(response))
}

function createUserTableData(arr) {
    //console.log(arr);
    let createTable = document.createElement('table');
    let createTblBody = document.createElement('tbody');
    let headerRow = document.createElement('tr');
    headerRow.innerHTML = `<th>Name</th><th>Email</th><th>Phone</th>`;
    createTblBody.appendChild(headerRow);

    for (let i = 0; i < arr.length; i++) {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${arr[i].name}</td><td>${arr[i].email}</td><td>${arr[i].phone}</td>`;
        createTblBody.appendChild(row);
    }

    createTable.appendChild(createTblBody);

    return createTable;
}

showUserInfo();


function getWeather(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Cloudy')
        }, 2000)
    })
}

function getWeatherResult(result){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(result) {
                case "Cloudy":
                    resolve("😶‍🌫️😶‍🌫️😶‍🌫️");
                    break;
                case "Sunny":
                    resolve("🌞") // window icon and dot (.)
                    break;
                default:
                    reject("no weather found")
            }
        }, 2000)
    })
}

function onSuccess(data){
    console.log(`Success : ${data}`)
}

function onReject(data){
    console.log(`Reject : ${data}`)
}

//Promise chaining
getWeather()
.then(getWeatherResult)
.then(onSuccess)
.catch(onReject)


//with promise' : CONSUME PROMISE : Example 1
function dogDetails(){
    return new Promise((resolve, reject) => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then((resp) => {
          if(!resp.ok) {
            throw new Error("Failed to fetch data")
          } 
          return resp.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
}

/* async function getDogDetails(){
    try {
        let response = await dogDetails;
        let data = await response.json(); 
        console.log(data)
    } catch (error) {
        console.error(error)
    }
} */

dogDetails()
.then((data) => console.log(data))
.catch((error) => console.log(error))

/////////////////////////////////////////////////////////////////////////////

//CONSUME PROMISE : Example 2

let URL = "https://fakestoreapi.com/products";

/* async function getData(){
    let getUrl = await fetch(URL);
    let getResponse = await getUrl.json();
    console.log(getResponse);
}
getData(); */


function getData(){
   fetch(URL, {
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
   }).then((response) => {
        if(!response.ok)  throw new Error("oh, no!...please check your uRL");
       return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.error(error.message)
    })
}
getData();


const dadJokeUrl = "https://icanhazdadjoke.com/";
let rendomeNum = Math.floor((Math.random() * 10) + 1);

const myPromise = new Promise((resolve, reject) => {
   // Asynchronous operation
   setTimeout(() => { //perform an asynchronous operation, which in this case is  setTimeout()
    const data = "Promise resolved successfully!";
    console.log(rendomeNum, 'rendomeNum');
    if(rendomeNum < 5){
        resolve(data); //// Fulfill the Promise
    } else {
        //// Or reject the Promise
        reject(new Error("An Error Occured"));
    }
   }, 2000)
});

/* We chain a .then() method to the Promise instance to register a fulfillment callback that will be called when the Promise is fulfilled. Inside the callback, we log the fulfillment value to the console. */

/* If the Promise is rejected, either due to an error or by explicitly calling reject(), the rejection callback specified using .catch() will be invoked, and we can handle the error accordingly. */
myPromise.then((result) => {
    console.log("Promise fulfilled:", result);
}).catch((error) => {
    console.error("Promise rejected:", error);
});

//Why Promise are Userfulll
/* Promises provide a more structured and readable way to handle asynchronous operations and their outcomes in JavaScript. */

//How Promise works under the hood

//Promises are an integral part of JavaScript’s asynchronous programming model and provide a way to handle asynchronous operations in a more structured and manageable manner.

//Promise Creation...Produce Promise
/* 1. When you create a Promise using the new Promise() syntax, you provide an executor function as its argument. 
2. This executor function is called immediately when the Promise is created.
3. It receives two callback functions as parameters: resolve and reject.
4. Inside the executor function, you perform your asynchronous operation and call either resolve(value) to fulfill the Promise or reject(reason) to reject it. */

function myAlaram(person, delay){
    return new Promise((resolve, reject) => { //// This is the executor function
        if (delay < 0) {
            reject(new Error('Alarm must not be negative')); // Properly rejecting the promise with an error
            return; // Ensure the function exits after rejecting
        }
        
        setTimeout(() => {//asynchronous operation 
            resolve(`Wake Up ${person}`)
        }, delay)
    })
}

/* myAlaram.then(("Mozila", 5000) => {   U DID Mistake ove here
    return
}) */

//The executor function is the function passed to the Promise constructor.
/* myAlaram('Mozila', 5000) // This returns a new promise.
//then method is used to handle the fulfillment(resolve) of a promise. 
.then((message) => { //The callback function inside then is called with the value passed to resolve.  referred to as the "resolved value" or the "fulfillment value."
    //The message parameter inside the then method's callback function represents the resolved value of the promise.
    console.log(message); 
}) */

myAlarm('John', 2000)
    .then(message => {
        console.log(message); // Logs "Wake Up John" after 2 seconds
    })
    .catch(error => {
        console.error('Error:', error.message); // Handles any errors that occur
    });

    