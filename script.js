let tasks = {};

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");
  const task = taskInput.value.trim();
  const date = dateInput.value;

  if (task === "" || date === "") {
    alert("Please enter task and date!");
    return;
  }

  if (!tasks[date]) {
    tasks[date] = [];
  }

  tasks[date].push(task);
  taskInput.value = "";
  dateInput.value = "";

  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  for (let date in tasks) {
    let dateHeader = document.createElement("div");
    dateHeader.classList.add("task-date");
    dateHeader.textContent = `📅 ${date}`;
    taskList.appendChild(dateHeader);

    tasks[date].forEach((task) => {
      let taskItem = document.createElement("div");
      taskItem.classList.add("task-item");
      taskItem.textContent = task;
      taskList.appendChild(taskItem);
    });
  }
}
