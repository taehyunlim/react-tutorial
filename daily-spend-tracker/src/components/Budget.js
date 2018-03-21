import React from "react";
import AddBudgetItemForm from "./AddBudgetItemForm";

class Budget extends React.Component {
	render() {
		return (
			<div className="budget">
				<h2>Budget Items</h2>
				<AddBudgetItemForm addBudgetItem={this.props.addBudgetItem} />
				<button onClick={this.props.loadDefaultBudgetItems}>Load default budget items</button>
			</div>      
		)
	}
}

export default Budget