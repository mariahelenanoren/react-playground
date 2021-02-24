import React, { CSSProperties } from "react";
import MasterView from "./MasterView";
import DetailView from "./DetailView";

class Content extends React.Component {
  render() {
    return (
      <div style={contentContainer}>
        <MasterView />
      </div>
    );
  }
}

const contentContainer: CSSProperties = {
  height: "calc(100% - 4rem)",
};

export default Content;
