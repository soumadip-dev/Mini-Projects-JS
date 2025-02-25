////////////// DOM Elements
const taskInput = document.getElementById('taskInput');
const submitButton = document.getElementById('addButton');
const taskListUl = document.getElementById('taskList');
const emptyList = document.getElementById('emptyList');
const filterButtons = document.getElementById('filter');
const totalTask = document.getElementById('totalTasks');
const completedTask = document.getElementById('completedTasks');
const filterButton = document.querySelectorAll('.filter-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

/////////////// Functions

// chage theme
function changeTheme() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Load tasks from localStorage or return an empty task list if none exist
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || { taskList: [] };
  return tasks;
}

// Save tasks to localStorage
function refreshTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a new task to localStorage
function addTaskToLocalStorage(taskInp) {
  const tasks = loadTasks(); // Retrieve existing tasks
  tasks.taskList.push({ ...taskInp }); // Add new task
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Save updated list back to localStorage
}

// Handle adding a new task from the input field to local storage
function handleTaskSubmission() {
  let tasks = loadTasks();
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please write something for the task');
  } else {
    addTaskToLocalStorage({
      text: taskText,
      isCompleted: false,
      id: tasks.taskList.length,
    });
    taskInput.value = '';
    appendTaskInHTML({
      text: taskText,
      isCompleted: false,
      id: tasks.taskList.length,
    });
  }
}

// Handle adding a new task In DOM
function appendTaskInHTML(taskInp) {
  emptyList.style.display = 'none';
  filterButtons.style.display = 'flex';
  const task = document.createElement('li');

  task.setAttribute('data-id', taskInp.id);
  task.classList.add('task-item');

  // Add task text element
  const taskText = document.createElement('span');
  taskText.classList.add('task-text');
  taskText.textContent = taskInp.text;
  task.appendChild(taskText);

  if (taskInp.isCompleted) {
    task.classList.add('completed');
  }

  const wrapper = document.createElement('div');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', editTask);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  const completeBtn = document.createElement('button');
  completeBtn.textContent = taskInp.isCompleted ? 'Reset' : 'Completed';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', toggleTask);

  wrapper.appendChild(completeBtn);
  wrapper.appendChild(editBtn);
  wrapper.appendChild(deleteBtn);
  task.appendChild(wrapper);
  taskListUl.appendChild(task);

  updateUI();
}

// Filter button action
function executeFilterAction(event) {
  const element = event.target;
  const value = element.getAttribute('data-filter');
  taskListUl.innerHTML = '';
  const tasks = loadTasks();
  if (value === 'all') {
    tasks.taskList.forEach(task => {
      appendTaskInHTML(task);
    });
  } else if (value === 'pending') {
    tasks.taskList.forEach(task => {
      if (!task.isCompleted) {
        appendTaskInHTML(task);
      }
    });
  } else {
    tasks.taskList.forEach(task => {
      if (task.isCompleted) {
        appendTaskInHTML(task);
      }
    });
  }
}

// reset html after any operation
function resetHtmlTasks(tasks) {
  taskListUl.innerHTML = '';
  tasks.taskList.forEach(task => appendTaskInHTML(task));
  updateUI();
}

// Toggle Task completed
function toggleTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const taskId = parseInt(taskItem.getAttribute('data-id'));
  const tasks = loadTasks();
  tasks.taskList.forEach(task => {
    if (task.id === taskId) {
      task.isCompleted = !task.isCompleted;
    }
  });
  refreshTasks(tasks);
  resetHtmlTasks(tasks);
}

// Delete specific task
function deleteTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const taskId = parseInt(taskItem.getAttribute('data-id'));
  let tasks = loadTasks();
  tasks.taskList = tasks.taskList.filter(task => task.id != taskId);
  refreshTasks(tasks);
  resetHtmlTasks(tasks);
}

// Edit Task
function editTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const taskId = parseInt(taskItem.getAttribute('data-id'));
  let tasks = loadTasks();

  const updatedText = prompt('Enter the updated task text');
  if (updatedText !== null && updatedText.trim() !== '') {
    tasks.taskList.forEach(task => {
      if (task.id === taskId) {
        task.text = updatedText;
      }
    });
  } else {
    alert('Task update canceled.');
  }
  refreshTasks(tasks);
  resetHtmlTasks(tasks);
}

// Update the UI
function updateUI() {
  const tasks = loadTasks();
  const completedCount = tasks.taskList.filter(task => task.isCompleted).length;
  totalTask.textContent = `Total tasks: ${tasks.taskList.length}`;

  completedTask.textContent = `Completed: ${completedCount}`;

  emptyList.style.display = tasks.taskList.length === 0 ? 'block' : 'none';
  filterButtons.style.display = tasks.taskList.length === 0 ? 'none' : 'flex';
}

/////////////// Event Listeners

// ....
const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle.addEventListener('click', changeTheme);

// Filter button event
filterButton.forEach(btn => {
  btn.addEventListener('click', executeFilterAction);
});

// Click event for the add button
submitButton.addEventListener('click', () => {
  handleTaskSubmission();
});

// Keydown event to allow adding a task when pressing Enter
taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleTaskSubmission();
  }
});

// Trim input value on change (removes leading/trailing spaces)
taskInput.addEventListener('change', event => {
  event.target.value = event.target.value.trim();
});

// Load tasks when the page loads
const tasks = loadTasks();
if (tasks.taskList.length === 0) {
  emptyList.style.display = 'block';
  filterButtons.style.display = 'none';
} else {
  tasks.taskList.forEach(task => {
    appendTaskInHTML(task);
  });
}

updateUI();
