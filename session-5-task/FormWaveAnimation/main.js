let getAllFromControlElm = document.querySelectorAll('.form-control');

getAllFromControlElm.forEach((item) => {
    const inputElm  = item.querySelector('input');
    inputElm.addEventListener('focus', function(){
      /*  console.log(this);  */
      let getLableElm = this.nextElementSibling;
      getLableElm.innerHTML = getLableElm.textContent.split("").map((letter , index) => {
        return `<span style="transition-delay:${index * 80}ms">${letter}</span>`
      }).join(''); 
      getLableElm.classList.add('active');  
    });
    inputElm.addEventListener('blur', function(){
        let getLabelElm = this.nextElementSibling;
        if(inputElm.value === ""){
            getLabelElm.classList.remove('active');
        }
    });
})