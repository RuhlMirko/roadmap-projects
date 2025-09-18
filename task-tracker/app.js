const addBtn = document.getElementById("add-item");
const taskList = document.getElementById("task-list");
const taskArr = [];

addBtn.addEventListener("click", function () {
  const newTask = document.getElementById("task-input").value.trim();
  if (newTask !== "") {
    taskArr.push(newTask);
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <input type="checkbox" id="id-${taskArr.length}" />
            <label for="id-${taskArr.length}">${newTask}</label>
            <button>Delete</button>
        `;
    taskList.appendChild(listItem);
    document.getElementById("task-input").value = "";
  }
});

taskList.addEventListener("change", function () {
  document
    .querySelectorAll("#task-list input[type='checkbox']")
    .forEach((checkbox) => {
      const label = checkbox.nextElementSibling;
      if (checkbox.checked) {
        label.classList.add("completed");
      } else {
        label.classList.remove("completed");
      }
    });
});
