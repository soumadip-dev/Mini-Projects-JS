////////////// Functions
function getStoredTasks() {
  // This function retrieves tasks from local storage
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || {
    taskList: [],
  };
  console.log(storedTasks);
  return storedTasks;
}

function saveTaskToLocalStorage(taskText) {
  const storedTasks = getStoredTasks();
  storedTasks.taskList.push(taskText);
  localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

document.addEventListener('DOMContentLoaded', function () {
  ////////////// DOM Elements
  const taskInputField = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addButton');

  taskInputField.addEventListener('change', function () {
    const taskText = this.value.trim();
  });

  addTaskButton.addEventListener('click', function () {
    const taskText = taskInputField.value;
    if (taskText.trim() === '') {
      alert('Please write something for the task');
    } else {
      saveTaskToLocalStorage(taskText);
    }
  });

  getStoredTasks();
});
