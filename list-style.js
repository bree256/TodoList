const styles = new CSSStyleSheet();
styles.replaceSync(`
todo-list {
    display: block;
    margin-bottom: 20px;
  }
  
 
  label {
    display: list-item;
    margin-bottom: 25px;
    list-style-type: none; 
  }
  
  
label {
    display: flex;
    align-items: center;
  }
  
  label input[type="checkbox"]
   {
    margin-right: 10px;
    border-radius: 50%;
  }
  
  label span {
    font-size: 20px;
    font-weight:100;
  }
`);
