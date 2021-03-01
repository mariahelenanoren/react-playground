import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import Modal from "./Modal";

interface Item {
  name: string;
}

interface Props extends RouteComponentProps<Item> {}

class DetailView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isModalOpen: false,
      imageSrc: `../assets/${this.props.match.params.name}.jpg`,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }
  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    return (
      <div style={detailContainer}>
        <button onClick={this.openModal} style={button}>
          Open Modal
        </button>
        <img style={detailImage} src={this.state.imageSrc}></img>
        {this.state.isModalOpen ? (
          <Modal persistent shouldClose={this.closeModal}>
            <h3>Modal opened from {this.props.match.params.name}</h3>
          </Modal>
        ) : null}
      </div>
    );
  }
}

interface Props {
  id: string;
}

interface State {
  isModalOpen: boolean;
  imageSrc: string;
}

const detailContainer: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

const button: CSSProperties = {
  position: "absolute",
  zIndex: 100,
};

export default DetailView;
