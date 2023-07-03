import { TodoUtils } from "./TodoUtils.js";

const todoUtils = new TodoUtils();

const darkMode = document.querySelector('#dark-mode');
const textTodo = document.querySelector('#input-text-todo');

darkMode.addEventListener('change', todoUtils.toggleTheme);

const createTodo = document.querySelector('#create-todo');

createTodo.addEventListener('click',() => todoUtils.createTodo(textTodo, createTodo));

todoUtils.activeTodo();
todoUtils.allTodo();
todoUtils.allTodoComplete();
todoUtils.clearAllTodoComplete();

