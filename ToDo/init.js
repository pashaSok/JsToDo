export const wrapper = document.querySelector("#app");
export const container = document.createElement("div");
container.classList.add("container");
export const header = document.createElement("div");
header.classList.add("header");
container.appendChild(header);
export const headerImg = document.createElement("img");
headerImg.classList.add("header-img");
headerImg.setAttribute("src", "./img/to-do-list.png");
header.appendChild(headerImg);
export const title = document.createElement("span");
title.innerText = "ToDo List";
title.classList.add("title");
wrapper.appendChild(container);
header.appendChild(title);

export const navButtonsWrapper = document.createElement("div");
navButtonsWrapper.classList.add("nav-button__wrapper");
export const addTaskField = document.createElement("input");
addTaskField.classList.add("add-task-field");
export const addTaskButton = document.createElement("button");
addTaskButton.classList.add("add-task-button");
addTaskButton.textContent = "Add Task";
navButtonsWrapper.appendChild(addTaskField);
navButtonsWrapper.appendChild(addTaskButton);
container.appendChild(navButtonsWrapper);

export const taskButtonsWrapper = document.createElement("div");
taskButtonsWrapper.classList.add("task-buttons__wrapper");
export const completeTasksButton = document.createElement("button");
completeTasksButton.classList.add("complete-tasks-button");
completeTasksButton.classList.add("control-button");
completeTasksButton.textContent = "Complete all tasks";
export const deleteAllCompletedTasks = document.createElement("button");
deleteAllCompletedTasks.classList.add("delete-tasks-button");
deleteAllCompletedTasks.classList.add("control-button");
deleteAllCompletedTasks.textContent = "Delete all tasks";
taskButtonsWrapper.appendChild(completeTasksButton);
taskButtonsWrapper.appendChild(deleteAllCompletedTasks);
container.appendChild(taskButtonsWrapper);
export const counterWrapper = document.createElement("div");
container.appendChild(counterWrapper);
counterWrapper.classList.add("counter__wrapper");
export const completedTaskCounter = document.createElement("div");
completedTaskCounter.classList.add("completed-task-counter");

export const allTaskCounter = document.createElement("div");
allTaskCounter.classList.add("all-task-counter");
counterWrapper.appendChild(completedTaskCounter);
counterWrapper.appendChild(allTaskCounter);

export const tasksFieldWrapper = document.createElement("div");
tasksFieldWrapper.classList.add("task-field__wrapper");
container.appendChild(tasksFieldWrapper);
