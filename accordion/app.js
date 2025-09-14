const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    closeQuestions();
    question.classList.add("open");
  });
});

function closeQuestions() {
  questions.forEach((q) => q.classList.remove("open"));
}
