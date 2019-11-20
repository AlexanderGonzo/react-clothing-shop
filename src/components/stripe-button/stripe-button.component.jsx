import React from "react";
import StripeCheckout from "react-stripe-checkout";
/*TODO:
 * Add Validation for Address, Zip, and City
 */
const CURRENCY = "USD";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ZX5bTW2UeGUqxkva3ViWKMpq00u5TFakEG";

  const onToken = token => {
    console.log(token);
    alert("Thank You! Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store Ltd."
      currency={CURRENCY}
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      zipCode
      allowRememberMe
    />
  );
};
export default StripeCheckoutButton;
