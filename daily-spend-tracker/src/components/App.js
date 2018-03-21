import React from "react";
import Header from './Header';
import Spend from './Spend';
import Budget from './Budget';
import defaultBudgetItems from "../default-budget-items";
import BudgetItem from "./BudgetItem";

class App extends React.Component {
	state = {
		budgets: {},
		spends: {}
	};

	addBudgetItem = budgetItem => {
		console.log("adding a budget item");
		// 1. Take a copy of the existing state
		const budgets = {...this.state.budgets};
		// 2. Add our new budget to budgets
		budgets[`budget${Date.now()}`] = budgetItem;
		// 3. Set the new budgets object to state
		this.setState({
			budgets: budgets
		});
	}

	loadDefaultBudgetItems = () => {
		this.setState({ budgets: defaultBudgetItems });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Spend Tracker" />
					<ul className="fishes">
						{Object.keys(this.state.budgets).map(key => (
							<BudgetItem key={key} details={this.state.budgets[key]} />
						))}
					</ul>
				</div>
				<Spend />
				<Budget addBudgetItem={this.addBudgetItem} loadDefaultBudgetItems={this.loadDefaultBudgetItems} />
			</div>
		)
	}
}

export default App;