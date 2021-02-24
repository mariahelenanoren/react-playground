import React, { CSSProperties } from "react";

interface SectionProps {
  id: string;
}

interface State {
  imageSrc: string;
}

class SectionItem extends React.Component<SectionProps, State> {
  constructor(props: SectionProps, state: State) {
    super(props);

    this.state = {
      imageSrc: `../assets/${props.id}.jpg`,
    };
  }

  render() {
    return (
      <div style={section}>
        <h2 style={sectionTitle}>{this.props.id}</h2>
        <img src={this.state.imageSrc} style={sectionImage}></img>
      </div>
    );
  }
}

const section: CSSProperties = {
  display: "flex",
  height: "33.3%",
  margin: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
};

const sectionImage: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "absolute",
  objectFit: "cover",
  objectPosition: "center",
};

const sectionTitle: CSSProperties = {
  position: "absolute",
  textShadow: "0px 1px 3.5px rgba(0, 0, 0, 0.5)",
  zIndex: 1,
};

export default SectionItem;
