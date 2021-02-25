import React from "react";
import Layout from "./Layout";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    );
  }
}

export default App;
