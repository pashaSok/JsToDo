import "./css/style.css";

const wrapper = document.querySelector("#app");
const container = document.createElement("div");
container.classList.add("container");
const header = document.createElement("div");
header.classList.add("header");
container.appendChild(header);
const title = document.createElement("span");
title.innerText = "ToDo List";
title.classList.add("title");
wrapper.appendChild(container);
header.appendChild(title);

const navButtonsWrapper = document.createElement("div");
navButtonsWrapper.classList.add("nav-button__wrapper");
const addTaskField = document.createElement("input");
addTaskField.classList.add("add-task-field");
const addTaskButton = document.createElement("button");
addTaskButton.classList.add("add-task-button");
addTaskButton.textContent = "Add Task";
navButtonsWrapper.appendChild(addTaskField);
navButtonsWrapper.appendChild(addTaskButton);
container.appendChild(navButtonsWrapper);
