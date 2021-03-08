import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import ViewContainer from "./ViewContainer";
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext";

class Layout extends React.Component {
  render() {
    return (
      <div style={mainLayout}>
        <ThemeContext.Provider value={themes.dark}>
          <BrowserRouter>
            <Navbar />
            <ViewContainer />
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    );
  }
}

const mainLayout: CSSProperties = {
  height: "100%",
  color: "white",
};

export default Layout;
