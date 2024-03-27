const imgIcon = document.querySelector(".img-icon");
const imgBox = document.querySelectorAll(".img-box");

//image drag start
imgIcon.addEventListener("dragstart", dragStart);
function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
  imgIcon.classList.add("replace-img");
  imgBox.forEach((box) => {
    box.classList.remove("drop-target-border");
  })
}

imgIcon.addEventListener("dragend", dragEnd);

function dragEnd() {
  imgIcon.classList.remove("replace-img");
}

//image drop in imgBox
imgBox.forEach((box) => {
  /* box.addEventListener("dragenter", dragenter);

  box.addEventListener("dragleave", dragleave); */

  box.addEventListener("dragover", dragover);

  box.addEventListener("drop", drop);
  
});
/* 

function dragenter(event) {
  event.preventDefault();
  event.target.classList.remove("drop-target-border");
}

function dragleave(event) {
  event.preventDefault();
  event.target.classList.remove("drop-target-border");
} */

function dragover(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  event.target.classList.add("drop-target-border");

  // get the draggable image id
  let id = event.dataTransfer.getData("text");
  let setImgId = document.getElementById(id);

  // add it to the drop target box
  event.target.appendChild(setImgId);
}
