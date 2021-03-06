import React, { CSSProperties } from "react";
import NavigationItem from "./NavigationItem";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MasterView(props: Props) {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={{ ...master, backgroundColor: value.secondaryColor }}>
          <ErrorBoundary>
            {props.navIds.map((value) => (
              <NavigationItem id={value} key={value} />
            ))}
          </ErrorBoundary>
        </div>
      )}
    </ThemeContext.Consumer>
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
