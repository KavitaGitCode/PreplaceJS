let bgImg = document.querySelector('.bg-img');
let loader = document.querySelector('.loader');
let counter = 10;
let txtBlur = 0;

let counterLoader = setInterval(blurImg, 1000);

function blurImg() {
    loader.innerHTML = `${counter}%`;
    counter--;
    //image
    bgImg.style.transition = 'filter 1s';
    bgImg.style.filter = `blur(${counter}px)`;

    //laoder text
    loader.style.opacity = counter;
    loader.style.transition = 'opacity 1s';

    if (counter <= 0) {
        clearInterval(counterLoader);
    }
}

blurImg();


