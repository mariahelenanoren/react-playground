import React, { CSSProperties } from "react";
import SectionItem from "./NavigationItem";

class MasterView extends React.Component {
  render() {
    const e = "i";
    return (
      <div style={master}>
        <SectionItem title="forest" image="../../assets/forest.jpg" />
        <SectionItem title="sky" image="../../assets/sky.jpg" />
        <SectionItem title="desert" image="../../assets/desert.jpg" />
      </div>
    );
  }
}

const master: CSSProperties = {
  display: "flex",
  height: "100%",
  padding: "0.5rem",
  flexDirection: "column",
};

export default MasterView;
