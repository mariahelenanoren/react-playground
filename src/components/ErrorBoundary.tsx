import React, { CSSProperties } from "react";

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
        <div style={errorContainer}>
          <p>Something went wrong...</p>
          <button style={reloadButton} onClick={this.navigateBack}>
            Go back
          </button>
        </div>
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
  color: "white",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
};

const reloadButton: CSSProperties = {
  padding: "0.5rem 1rem",
  border: "1.5px solid black",
  backgroundColor: "black",
  color: "white",
};

export default ErrorBoundary;
