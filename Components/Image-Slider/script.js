let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let sliderImg = document.querySelectorAll(".slider-img");

let currentImg = 0;
let sliderImgLength = sliderImg.length;

nextBtn.addEventListener("click", function(){
   sliderImg[currentImg].classList.remove('show');
   if(currentImg == sliderImgLength-1){
    currentImg = 0
   } else {
    currentImg++;
   }
   sliderImg.forEach((img) => img.classList.add('hide'))
   sliderImg[currentImg].classList.add('show');
   sliderImg[currentImg].classList.remove('hide');
});

prevBtn.addEventListener("click", function(){
   sliderImg[currentImg].classList.remove('show');
   if(currentImg == 0){
      currentImg = sliderImgLength - 1;
     } else {
      currentImg--;
     }
     console.log(currentImg);
     sliderImg.forEach((img) => img.classList.add('hide'))
     sliderImg[currentImg].classList.add('show');
     sliderImg[currentImg].classList.remove('hide');  
})