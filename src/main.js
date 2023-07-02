import { TodoUtils } from "./TodoUtils.js";

const todoUtils = new TodoUtils();

const darkMode = document.querySelector('#dark-mode');
const textTodo = document.querySelector('#input-text-todo');

todoUtils.createTodo(textTodo);
darkMode.addEventListener('change', todoUtils.toggleTheme);

todoUtils.activeTodo();
todoUtils.allTodo();
todoUtils.allTodoComplete();
todoUtils.clearAllTodoComplete();

