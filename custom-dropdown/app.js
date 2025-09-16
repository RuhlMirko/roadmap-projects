"use strict";
const dropBtn = document.getElementById("dropBtn");
let isOpen = false;
const dropdownContent = document.getElementById("dropdown-content");

dropBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  dropBtn.innerHTML = isOpen
    ? "Select an Item <i class='fa-solid fa-caret-up'></i>"
    : "Select an Item <i class='fa-solid fa-caret-down'></i>";
  dropdownContent.style.display = isOpen ? "flex" : "none";
});
