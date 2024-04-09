let boxs = document.querySelectorAll('.box');
let arr = [];

boxs.forEach((box, index, array) => {
    box.addEventListener('click', function (e) {
        e.currentTarget.classList.add('active');
        arr.push(index);
        if (arr.length === boxs.length) {
            setTimeout(() => {
                  removeActiveClassByOrder(array);
                  /* for (let index = 0; index < arr.length; index++) {
                    setTimeout(() => {
                        console.log(arr, 'befire');
                        let box = arr.shift();
                        console.log(arr, 'after');
                        box.classList.remove("active");
                      }, index * 1000);
                  } */
            }, 5000);
        }
    });
});

function removeActiveClassByOrder(list){
    let animationStart;
    for (let i = 0; i < arr.length; i++) {
        animationStart = setInterval(() => {
            let current = arr[i];
            list[current].classList.remove('active');
        }, i * 500);
    }
   
    setTimeout(() => {
        clearInterval(animationStart);
        console.log('time out');
    }, arr.length * 1000);
}





                     /*  why this will not work */
                    /* removeActiveClassByOrder(arr[i], array); */
                   /*  let current = arr[i]; */
                   /*  why this will not work */
                    /* array[current].classList.remove('active'); */
                  /*   setTimeout(() => {   
                        array[current].classList.remove('active');
                        console.log(i, 'inside', current)
                    }, i * 1000);
 */