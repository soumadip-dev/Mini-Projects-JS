# Task Management App

A simple and intuitive task management application for adding and managing TODOs.

![Task Management App](https://github.com/soumadip-dev/Mini-Projects-JS/blob/main/Task_Management_app/Screenshot.png)

## Features
- Add new TODOs
- View a list of TODOs
- Edit existing TODOs
- Delete TODOs
- Filter TODOs by status (All, Pending, Completed)

## Installation
1. Clone the repository.
2. Open `index.html` in your browser.

## Usage
1. **Add a New TODO:** Enter your task in the input field and click the "Add Task" button or press Enter.
2. **Edit a TODO:** Click the "Edit" button next to the task you want to modify. Enter the new task value in the prompt.
3. **Delete a TODO:** Click the "Delete" button next to the task you want to remove.
4. **Mark as Completed/Reset:** Click the "Completed" button to mark a task as completed, or the "Reset" button to revert its status.
5. **Filter TODOs:** Use the filter buttons to view tasks based on their completion status.

## Code Overview
- **`loadTasks()`**: Retrieves tasks from localStorage or initializes an empty task list.
- **`refreshTasks(tasks)`**: Updates localStorage with the current task list.
- **`addTaskToLocalStorage(task)`**: Adds a new task to localStorage.
- **`appendTaskToHtml(task)`**: Appends a task to the HTML task list.
- **`executeFilterAction(event)`**: Filters tasks based on the selected status.
- **`toggleTask(event)`**: Toggles the completion status of a task.
- **`resetHtmlTasks(tasks)`**: Resets the task list and re-renders tasks.
- **`editTask(event)`**: Edits an existing task.
- **`deleteTask(event)`**: Deletes a task from the list.
- **`addNewTask()`**: Adds a new task from the input field.

## PRD
Read about my first Product Requirement Document (PRD) on the TODO app: [My First PRD: An Exciting Milestone in My Journey](https://web-dev-soumadip.hashnode.dev/my-first-prd-an-exciting-milestone-in-my-journey?ref=twitter-share)
