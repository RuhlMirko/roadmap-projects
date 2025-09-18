function copyEmail() {
  const email = document.getElementById("email").textContent;
  navigator.clipboard.writeText(email).then(function () {
    const msg = document.getElementById("copiedMsg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 1500);
  });
}
