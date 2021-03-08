import React, { CSSProperties } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  navigateBack() {
    history.back();
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <ThemeContext.Consumer>
          {(value) => (
            <div style={{ ...errorContainer, color: value.textColor }}>
              <p>Something went wrong...</p>
              <button
                style={{
                  ...reloadButton,
                  backgroundColor: value.textColor,
                  color: value.primaryColor,
                }}
                onClick={this.navigateBack}
              >
                Go back
              </button>
            </div>
          )}
        </ThemeContext.Consumer>
      );
    }

    return this.props.children;
  }
}

interface Props {}

interface State {
  hasError: boolean;
}

const errorContainer: CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
};

const reloadButton: CSSProperties = {
  padding: "0.5rem 1rem",
  border: "1.5px solid black",
  backgroundColor: "black",
};

export default ErrorBoundary;
