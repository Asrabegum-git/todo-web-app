// Load tasks from localStorage when the page opens
window.onload = function() {
  if(localStorage.getItem("tasks")){
    document.getElementById("taskList").innerHTML = localStorage.getItem("tasks");
  }
}

// Add a new task
function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  let dateInput = document.getElementById("dateInput").value;

  if (taskInput === "" || dateInput === "") {
    alert("Please enter a task and select a date.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <div class="task-info">
      <span>${taskInput}</span>
      <span class="due-date">Due: ${dateInput}</span>
    </div>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);

  saveTasks();

  document.getElementById("taskInput").value = "";
  document.getElementById("dateInput").value = "";
}

// Delete a task
function deleteTask(btn) {
  btn.parentElement.remove();
  saveTasks();
}

// Save tasks in localStorage
function saveTasks() {
  localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}
