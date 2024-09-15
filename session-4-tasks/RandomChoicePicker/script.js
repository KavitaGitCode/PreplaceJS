let textAreaBox = document.getElementById("slipt-text-area");
let result = document.getElementById('result');

//get types text in text area
textAreaBox.addEventListener("keyup", generateTextTags);

function generateTextTags(event) {
    result.innerHTML = "";

    let getVal = textAreaBox.value.trim();

    //split value
    let splitValues = getVal.split(",");

    splitValues.forEach(word => {
        createSpanTextTags(word.trim());
    });

    //animate start when enter press
    if (event.key === 'Enter') {
        textAreaBox.value = "";
        animateTags();
    }
}

function createSpanTextTags(param) {
    if (param !== "") {
        let spanTag = document.createElement('span');
        spanTag.innerHTML = `${param.trim()}`;
        result.appendChild(spanTag);
    }
}

function animateTags() {
    let getSpan = result.querySelectorAll('span');

    let animationTimer = setInterval(() => {
        //remove class 'active' as its added to each span
        getSpan.forEach(singleSpan => singleSpan.classList.remove('active'));
        
        let getRadomNum = Math.floor(Math.random() * getSpan.length);
        getSpan[getRadomNum].classList.add('active');
    }, 250)

    setTimeout(function () {
        clearInterval(animationTimer)
    }, 10000);
}