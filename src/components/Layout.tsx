import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import Content from "./Content";

class Layout extends React.Component {
  render() {
    return (
      <div style={mainLayout}>
        <Navbar />
        <Content />
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
