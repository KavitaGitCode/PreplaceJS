let btn = document.querySelector('.btn');
function createBubble(e){
   /*  console.log(e.currentTarget, e.target);
    console.log(this); */
    let spanDiv =  document.createElement('span');
    this.appendChild(spanDiv);
/*     console.log(e.clientX, e.clientY);
    console.log(e.currentTarget.offsetLeft);
    console.log(e.currentTarget.offsetTop); */
    let spanLeft = e.clientX - e.currentTarget.offsetLeft;
    let spanTop = e.clientY - e.currentTarget.offsetTop;

    spanDiv.style.left = `${spanLeft}px`;
    spanDiv.style.top = `${spanTop}px`;

    setTimeout(() => {
        spanDiv.remove();
    }, 1000);
}

btn.addEventListener('click', createBubble);