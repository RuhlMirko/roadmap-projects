function copyEmail() {
  const email = "ruhlmirkojoel@gmail.com";
  navigator.clipboard.writeText(email).then(function () {
    const msg = document.getElementById("copiedMsg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3500);
  });
}
