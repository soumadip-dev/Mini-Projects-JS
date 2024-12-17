document.addEventListener('DOMContentLoaded', function () {
  ////////////// Load tasks function
  function loadTasks() {
    // Retrieve tasks from localStorage, or initialize an empty task list if none exists
    const taskData = JSON.parse(localStorage.getItem('tasks')) || {
      tasklist: [],
    };
    return taskData;
  }

  ////////////// Refresh tasks function
  function refreshTasks(tasks) {
    // Update tasks in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  ////////////// Add task to localStorage function
  function addTaskToLocalStorage(task) {
    // Add a new task to the existing task list in localStorage
    const taskData = loadTasks();
    taskData.tasklist.push({ ...task });
    refreshTasks(taskData);
  }

  ////////////// Append task to HTML function
  function appendTaskToHtml(task) {
    // Create and append a task element to the HTML list
    const taskListElement = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.setAttribute('data-id', task.id);
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    const taskTextElement = document.createElement('span');
    if (task.isCompleted) {
      taskTextElement.classList.add('completed');
    }
    taskTextElement.textContent = task.task;

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('completeBtn');
    completeBtn.textContent = task.isComplete ? 'Reset' : 'Completed';
    completeBtn.addEventListener('click', toggleTask);

    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', editTask);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', deleteTask);

    taskContent.appendChild(taskTextElement);
    taskContent.appendChild(completeBtn);
    taskContent.appendChild(editBtn);
    taskContent.appendChild(deleteBtn);
    taskItem.appendChild(taskContent);
    taskListElement.appendChild(taskItem);
  }

  ////////////// Execute filter action function
  function executeFilterAction(event) {
    // Filter and display tasks based on the selected filter
    const taskListElement = document.getElementById('taskList');
    const element = event.target;
    const value = element.getAttribute('data-filter');
    taskListElement.innerHTML = '';
    const tasks = loadTasks();

    tasks.tasklist.forEach(task => {
      if (
        value === 'all' ||
        (value === 'pending' && !task.isComplete) ||
        (value === 'completed' && task.isComplete)
      ) {
        appendTaskToHtml(task);
      }
    });
  }

  ////////////// Toggle task function
  function toggleTask(event) {
    // Toggle the completion status of a task
    const taskItem = event.target.parentElement.parentElement;
    const taskId = taskItem.getAttribute('data-id');
    const tasks = loadTasks();

    tasks.tasklist.forEach(task => {
      if (task.id == taskId) {
        task.isComplete = !task.isComplete;
        const taskTextElement = taskItem.querySelector('.task-content span');
        const completeBtn = taskItem.querySelector('.completeBtn');

        if (task.isComplete) {
          taskTextElement.classList.add('completed');
          completeBtn.textContent = 'Reset';
        } else {
          taskTextElement.classList.remove('completed');
          completeBtn.textContent = 'Completed';
        }
      }
    });

    refreshTasks(tasks);
  }

  ////////////// Reset HTML tasks function
  function resetHtmlTasks(tasks) {
    // Reset the HTML task list and re-render all tasks
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.tasklist.forEach(task => {
      appendTaskToHtml(task);
    });
  }

  ////////////// Edit task function
  function editTask(event) {
    // Edit an existing task and update the task list
    const taskItem = event.target.parentElement.parentElement;
    const taskId = taskItem.getAttribute('data-id');
    let tasks = loadTasks();
    const response = prompt('What is the new value you want to set?');
    tasks.tasklist.forEach(task => {
      if (task.id == taskId) {
        task.task = response;
      }
    });
    refreshTasks(tasks);
    resetHtmlTasks(tasks);
  }

  ////////////// Delete task function
  function deleteTask(event) {
    // Delete a task from the task list
    const taskItem = event.target.parentElement.parentElement;
    const taskId = taskItem.getAttribute('data-id');
    let tasks = loadTasks();
    tasks.tasklist = tasks.tasklist.filter(task => task.id != taskId);
    refreshTasks(tasks);
    resetHtmlTasks(tasks);
  }

  ////////////// Add new task function
  function addNewTask() {
    // Add a new task to the task list and display it
    const taskInputElement = document.getElementById('taskInput');
    const taskText = taskInputElement.value.trim();
    if (taskText === '') {
      alert('Please write something for the task');
    } else {
      const taskData = loadTasks();
      const id = taskData.tasklist.length;
      const task = { task: taskText, isComplete: false, id };
      addTaskToLocalStorage(task);
      appendTaskToHtml(task);
      taskInputElement.value = '';
    }
  }

  ////////////// Initialize application
  const taskInputElement = document.getElementById('taskInput');
  const addButtonElement = document.getElementById('addTask');

  const filterBtn = document.getElementsByClassName('filterButton');
  for (const btn of filterBtn) {
    btn.addEventListener('click', executeFilterAction);
  }

  // Add task when the add button is clicked
  addButtonElement.addEventListener('click', addNewTask);

  // Trim input text when it changes
  taskInputElement.addEventListener('change', event => {
    event.target.value = event.target.value.trim();
  });

  // Load and display existing tasks from localStorage
  const tasks = loadTasks();
  tasks.tasklist.forEach(task => {
    appendTaskToHtml(task);
  });

  // Add task when Enter key is pressed
  document.addEventListener('keypress', event => {
    if (event.code == 'Enter') {
      addNewTask();
    }
  });
});
