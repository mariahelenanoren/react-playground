import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ThemeContext, themes } from "../contexts/ThemeContext";

interface Props {
  toggleTheme: () => void;
}
class Navbar extends React.Component<Props> {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (
          <div
            style={{
              ...navbar,
              backgroundColor: value.primaryColor,
              color: value.textColor,
            }}
          >
            <Link to="/" style={navLink}>
              <h1 style={navbarTitle}>React Playground</h1>
            </Link>
            <button
              style={{
                ...toggleButton,
                backgroundColor: value.textColor,
                color: value.primaryColor,
              }}
              onClick={this.props.toggleTheme}
            >
              {value === themes.light ? "Dark mode" : "Light mode"}
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

const navbar: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 1.2rem",
  height: "4rem",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
  zIndex: 200,
};

const navLink: CSSProperties = {
  textDecoration: "none",
  color: "inherit",
};

const navbarTitle: CSSProperties = {
  fontSize: "1rem",
};

const toggleButton: CSSProperties = {
  padding: "0.5rem 1rem",
  border: "none",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
};

export default Navbar;
