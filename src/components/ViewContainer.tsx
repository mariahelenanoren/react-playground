import React, { CSSProperties, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
const MasterView = React.lazy(() => import("./MasterView"));
const DetailView = React.lazy(() => import("./DetailView"));

class ViewContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      navIds: ["forest", "sky", "desert"],
    };
  }

  render() {
    return (
      <div style={contentContainer}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact>
              <MasterView navIds={this.state.navIds} />
            </Route>
            <ErrorBoundary>
              {this.state.navIds.map((id) => (
                <Route path="/:name?" key={id} component={DetailView} />
              ))}
            </ErrorBoundary>
            <h2>
              You've tried to access a page which doesn't exist – error 404
            </h2>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

interface Props {}

interface State {
  navIds: string[];
}

const contentContainer: CSSProperties = {
  height: "calc(100% - 4rem)",
};

export default ViewContainer;
