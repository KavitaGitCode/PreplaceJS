const questions = document.querySelectorAll(".question-section");
function showAnswer(answer, arrowButton) {
  if (answer.classList.contains("show-answer")) {
    removeHideCls(answer, arrowButton);
  } else {
    arrowButton.innerHTML = "&#128897;";
    answer.classList.add("show-answer");
    answer.classList.remove("hide-answer");
  }
}
function removeHideCls(selected, arrowButton) {
  arrowButton.innerHTML = "&#128899;";
  selected.classList.remove("show-answer");
  selected.classList.add("hide-answer");
}
questions.forEach((question, index) => {
  let selectedQuestion = question.querySelector(".question");
  selectedQuestion.addEventListener("click", function () {
    let qestionAns = question.querySelector(".answer");
    let arrowBtn = question.querySelector(".arrow-button");
    showAnswer(qestionAns, arrowBtn);
  });
});
