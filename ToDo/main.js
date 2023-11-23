import "./css/style.css";
import {
  completedTaskCounter,
  allTaskCounter,
  tasksFieldWrapper,
  addTaskButton,
  addTaskField,
} from "./init";

let completedTask = 0;
let allTask = 0;
let taskFieldNameCurrentValue;
let editableTaskId;

completedTaskCounter.textContent = `Completed task: ${completedTask}`;

allTaskCounter.textContent = `All tasks: ${allTask}`;

addTaskButton.addEventListener("click", () => {
  if (
    addTaskField.value.length != 0 &&
    addTaskButton.textContent == "Add Task"
  ) {
    allTask++;
    allTaskCounter.textContent = `All tasks: ${allTask}`;
    const task = document.createElement("div");
    task.classList.add("task");
    task.setAttribute("id", Date.now());

    const taskChekField = document.createElement("input");
    taskChekField.setAttribute("type", "checkbox");
    taskChekField.classList.add("task-checkbox");

    const taskRightWrapper = document.createElement("div");
    taskRightWrapper.classList.add("task-right__wrapper");
    taskRightWrapper.appendChild(taskChekField);

    const taskFieldName = document.createElement("div");
    taskFieldName.classList.add("task-field__name");
    taskFieldName.textContent = addTaskField.value;
    taskRightWrapper.appendChild(taskFieldName);
    task.appendChild(taskRightWrapper);

    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    const updateButton = document.createElement("img");
    updateButton.classList.add("update-button");
    updateButton.classList.add("task-button-control");
    updateButton.src = "./img/edit.png";

    updateButton.addEventListener("click", (event) => {
      addTaskButton.textContent = "Update";
      taskFieldNameCurrentValue = addTaskField.value;
      editableTaskId = event.target.parentNode.parentNode.getAttribute("id");
    });

    const deleteButton = document.createElement("img");
    deleteButton.classList.add("task-delete-button");
    deleteButton.classList.add("task-button-control");
    deleteButton.src = "./img/delete.png";
    taskButtons.appendChild(updateButton);
    taskButtons.appendChild(deleteButton);
    task.appendChild(taskButtons);
    tasksFieldWrapper.appendChild(task);
  } else if (addTaskButton.textContent == "Update") {
    document.getElementById(editableTaskId).firstChild.lastChild.textContent =
      addTaskField.value;
    addTaskButton.textContent = "Add Task";
    addTaskField.value = "";
  }
});
