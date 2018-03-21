import React from "react";
import { formatPrice } from '../helpers';

class BudgetItem extends React.Component {
  render() {
    const {emoji, name, desc, payment} = this.props.details;
    return (
      <li className="menu-fish">
        <h3 className="fish-name">
          {name}
          <span role="img" aria-label={name}>
            {emoji}
          </span>
        </h3>
      </li>           
    )
  }
}

export default BudgetItem;