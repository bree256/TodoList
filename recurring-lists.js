class RecurringLists extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        /* Add styles from style.css here */
        div#first {
          display: flex;
        }
        
        div#second {
          display: flex;
        }
        
        p {
          height: 40px;
          width: 113px;
          text-align: center;
          padding: 10px;
        }
        
        p.daily {
          background-color: #eff396;
          border-radius: 25px;
          margin-left: 20px;
        }
        
        p.weekly {
          background-color: red;
          border-radius: 25px;
          margin-left: 15px;
        }
        
        p.monthly {
          background-color: #65b741;
          border-radius: 25px;
          margin-left: 20px;
        }
        
        p.occasional {
          background-color: #f3ccf3;
          border-radius: 25px;
          margin-left: 15px;
        }
      </style>
      <div id="first">
        <p class="daily">Daily</p>
        <p class="weekly">Weekly</p>
      </div>
      <div id="second">
        <p class="monthly">Monthly</p>
        <p class="occasional">Occasional</p>
      </div>
    `;
  }
}
customElements.define("recurring-lists", RecurringLists);
