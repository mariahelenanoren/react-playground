import React from "react";
import Key from "./Key";

export default class ImageSection extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

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
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    this.getImages();
    return null;
  }
}

interface Props {
  keyWord: string;
}
