import React, { CSSProperties } from "react";
import MasterView from "./MasterView";
import DetailView from "./DetailView";
import { Switch, Route } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div style={contentContainer}>
        <Switch>
          <Route path="/" component={MasterView} exact />
          <Route path="details" component={DetailView} />
        </Switch>
      </div>
    );
  }
}

const contentContainer: CSSProperties = {
  height: "calc(100% - 4rem)",
};

export default Content;
