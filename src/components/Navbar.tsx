import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div style={navbar}>
        <Link to="/" style={navLink}>
          <h1 style={navbarTitle}>React Playground</h1>
        </Link>
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

const navLink: CSSProperties = {
  textDecoration: "none",
  color: "#ffff",
};

const navbarTitle: CSSProperties = {
  fontSize: "1rem",
};

export default Navbar;
