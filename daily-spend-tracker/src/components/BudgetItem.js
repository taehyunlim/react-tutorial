import React from "react";
import { formatPrice } from '../helpers';

class BudgetItem extends React.Component {
  priceRef = React.createRef();
  render() {
    const {emoji, name, desc, payment, budget, price} = this.props.details;
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
        <button type="submit" disabled={!isAvailable} onClick={() => this.props.addToSpends(this.props.index, this.priceRef.value.value) }>
          {isAvailable ? '+' : 'N/A'}
        </button>
      </li>           
    )
  }
}

export default BudgetItem;