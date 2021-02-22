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
  background: "grey",
  height: "100%",
};

export default Layout;
