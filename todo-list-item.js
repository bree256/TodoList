class TodoListItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
          <style>
            /* Add styles for todo-list-item here */
            label {
              display: flex;
              align-items: center;
            }
            label input[type="checkbox"] {
              margin-right: 10px;
              border-radius: 50%;
            }
            label span {
              font-size: 20px;
              font-weight: 100;
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

// Define custom element
customElements.define("todo-list-item", TodoListItem);
