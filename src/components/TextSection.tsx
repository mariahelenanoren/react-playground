import React, { CSSProperties } from "react";

export default function TextSection(props: Props) {
  return (
    <div style={textContainer}>
      <p style={text}>{props.text}</p>
    </div>
  );
}

interface Props {
  text: string;
}

const textContainer: CSSProperties = {
  padding: "0.5rem 0",
};

const text: CSSProperties = {
  margin: "0",
  fontSize: "0.8rem",
};
