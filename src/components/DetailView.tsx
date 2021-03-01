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
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    {
      this.state.isModalOpen
        ? this.setState({
            isModalOpen: false,
          })
        : this.setState({
            isModalOpen: true,
          });
    }
  }

  render() {
    return (
      <div style={detailContainer}>
        <button onClick={this.toggleModal} style={button}>
          Open Modal
        </button>
        <img style={detailImage} src={this.state.imageSrc}></img>
        {this.state.isModalOpen ? (
          <Modal shouldClose={this.toggleModal}>
            <p>
              Modal opened from&nbsp;
              <span style={highlight}>{this.props.match.params.name}</span>
            </p>
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
  padding: "0.5rem 1rem",
  border: "none",
  backgroundColor: "white",
  color: "black",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  zIndex: 100,
};

const highlight: CSSProperties = {
  color: "orange",
};

export default DetailView;
