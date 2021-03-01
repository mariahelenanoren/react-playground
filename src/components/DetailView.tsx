import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";

interface Item {
  name: string;
}
interface Props extends RouteComponentProps<Item> {}

class DetailView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      imageSrc: `../assets/${this.props.match.params.name}.jpg`,
    };
  }

  render() {
    return (
      <div style={detail}>
        <img style={detailImage} src={this.state.imageSrc}></img>
      </div>
    );
  }
}

interface Props {
  id: string;
}

interface State {
  imageSrc: string;
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
