import React, { CSSProperties } from "react";
import NavigationItem from "./NavigationItem";
import ErrorBoundary from "./ErrorBoundary";

export default function MasterView(props: Props) {
  return (
    <div style={master}>
      <ErrorBoundary>
        {props.navIds.map((value) => (
          <NavigationItem id={value} key={value} />
        ))}
      </ErrorBoundary>
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
  background: "#363636",
};
