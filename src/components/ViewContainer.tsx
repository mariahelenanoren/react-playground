import React, { CSSProperties } from "react";
import MasterView from "./MasterView";
import DetailView from "./DetailView";
import { Switch, Route, Router } from "react-router-dom";

class Content extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);

    this.state = {
      navIds: ["forest", "sky", "desert"],
    };
  }

  render() {
    return (
      <div style={contentContainer}>
        <Switch>
          <Route path="/" exact>
            <MasterView navIds={this.state.navIds} />
          </Route>
          {this.state.navIds.map((id) => (
            <Route path="/:name" component={DetailView} />
            /* <Route path={"/" + id} key={id}>
              <DetailView id={id} />
            </Route> */
          ))}
          <h2>You've tried to access a page which doesn't exist – error 404</h2>
        </Switch>
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

export default Content;
