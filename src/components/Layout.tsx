import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import ViewContainer from "./ViewContainer";
import { BrowserRouter as BrowserRouter } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <div style={mainLayout}>
        <BrowserRouter>
          <Navbar />
          <ViewContainer />
        </BrowserRouter>
      </div>
    );
  }
}

const mainLayout: CSSProperties = {
  height: "100%",
  color: "white",
};

export default Layout;
