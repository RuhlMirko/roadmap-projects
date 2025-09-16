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
    console.log(item);
    currentSelection = item.innerHTML;
    item.classList.add("selected");
    item.innerHTML = `${item.innerHTML} <i class="fa-solid fa-circle-check"></i>`;
    dropdownItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("selected");
        otherItem.innerHTML = otherItem.textContent;
      }
    });
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
