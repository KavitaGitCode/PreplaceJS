let imgPanel = document.querySelectorAll(".img-box");

function resizeImg() {
    imgPanel.forEach((item) => {
        item.addEventListener("click", function (e) {
            let parentFigure = e.target.parentNode;
            removeResizeCls();
           
            if (parentFigure.classList.contains('resize-img')) {
                console.log('true......');
                parentFigure.classList.remove("resize-img");
                parentFigure.classList.add("original-img");
            } else {
                parentFigure.classList.add("resize-img");
                parentFigure.classList.remove("original-img");
            }
        });
    });
}

resizeImg();

function removeResizeCls(param) {
    imgPanel.forEach((item) => {
        item.classList.remove("resize-img");
        item.classList.add("original-img");
    });
}
