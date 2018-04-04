import React from "react";
import { formatPrice } from '../helpers';

class BudgetItem extends React.Component {
  priceRef = React.createRef();
  paymentRef = React.createRef();

  render() {
    const {budget, desc, emoji, name, payment } = this.props.details;
    const isAvailable = budget > 1000;
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {name}
          <span role="img" aria-label={name}>
            {emoji}
          </span>
        </h3>
        <input name="amount" ref={this.priceRef} type="text" placeholder="Amount" />
        <select name="payment" ref={this.paymentRef}>
          {/* <option value='' disabled>Paid via</option> */}
          <option value="creditCard">Credit Card</option>
          <option value="cash">Cash</option>
          <option value="venmo">Venmo</option>
          <option value="otther">Other</option>
        </select>
        <button type="submit" disabled={!isAvailable} onClick={() => this.props.addToSpends(this.props.index, this.priceRef.value.value, this.paymentRef.value.value) }>
          {isAvailable ? '+' : 'N/A'}
        </button>
      </li>           
    )
  }
}

export default BudgetItem;