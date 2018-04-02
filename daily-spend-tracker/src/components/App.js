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

	addToSpends = (key, price) => {
		const priceInt = parseInt(price);
		// 1. take a copy of state
		const spends = { ...this.state.spends };
		// 2. Either add the price to the spends, or update the number in the spends
		spends[key] ? spends[key] = parseInt(spends[key]) + priceInt : spends[key] = priceInt;
		// 3. Call setState to update the state object
		this.setState({ spends });
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Spend Tracker" />
					<ul className="fishes">
						{Object.keys(this.state.budgets).map(key => (
							// key={key} and index={key} both need to be passed down for the component to access the prop (second one)
							<BudgetItem key={key} index={key} details={this.state.budgets[key]} addToSpends={this.addToSpends} />
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