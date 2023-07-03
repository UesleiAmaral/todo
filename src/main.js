import { TodoUtils } from "./TodoUtils.js";

const todoUtils = new TodoUtils();

const darkMode = document.querySelector('#dark-mode');
const textTodo = document.querySelector('#input-text-todo');

//todoUtils.createTodo(textTodo);
darkMode.addEventListener('change', todoUtils.toggleTheme);

const createTodo = document.querySelector('#create-todo');

createTodo.addEventListener('click', () => {
  if (createTodo.checked) {
    document.querySelector('.label-check-create').classList.toggle('display-none');

    setTimeout(() => {
      document.querySelector('.label-check-create').classList.toggle('display-none');
      createTodo.checked = false;
      textTodo.value = '';
    }, 500);

    if (textTodo.value !== '') {
      todoUtils.saveTodo(textTodo.value);
      todoUtils.update();
      todoUtils.countTodoItems();
      return;

    };
    alert('Vazio não é uma tarefa!');

  };
});

todoUtils.activeTodo();
todoUtils.allTodo();
todoUtils.allTodoComplete();
todoUtils.clearAllTodoComplete();

