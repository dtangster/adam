console.log("DAVID WAS HERE");

function moveTask(task) {
  const checkbox = task.querySelector("input"); 
  const isChecked = checkbox.checked;

  console.log("Is checked " + isChecked);

  const tasks = document.getElementById("tasks");
  const completedTasks = document.getElementById("completedTasks");

  if (isChecked) {
    completedTasks.appendChild(task);
    // Delete from tasks
  } else {
    tasks.appendChild(task);
    // Delete from completed tasks
  }
}

function addTask() {
  const newTask = document.getElementById("message");
  console.log("Inside add task: " + newTask.value);

  var taskList = document.getElementById("tasks");
  console.log(taskList);

  var div = document.createElement("div");
  div.className = "form-check";

  var input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "checkbox";
  input.onclick = function() {
	  moveTask(div);
  }

  var label = document.createElement("label");
  label.className = "form-check-label";
  label.for = "flexCheckChecked";
  label.innerHTML = newTask.value;

  div.appendChild(input);
  div.appendChild(label);
  taskList.append(div);

  taskList = document.getElementById("tasks");
  console.log(taskList);

  newTask.value = "";
}
