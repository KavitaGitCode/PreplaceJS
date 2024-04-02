let emptyGlass = document.querySelectorAll('.small-glass');
let bigGlass = document.querySelector('.glass');
let transparentGlass =  document.querySelector('.transparent-glass');
let getHeight = parseInt(bigGlass.style.height);
let cal = getHeight/emptyGlass.length;

emptyGlass.forEach((glass, index, array) => {
    glass.addEventListener("click", function(){
        emptyGlass.forEach(glass => glass.classList.remove('full-of-water'))
        /* this.classList.add('full-of-water');
        console.log(index);
        console.log(array); */
        let totalHeight = 0;
        for(let i = 0; i <= index; i++){
            array[i].classList.add('full-of-water'); 
            totalHeight += cal
            /* fillBigGlass(cal * i);  */
        }
        fillBigGlass(totalHeight);
    })
});

function fillBigGlass(param){
    transparentGlass.style.height = `${param}px`
}
