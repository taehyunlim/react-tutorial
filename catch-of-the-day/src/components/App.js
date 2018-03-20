import React from "react";
import Header from './Header';
import Spend from './Spend';
import Budget from './Budget';

class App extends React.Component {
	state = {
		budgets: {},
		expenses: {}
	};

	addBudgetItem = budgetItem => {
		console.log("adding a budget item");
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Spend Tracker" />
				</div>
				<Spend />
				<Budget addBudgetItem={this.addBudgetItem} />
			</div>
		)
	}
}

export default App;