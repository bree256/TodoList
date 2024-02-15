class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const color = this.getAttribute("color");
    const button = document.createElement("button");
    button.innerHTML = `
        <slot></slot>
       
        <style>
           button{
               width: 130px;
               height: 40px;
               border-radius: 35px;
               border: none;
               font-family: Arial, Helvetica, sans-serif;
               color:#A8A8A8;
               font-size: 18px;
               margin-top: 20px;
               margin-left:20px;
           }
        </style>        
        `;
    button.style.background = color;
    shadow.appendChild(button);
  }
}

customElements.define("button-comp", ButtonComponent);
