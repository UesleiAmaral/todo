import { Todo } from "./Todo.js";

export class TodoUtils extends Todo{
  constructor() {
    super();

  }

  saveTodo(dataTodo) {
    let data = {
      id: this.data.length,
      text: dataTodo,
      completed: false,
    };

    this.data.push(data);
    this.save();
  };

  createTodo(data, createTodo) {
    if (createTodo.checked) {
      document.querySelector('.label-check-create').classList.toggle('display-none');

      setTimeout(() => {
        document.querySelector('.label-check-create').classList.toggle('display-none');
        createTodo.checked = false;
        data.value = '';
      }, 500);

      if (data.value !== '') {
        this.saveTodo(data.value);
        this.update();
        this.countTodoItems();
        return;

      };
      alert('Vazio não é uma tarefa!');

    };
  };

  toggleTheme() {
    document.querySelector(".img-background-light").classList.toggle("display-none");
    document.querySelector(".img-background-dark").classList.toggle("display-none");
    document.querySelector(".img-moon").classList.toggle("display-none");
    document.querySelector(".img-sun").classList.toggle("display-none");

    document.querySelector("html").classList.toggle("dark-mode");
  };

  allTodo() {
    const buttonAllTodo = document.querySelectorAll('.button-view-all-todo');

    buttonAllTodo.forEach(button => {
      button.classList.add('active');
      button.addEventListener('click', () => {
        document.querySelector('.button-view-completed-todo').classList.remove("active");
        document.querySelector('.button-view-active-todo').classList.remove("active");
        this.update();
      });

     })

  };

  activeTodo() {
    const buttonActiveTodo = document.querySelectorAll('.button-view-active-todo');

    buttonActiveTodo.forEach((button) => {

      button.addEventListener('click', () => {
        this.root.innerHTML = "";
        console.log(button);

        button.classList.add("active");
        document.querySelector('.button-view-completed-todo').classList.remove("active");
        document.querySelector('.button-view-all-todo').classList.remove("active");
        this.data.forEach(todo => {
          if (!todo.completed) {
            const elementTodo = this.createElementTodo(todo.text, todo.id);

            this.select(elementTodo.firstElementChild.children[0].children[0].firstElementChild);
            this.delete(elementTodo.lastElementChild, elementTodo.innerText.trim());
            this.root.prepend(elementTodo);

          };
        });
      });
     });
  };

  allTodoComplete() {
    const buttonActiveTodo = document.querySelectorAll('.button-view-completed-todo');

    buttonActiveTodo.forEach((button) => { 
      button.addEventListener('click', () => {
        this.root.innerHTML = "";
        button.classList.add("active");
        document.querySelector('.button-view-all-todo').classList.remove("active");
        document.querySelector('.button-view-active-todo').classList.remove("active");


        this.data.forEach(todo => {
          if (todo.completed) {
            const elementTodo = this.createElementTodo(todo.text, todo.id);

            elementTodo.firstElementChild.children[0].classList.toggle("display-none");
            elementTodo.children[1].classList.toggle("completedTodo");


            this.select(elementTodo.firstElementChild.children[0].children[0].firstElementChild);
            this.delete(elementTodo.lastElementChild, elementTodo.innerText.trim());
            this.root.prepend(elementTodo);

          };
        });
      });
    });


  };

  clearAllTodoComplete() {
    const buttonClearAllTodo = document.querySelector('.clear-items-completed');

    buttonClearAllTodo.addEventListener('click', () => {
      this.data.forEach(todo => {
        if (todo.completed) {
          this.data = this.data.filter((todo) => todo.completed !== true);
          this.save();
          this.update();
          this.countTodoItems();

        };
      });
    });
  };
};
