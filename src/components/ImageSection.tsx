import React, { CSSProperties } from "react";
import Key from "./Key";

export default class ImageSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      images: [],
    };

    this.getImages = this.getImages.bind(this);
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
          <img style={imageStyle} src={image.urls.regular}></img>
        ))}
      </div>
    );
  }
}

interface Props {
  keyWord: string;
}

interface State {
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
  backgroundColor: "#000000",
};

const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};
