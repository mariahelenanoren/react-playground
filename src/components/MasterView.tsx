import React, { CSSProperties } from "react";
import NavigationItem from "./NavigationItem";

export default function MasterView(props: Props) {
  return (
    <div style={master}>
      {props.navIds.map((value) => (
        <NavigationItem id={value} key={value} />
      ))}
    </div>
  );
}

interface Props {
  navIds: string[];
}

const master: CSSProperties = {
  display: "flex",
  height: "100%",
  padding: "0.5rem",
  flexDirection: "column",
};
