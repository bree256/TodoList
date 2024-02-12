// Define a class for the todo-list-item custom element
class TodoListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <label>
          <input type="checkbox">
          <span><slot></slot></span>
        </label>
      `;
    this.checkbox = this.shadowRoot.querySelector('input[type="checkbox"]');
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    this.checkbox.addEventListener("change", () => {
      // Dispatch a custom event when checkbox state changes
      this.dispatchEvent(
        new CustomEvent("todo-checked", { detail: this.checkbox.checked })
      );
    });
  }
}

// Define a class for the todo-list custom element
class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <div id="todoList"></div>
      `;
    this.container = this.shadowRoot.getElementById("todoList");
    this.progressText = document.querySelector(".html + h5");
  }

  addTodoItem(text, checked = false) {
    const todoItem = document.createElement("todo-list-item");
    todoItem.textContent = text;
    this.container.appendChild(todoItem);
    // Ensure the checkbox is checked if specified
    if (checked) {
      todoItem.setAttribute("checked", ""); // Setting custom attribute 'checked'
    }
    // Update progress bar
    this.updateProgressBar();
  }

  updateProgressBar() {
    const totalItems = this.container.children.length;
    const completedItems = this.container.querySelectorAll(
      "todo-list-item[checked]"
    ).length;
    const completionPercentage = (completedItems / totalItems) * 100;
    const progressBar = document.querySelector(".html");
    progressBar.style.width = `${completionPercentage}%`;
    this.progressText.textContent = `${Math.round(
      completionPercentage
    )}% complete`;
  }
}

// Define custom elements
customElements.define("todo-list-item", TodoListItem);
customElements.define("todo-list", TodoList);

// Usage
const todoList = document.getElementById("todoList");

// Predefined todo activities
const predefinedTodos = [
  { text: "Meditation", checked: true },
  { text: "Pickup Anna", checked: false },
  { text: "SetUp Meeting with Jay", checked: false },
  { text: "Finish daily Ui", checked: false },
  { text: "Second edits on article", checked: false },
  { text: "Email Chris", checked: true },
];

// Add predefined todo items to the list
predefinedTodos.forEach((todo) => {
  todoList.addTodoItem(todo.text, todo.checked);
});
