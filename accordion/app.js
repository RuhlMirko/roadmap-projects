const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const targetP = e.target.parentNode.children[1];
    targetP.style.display = "block";
  });
});
