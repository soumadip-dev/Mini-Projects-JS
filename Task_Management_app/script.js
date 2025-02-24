////////////// DOM Elements
const todoInput = document.getElementById('taskInput');
const submitButton = document.getElementById('addButton');
const todoListUl = document.getElementById('taskList');
const emptyList = document.getElementById('emptyList');

/////////////// Functions

// Load todos from localStorage or return an empty todo list if none exist
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || { todoList: [] };
  return todos;
}

// Add a new todo to localStorage
function addTodoToLocalStorage(todoText) {
  const todos = loadTodos(); // Retrieve existing todos
  todos.todoList.push(todoText); // Add new todo
  localStorage.setItem('todos', JSON.stringify(todos)); // Save updated list back to localStorage
}

// Handle adding a new todo from the input field to local storage
function handleTodoSubmission() {
  const todoText = todoInput.value;
  if (todoText === '') {
    alert('Please write something for the task');
  } else {
    addTodoToLocalStorage(todoText);
    todoInput.value = '';
    appendTodoInHTML(todoText);
  }
}

// Handle adding a new todo In DOM
function appendTodoInHTML(todoText) {
  emptyList.style.display = 'none';
  const todo = document.createElement('li');
  todo.textContent = todoText;
  todo.classList.add('task-item');
  todoListUl.appendChild(todo);
}

/////////////// Event Listeners

// Click event for the add button
submitButton.addEventListener('click', () => {
  handleTodoSubmission();
});

// Keydown event to allow adding a todo when pressing Enter
todoInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleTodoSubmission();
  }
});

// Trim input value on change (removes leading/trailing spaces)
todoInput.addEventListener('change', event => {
  event.target.value = event.target.value.trim();
});

// Load todos when the page loads
const todos = loadTodos();
if (todos.todoList.length === 0) {
  emptyList.style.display = 'block';
} else {
  todos.todoList.forEach(todo => {
    emptyList.style.display = 'none';
    const todoItem = document.createElement('li');
    todoItem.textContent = todo;
    todoItem.classList.add('task-item');
    todoListUl.appendChild(todoItem);
  });
}
