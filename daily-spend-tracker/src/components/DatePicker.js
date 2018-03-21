import React, { Fragment } from 'react'; 
import moment from 'moment';

class DatePicker extends React.Component {
	// // Call constructor method which runs before the component is created
	// constructor() {
	// 	// Call super to extend the React.Component first
	// 	super();
	// 	this.goToDashboard = this.goToDashboard.bind(this) // Overwrites the method to reference {this} inside the goToDashboard scope as the DatePicker instance
	// }

	// React method for ref object instance
	dateInput = React.createRef();
	
	// IMPORTANT: Use Arrow function when using {this} inside a custom method
	goToDashboard = event => {
		// 1. Stop the form from submitting (default)
		event.preventDefault();
		// 2. get the text from the input
		const dateInputVal = moment(this.dateInput.value.value).format('YYYY/MM/DD');
		// 3. Change the page to /date/:input
		this.props.history.push(`/date/${dateInputVal}`);
	}

	componentDidMount() {
		console.log('Mounted');
		// console.log(this);
	}

	render() {
		return(
			<form className="store-selector" onSubmit={this.goToDashboard}>
				<h2>Select the date</h2>
				<input 
					type="date" 
					ref={this.dateInput}
					required
					defaultValue={moment().format('YYYY/MM/DD')} 
				/>
				<button type="submit">Go to Dashboard -></button>
			</form>
		)	
	}
}

export default DatePicker;