const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    closeQuestions();
    const targetP = e.target.parentNode.children[1];
    targetP.style.display = "block";
  });
});

function closeQuestions() {
  questions.forEach((q) => (q.children[1].style.display = "none"));
}
