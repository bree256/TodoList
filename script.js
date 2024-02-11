// class RootComponent extends HTMLElement {
//   name = "app-root";
//   constructor() {
//     super();
//     this.shadow = this.attachShadow({ mode: "open" });
//     this.shadow.adoptedStyleSheets = [styles];
//   }
// }

// // Define a class for to-do items
// class TodoItem extends RootComponent {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     this.render();
//   }

//   render() {
//     const item = this.getAttribute("item");
//     const checked = this.getAttribute("checked");
//     this.shadow.innerHTML = `<input type="checkbox" ${
//       checked == "true" ? "checked" : ""
//     }>${item}</input>`;
//   }

//   toggle() {
//     this.checked = !this.checked;
//   }
// }

// // Define a class for the to-do list
// class TodoList extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this.items = [];
//   }

//   connectedCallback() {
//     this.render();
//   }

//   addItem(description) {
//     this.items.push({ description, checked: false });
//     this.render();
//   }

//   toggleItem(index) {
//     this.items[index].checked = !this.items[index].checked;
//     this.render();
//   }

//   render() {
//     const listElement = document.createElement("ul");

//     this.items.forEach((item, index) => {
//       const listItem = document.createElement("li");
//       const todoItem = document.createElement("todo-item");
//       todoItem.description = item.description;
//       todoItem.checked = item.checked;
//       todoItem.addEventListener("change", () => {
//         this.toggleItem(index);
//       });
//       listItem.appendChild(todoItem);
//       listElement.appendChild(listItem);
//     });

//     this.shadowRoot.innerHTML = "";
//     this.shadowRoot.appendChild(listElement);
//   }
// }

// // Define pre-defined activities
// const predefinedActivities = [
//   "Mediation",
//   "Pickup Anna",
//   "SetUp Meeting with Jay",
//   "Finish daily Ui",
//   "second edits on article",
//   "Email Chris",
// ];

// // Register custom elements
// customElements.define("todo-item", TodoItem);
// customElements.define("todo-list", TodoList);

// // // Create a new instance of TodoList with pre-defined activities
// // const todoList = document.createElement("todo-list");
// // predefinedActivities.forEach((activity) => {
// //   todoList.addItem(activity);
// // });

// // const mainElement = document.querySelector("main");
// // mainElement.appendChild(todoList);

// // const listElement = document.createElement("ul");
// // listElement.style.listStyleType = "none";
// // listElement.style.padding = "0";
