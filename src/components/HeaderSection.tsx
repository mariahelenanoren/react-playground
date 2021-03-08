import React, { CSSProperties } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function HeaderSection(props: Props) {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={headerContainer}>
          <h2 style={title}>{props.title}</h2>
          <button
            onClick={props.toggleModal}
            style={{
              ...button,
              backgroundColor: value.primaryColor,
              color: value.textColor,
            }}
          >
            Open Modal
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

interface Props {
  title: string;
  toggleModal: () => void;
}

const headerContainer: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const title: CSSProperties = {
  margin: 0,
  fontSize: "1.5rem",
  textTransform: "uppercase",
};

const button: CSSProperties = {
  padding: "0.5rem 1rem",
  border: "none",
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
};
