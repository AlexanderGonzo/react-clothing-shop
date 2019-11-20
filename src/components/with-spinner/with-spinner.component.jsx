import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//Component that takes in a component 
//will return a spinner if the component isLoading, else return component
const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
