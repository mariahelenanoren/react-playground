import React, { CSSProperties } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div style={navbar}>
        <h1 style={navbarTitle}>React Playground</h1>
      </div>
    );
  }
}

const navbar: CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "0 1.2rem",
  background: "black",
  height: "4rem",
};

const navbarTitle: CSSProperties = {
  fontSize: "1rem",
};

export default Navbar;
