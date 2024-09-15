let countryFlag = ["Armenia", "Belgium", "Colombia", "Estonia"];
let container = document.querySelector(".container");

function flagHtml() {
    let flagName = Math.floor(Math.random() * countryFlag.length);
    let element = `<h3>${countryFlag[flagName]}</h3><div class="flag ${countryFlag[flagName]}"></div>`;
    return element;
}

document.body.addEventListener("dblclick", function(){
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", flagHtml());
});

