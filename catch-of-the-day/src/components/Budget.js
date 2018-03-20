import React from "react";
import AddBudgetForm from "./AddBudgetForm";

class Budget extends React.Component {
	render() {
		return (
			<div className="budget">
				<h2>Budget</h2>
				<AddBudgetForm/>
			</div>      
		)
	}
}

export default Budget