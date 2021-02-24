import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";

class DetailView extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      imageSrc: "",
    };
  }

  componentDidMount() {
    this.setState({
      imageSrc: `../assets/${this.state.name}.jpg`,
    });
  }

  render() {
    console.log(this.props.match.params.name);
    return (
      <div style={detail}>
        <img style={detailImage} src={this.state.imageSrc}></img>
      </div>
    );
  }
}

interface Props extends RouteComponentProps<{ name: string }> {}

interface State {
  name: string;
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
