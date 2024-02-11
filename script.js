// Define a class for the todo-list-item custom element
class TodoListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<style>todo-list {
        display: block;
        border: 2px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        background-color: #f9f9f9;
        margin-bottom: 20px;
      }
      
      /* Style the todo list items as list items */
      todo-list-item {
        display: list-item;
        margin-bottom: 10px;
        list-style-type: none; /* Remove default bullet points */
      }
      
      /* Style the label containing the checkbox and text */
      todo-list-item label {
        display: flex;
        align-items: center;
      }
      
      /* Style the checkbox */
      todo-list-item input[type="checkbox"] {
        margin-right: 10px;
      }
      
      /* Style the todo text */
      todo-list-item span {
        font-size: 16px;
      }
     </style>      
        <label>
          <input type="checkbox">
          <span><slot></slot></span>
        </label>
      `;
    this.checkbox = this.shadowRoot.querySelector('input[type="checkbox"]');
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
  }

  addTodoItem(text, checked = false) {
    const todoItem = document.createElement("todo-list-item");
    todoItem.textContent = text;
    this.container.appendChild(todoItem);
    // Ensure the checkbox is checked if specified
    if (checked) {
      todoItem.setAttribute("checked", ""); // Setting custom attribute 'checked'
    }
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
