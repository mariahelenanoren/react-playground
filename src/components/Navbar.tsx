import React, { CSSProperties } from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div style={navbar}>
        <h1>React Playground</h1>;
      </div>
    );
  }
}

const navbar: CSSProperties = {
  background: "black",
};

export default Navbar;
