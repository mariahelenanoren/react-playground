import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import Content from "./ViewContainer";
import { BrowserRouter as BrowserRouter } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div style={mainLayout}>
        <BrowserRouter>
          <Navbar />
          <Content />
        </BrowserRouter>
      </div>
    );
  }
}

const mainLayout: CSSProperties = {
  height: "100%",
  background: "#363636",
  color: "white",
};

export default Layout;
