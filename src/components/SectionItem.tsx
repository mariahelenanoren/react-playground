import React, { CSSProperties } from "react";

interface SectionProps {
  title: string;
  image: string;
}

class SectionItem extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div style={section}>
        <h2></h2>
        <img></img>
      </div>
    );
  }
}

const section: CSSProperties = {
  background: "red",
};

export default SectionItem;
