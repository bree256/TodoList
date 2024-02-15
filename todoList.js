class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.checkedItems = 0;
    this.totalItems = 0;
    this.render();
  }

  connectedCallback() {
    // Increment totalItems when the todo-list element is added to the DOM
    this.totalItems++;
    this.render();
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      // If the checkbox is checked, increment checkedItems
      if (newValue !== null) {
        this.checkedItems++;
      } else {
        this.checkedItems--;
      }
      // Update the progress bar
      updateProgressBar(this.checkedItems, this.totalItems);
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="check">
        <input type="checkbox" class="box" />
        <label><slot></slot></label><br><br>
      </div>
      <style>
        div {
          display: flex;
          margin-left: 20px;
          margin-bottom: 15px;
        }
        input[type="checkbox"] {
          width: 1em;
          height: 2rem;
          accent-color: green;
        }
        input[type="checkbox"] {
          appearance: none;
          -webkit-appearance: none;
          display: flex;
          align-content: center;
          justify-content: center;
          font-size: 2rem;
          padding: 0.1rem;
          border: 0.10rem solid #b5eb80;
          border-radius: 50%;
        }
        input[type="checkbox"]::before {
          content: "";
          width: 1.4rem;
          height: 1.4rem;
          clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%);
          transform: scale(0);
          border-radius: 50%;
          background-color: #b5eb80;
        }
        input[type="checkbox"]:checked::before {
          transform: scale(1);
        }
        .check {
          display: flex;
        }
        label {
          color: #a8a8a8;
          font-size: 20px;
          font-weight: 100;
          margin-left: 8px;
        }
      </style>`;

    // Select the checkbox within the shadow DOM
    const checkbox = this.shadowRoot.querySelector(".box");

    // Add event listener to the checkbox if it exists
    if (checkbox) {
      checkbox.addEventListener("click", () => {
        if (checkbox.checked) {
          this.setAttribute("checked", "");
        } else {
          this.removeAttribute("checked");
        }
      });
    }
  }
}

customElements.define("todo-list", TodoList);

function updateProgressBar() {
  const totalItems = document.querySelectorAll("todo-list").length;
  const checkedItems = document.querySelectorAll("todo-list[checked]").length;
  const progressBar = document.getElementById("progressBar");
  const completionPercentage = (checkedItems / totalItems) * 100;
  progressBar.style.width = completionPercentage + "%";
  const completionText = document.querySelector("h5");
  completionText.textContent = completionPercentage.toFixed(0) + "% complete";
}

// Initialize the progress bar
updateProgressBar(0, 0);
