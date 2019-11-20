import React from "react";
import * as EmailValidator from "email-validator";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      billingAddress: "",
      addressTwo: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword,
      billingAddress,
      addressTwo,
      city,
      state,
      zipCode,
      phoneNumber
    } = this.state;

    if (password !== confirmPassword) {
      alert("passwords does not match!");
      return;
    }
    if (!email) {
      alert("email required!");
    } else if (!EmailValidator.validate(email)) {
      alert("Please enter a valid email address!");
    }
    if (zipCode.length < 5 || zipCode.length > 9) {
      alert("Invalid Zip Code!");
    }
    if (
      displayName.length === 100 ||
      billingAddress.length === 100 ||
      addressTwo.length === 100 ||
      city.length === 100
    ) {
      alert("Information given over max characters");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, {
        displayName,
        billingAddress,
        addressTwo,
        city,
        state,
        zipCode,
        phoneNumber
      });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        billingAddress: "",
        addressTwo: "",
        city: "",
        state: "",
        zipCode: "",
        phoneNumber: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      billingAddress,
      addressTwo,
      city,
      state,
      zipCode,
      phoneNumber
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Full Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <FormInput
            type="billingAddress"
            name="billingAddress"
            value={billingAddress}
            onChange={this.handleChange}
            label="Address 1"
            required
          />
          <FormInput
            type="addressTwo"
            name="addressTwo"
            value={addressTwo}
            onChange={this.handleChange}
            label="Address 2"
          />
          <FormInput
            type="city"
            name="city"
            value={city}
            onChange={this.handleChange}
            label="City"
            required
          />
          <FormInput
            type="state"
            name="state"
            value={state}
            onChange={this.handleChange}
            label="State"
            required
          />
          <FormInput
            type="zipCode"
            name="zipCode"
            value={zipCode}
            onChange={this.handleChange}
            label="Zip Code"
            required
          />
          <FormInput
            type="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
            label="Phone Number ###-###-####"
            required
          />
          <CustomButton type="submit"> SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
