////////////// DOM Elements
const todoInput = document.getElementById('taskInput');
const submitButton = document.getElementById('addButton');
const todoListUl = document.getElementById('taskList');
const emptyList = document.getElementById('emptyList');
const filterButtons = document.getElementById('filter');
const totalTask = document.getElementById('totalTasks');
const filterButton = document.querySelectorAll('.filter-btn');

/////////////// Functions

// Load todos from localStorage or return an empty todo list if none exist
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem('todos')) || { todoList: [] };
  return todos;
}

// Save todos to localStorage
function refreshTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Add a new todo to localStorage
function addTodoToLocalStorage(todoInp) {
  const todos = loadTodos(); // Retrieve existing todos
  todos.todoList.push({ ...todoInp }); // Add new todo
  localStorage.setItem('todos', JSON.stringify(todos)); // Save updated list back to localStorage
}

// Handle adding a new todo from the input field to local storage
function handleTodoSubmission() {
  let todos = loadTodos();
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('Please write something for the task');
  } else {
    addTodoToLocalStorage({
      text: todoText,
      isCompleted: false,
      id: todos.todoList.length,
    });
    todoInput.value = '';
    appendTodoInHTML({
      text: todoText,
      isCompleted: false,
      id: todos.todoList.length,
    });
  }
}

// Handle adding a new todo In DOM
function appendTodoInHTML(todoInp) {
  emptyList.style.display = 'none';
  filterButtons.style.display = 'flex';
  const todo = document.createElement('li');

  todo.setAttribute('data-id', todoInp.id);
  todo.classList.add('task-item');

  // Add task text element
  const taskText = document.createElement('span');
  taskText.classList.add('task-text');
  taskText.textContent = todoInp.text;
  todo.appendChild(taskText);

  if (todoInp.isCompleted) {
    todo.classList.add('completed');
  }

  const wrapper = document.createElement('div');

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  const completeBtn = document.createElement('button');
  completeBtn.textContent = todoInp.isCompleted ? 'Reset' : 'Completed';
  completeBtn.classList.add('complete-btn');
  completeBtn.addEventListener('click', toggleTodo);

  wrapper.appendChild(completeBtn);
  wrapper.appendChild(editBtn);
  wrapper.appendChild(deleteBtn);

  todo.appendChild(wrapper);

  todoListUl.appendChild(todo);

  // Update total task count
  const todos = loadTodos();
  totalTask.textContent = `Total tasks: ${todos.todoList.length}`;
}

// Filter button action
function executeFilterAction(event) {
  const element = event.target;
  const value = element.getAttribute('data-filter');
  todoListUl.innerHTML = '';
  const todos = loadTodos();
  if (value === 'all') {
    todos.todoList.forEach(todo => {
      appendTodoInHTML(todo);
    });
  } else if (value === 'pending') {
    todos.todoList.forEach(todo => {
      if (!todo.isCompleted) {
        appendTodoInHTML(todo);
      }
    });
  } else {
    todos.todoList.forEach(todo => {
      if (todo.isCompleted) {
        appendTodoInHTML(todo);
      }
    });
  }
}

// Toggle Todo completed
function toggleTodo(event) {
  const todoItem = event.target.parentElement.parentElement;
  const todoId = parseInt(todoItem.getAttribute('data-id'));
  const todos = loadTodos();
  todos.todoList.forEach(todo => {
    if (todo.id === todoId) {
      todo.isCompleted = !todo.isCompleted;
    }
  });
  refreshTodos(todos);
  todoListUl.innerHTML = '';
  todos.todoList.forEach(todo => {
    appendTodoInHTML(todo);
  });
}

/////////////// Event Listeners

// Filter button event
filterButton.forEach(btn => {
  btn.addEventListener('click', executeFilterAction);
});

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
  filterButtons.style.display = 'none';
} else {
  todos.todoList.forEach(todo => {
    appendTodoInHTML(todo);
  });
}
