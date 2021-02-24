import React, { CSSProperties } from "react";

class DetailView extends React.Component {
  render() {
    return (
      <div style={detail}>
        <img style={detailImage} src="../../assets/forest.jpg"></img>
      </div>
    );
  }
}

const detail: CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
};
const detailImage: CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

export default DetailView;
