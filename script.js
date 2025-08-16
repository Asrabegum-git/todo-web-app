function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  // Get current date
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text" onclick="toggleTask(this)">${taskInput.value}</span>
    <span class="task-date">${dateStr}</span>
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
