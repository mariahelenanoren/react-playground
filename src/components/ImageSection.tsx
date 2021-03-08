import React, { CSSProperties } from "react";
import Key from "./Key";
import Modal from "./Modal";

export default class ImageSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isModalOpen: false,
      modalImage: "",
      loading: true,
      images: [],
    };

    this.getImages = this.getImages.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(url: string) {
    {
      this.state.isModalOpen
        ? this.setState({
            isModalOpen: false,
          })
        : this.setState({
            modalImage: url,
            isModalOpen: true,
          });
    }
  }

  async getImages() {
    const axios = require("axios").default;
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?client_id=" +
          Key() +
          "&query=" +
          this.props.keyWord
      );
      this.setState({
        loading: false,
        images: response.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    this.getImages();
    return (
      <div style={imageContainer}>
        {this.state.images.map((image) => (
          <img
            style={imageStyle}
            onClick={() => this.toggleModal(image.urls.regular)}
            src={image.urls.regular}
          ></img>
        ))}
        {this.state.isModalOpen ? (
          <Modal shouldClose={() => this.toggleModal("")}>
            <img style={modalImage} src={this.state.modalImage}></img>
          </Modal>
        ) : null}
      </div>
    );
  }
}

interface Props {
  keyWord: string;
}

interface State {
  isModalOpen: boolean;
  modalImage: string;
  loading: boolean;
  images: Url[];
}

interface Url {
  urls: {
    regular: string;
  };
}

const imageContainer: CSSProperties = {
  display: "grid",
  padding: "2rem 1.2rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gap: "1rem",
  gridAutoRows: "20rem",
  backgroundColor: "inherit",
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  cursor: "pointer",
};

const modalImage: CSSProperties = {
  height: "100%",
  maxWidth: "100%",
  padding: "4rem",
};
