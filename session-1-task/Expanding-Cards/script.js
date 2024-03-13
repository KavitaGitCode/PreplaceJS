let imgPanel = document.querySelectorAll(".img-box");

function resizeImg() {
    imgPanel.forEach((item) => {
        item.addEventListener("click", function (e) {
            removeResizeCls();
            let parentFigure = e.target.parentNode;
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

function removeResizeCls() {
    imgPanel.forEach((item) => {
        item.classList.remove("resize-img");
        item.classList.add("original-img");
    });
}
