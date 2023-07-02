export class Todo {
  constructor() {
    this.root = document.querySelector(".section-todo-list");
    this.load();
    this.update();
    this.countTodoItems();
  };

  load() {
    this.data = JSON.parse(localStorage.getItem("@listTodo")) || [];
  };

  save() {
    localStorage.setItem("@listTodo", JSON.stringify(this.data));
  }

  update() {
    this.root.innerHTML = "";
    this.addAllTodo();
  };

  delete(buttonDelete, deletedItem) {
    buttonDelete.addEventListener('click', () => {

      this.data = this.data.filter((todo) => todo.text !== deletedItem);
      this.save()

      buttonDelete.parentNode.remove();
      this.countTodoItems();
    });

  };

  select(item) {
    item.addEventListener('click', () => {

      if (item.checked) {

        this.data.forEach((todo) => {
          if (todo.text === item.parentNode.parentNode.parentNode.parentNode.innerText) {
            if (todo.completed) {
              todo.completed = false;

              return;

            };
            todo.completed = true;

          };
        });
        this.save()
        this.update();
        item.checked = !item.checked;
      };
    });
  };

  addAllTodo() {
    this.data.forEach((todo) => {
      const elementTodo = this.createElementTodo(todo.text, todo.id);

      this.select(elementTodo.firstElementChild.children[0].children[0].control);

      if (todo.completed) {
        elementTodo.firstElementChild.children[0].classList.toggle("display-none");
        elementTodo.children[1].classList.toggle("completedTodo");
      };

      this.delete(elementTodo.lastElementChild, elementTodo.innerText.trim());
      this.root.prepend(elementTodo);
    });
  };

  createElementTodo(text, id) {
    const todo = document.createElement("section");
    todo.classList.add("section-todo-item");

    const element = `
    <section class="section-border">
      <section class="label-check label-check-todo display-none">
        <label for="item-todo${id}">
          <input type="checkbox" name="item-todo" id="item-todo${id}">
          <img src="./assets/images/icon-check.svg" alt="icon check">
        </label>
      </section>
    </section>
    <p class="todo-item-text">${text}</p>

    <button class="delete-todo-item"><img src="./assets/images/icon-cross.svg" alt="icon cross"></button>
  `;

    todo.innerHTML = element;
    return todo;
  };

  countTodoItems() {
    document.querySelector(
      ".count-items"
    ).innerText = `${this.data.length} items left`;
    this.update();
  };

};
