import React, { CSSProperties } from "react";
import NavigationItem from "./NavigationItem";

interface Props {}

interface State {
  id: string[];
}

export default function MasterView() {
  const navIds = ["forest", "sky", "desert"];

  return (
    <div style={master}>
      {navIds.map((value) => (
        <NavigationItem id={value} key={value} />
      ))}
    </div>
  );
}

const master: CSSProperties = {
  display: "flex",
  height: "100%",
  padding: "0.5rem",
  flexDirection: "column",
};
