import React from "react";
import Header from "../Layout/Header";

function DefaultComponent({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DefaultComponent;
