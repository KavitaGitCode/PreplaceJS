let jokeCOntainer = document.querySelector('.show-joke');
let button = document.querySelector(".load-joke");

async function loadJokeFromAPI(){
    let response = await fetch('https://icanhazdadjoke.com/', { 
      method: 'GET',
      headers: {
        "Accept" : "application/json" 
      }
    });

    let data = await response.json();
    console.log(data);

    /* return fetch('https://icanhazdadjoke.com/', { 
        method: 'GET',
        headers: {
          "Accept" : "application/json" 
        }
      })
    .then((response) => response.json())
    .then((data) => console.log(data)) */
}

button.addEventListener("click", loadJokeFromAPI);