let container = document.querySelector('.container');
function getPosition(event){
   /*  document.body.innerHTML = ""; */
   /*  let existingCircleRemove = document.querySelectorAll('.circle');
    existingCircleRemove.forEach((circle) => circle.remove()); */
    let box = document.createElement('div');
    box.classList.add('circle');
    box.style.left = event.clientX + 'px'; 
    box.style.top = event.clientY + 'px'; 
    container.appendChild(box);
    setTimeout(()=>{
        box.remove();
    },3000)
}

document.addEventListener("dblclick", getPosition)

