import React, { CSSProperties } from "react";

export default function HeaderSection(props: Props) {
  return (
    <div style={headerContainer}>
      <h2 style={title}>{props.title}</h2>
      <button onClick={props.toggleModal} style={button}>
        Open Modal
      </button>
    </div>
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
  padding: "0.8rem 0",
};

const title: CSSProperties = {
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
