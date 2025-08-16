function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskInput.value}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
}

function toggleTask(span) {
  span.parentElement.classList.toggle("completed");
}

function deleteTask(button) {
  button.parentElement.remove();
}

function clearAll() {
  document.getElementById("taskList").innerHTML = "";
}
