import React from "react";

class AddBudgetForm extends React.Component {
  itemRef = React.createRef();
  amountRef = React.createRef();
  methodRef = React.createRef();
  noteRef = React.createRef();
  imageRef = React.createRef();

  createBudgetItem = e => {
    // 1. Stop the form from submitting (default)
    e.preventDefault();
    const budgetItem = {
      item: this.itemRef.value.value, 
      amount: parseFloat(this.amountRef.value.value), 
      method: this.methodRef.value.value, 
      note: this.noteRef.value.value, 
      image: this.imageRef.value.value, 
    }
    console.log(budgetItem);

  }
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createBudgetItem}>
        <input name="item" ref={this.itemRef} type="text" placeholder="Item" />
        <input name="amount" ref={this.amountRef} type="text" placeholder="Amount" />
        <select name="method" ref={this.methodRef}>
          {/* <option value='' disabled>Paid via</option> */}
          <option value="creditCard">Credit Card</option>
          <option value="cash">Cash</option>
          <option value="venmo">Venmo</option>
          <option value="otther">Other</option>
        </select>
        <textarea name="note" ref={this.noteRef} placeholder="Note"></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Budget Item</button>
      </form>
		)
	}
}

export default AddBudgetForm