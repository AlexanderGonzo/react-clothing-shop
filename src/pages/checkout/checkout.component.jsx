import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="sub-total">CART TOTAL: ${total}</div>
    <div className="sub-total">TOTAL TAX: ${Math.floor(total * 0.08)}</div>
    <div className="sub-total">TOTAL SHIPPING: ${Math.floor(total * 0.03)}</div>
    <div className="total">
      ORDER TOTAL: ${Math.floor(total + total * 0.08 + total * 0.03)}
    </div>
    <div className="test-warning">
      *Test Card Information*
      <br />
      4242 4242 4242 4242 - EXP: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton
      price={Math.floor(total + total * 0.08 + total * 0.03)}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
