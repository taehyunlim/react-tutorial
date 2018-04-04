import React from "react";

class AddBudgetItemForm extends React.Component {
  nameRef = React.createRef();
  budgetRef = React.createRef();
  emojiRef = React.createRef();
  descRef = React.createRef();

  createBudgetItem = e => {
    // 1. Stop the form from submitting (default)
    e.preventDefault();
    const budgetItem = {
      name: this.nameRef.value.value, 
      budget: parseFloat(this.budgetRef.value.value), 
      emoji: this.emojiRef.value.value, 
      desc: this.descRef.value.value
    }
    this.props.addBudgetItem(budgetItem);
    // Refresh the form
    e.currentTarget.reset();
  }
	render() {
		return (
			<form className="fish-edit" onSubmit={this.createBudgetItem}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Item" />
        <input name="budget" ref={this.budgetRef} type="text" placeholder="Amount" />
        <input name="emoji" ref={this.emojiRef} type="text" placeholder="Emoji" />
        <input name="desc" ref={this.descRef} type="textarea" placeholder="Description" />
        <button type="submit">+ Add Budget Item</button>
      </form>
		)
	}
}

export default AddBudgetItemForm