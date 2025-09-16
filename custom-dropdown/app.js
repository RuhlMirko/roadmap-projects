"use strict";
const dropBtn = document.getElementById("dropBtn");
let currentSelection = "Select an Item";
let isOpen = false;
const dropdownContent = document.getElementById("dropdown-content");
const dropdownItems = dropdownContent.querySelectorAll("#dropdown-content a");

dropBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  dropdownContent.style.display = isOpen ? "flex" : "none";
  updateBtn();
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    currentSelection = item.innerHTML;
    dropdownContent.style.display = "none";
    isOpen = false;
    updateBtn();
  });
});

function updateBtn() {
  dropBtn.innerHTML = `${currentSelection} <i class="fa-solid fa-caret-${
    isOpen ? "up" : "down"
  }"></i>`;
}
