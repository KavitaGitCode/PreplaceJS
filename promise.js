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

//direct call promise
new Promise((resolve, reject) => {
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

//chaining
getWeather()
.then(getWeatherResult)
.then(onSuccess)
.catch(onReject)


//with promise'
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