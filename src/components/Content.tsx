import React, { CSSProperties } from "react";
import SectionItem from "./SectionItem";

interface ItemsProps {
  item: [
    {
      title: string;
      image: HTMLImageElement;
    }
  ];
}
class Content extends React.Component {
  render() {
    return (
      <div style={contentContainer}>
        <SectionItem title="forest" image="../../assets/forest.jpg" />
        <SectionItem title="sky" image="../../assets/sky.jpg" />
        <SectionItem title="desert" image="../../assets/desert.jpg" />
      </div>
    );
  }
}

const contentContainer: CSSProperties = {
  display: "flex",
  height: "100%",
  maxHeight: "calc(100% - 4rem)",
  padding: "0.5rem",
  flexDirection: "column",
};

export default Content;
