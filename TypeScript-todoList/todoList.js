"use strict";
const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-title");
const tasks = [];
form.addEventListener('submit', e => {
    e.preventDefault();
    if (input.value === "" || input.value === null)
        return;
    const newTask = {
        title: input.value,
        completed: false,
        createdAt: new Date()
    };
    addListItem(newTask);
    tasks.push(newTask);
    input.value = "";
});
function addListItem(task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    list.append(item);
}
