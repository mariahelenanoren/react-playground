import React, { CSSProperties } from "react";

export default class TextSection extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      text: "",
    };

    this.getText = this.getText.bind(this);
  }

  componentDidMount() {
    this.getText();
  }

  async getText() {
    const axios = require("axios").default;
    try {
      const response = await axios.get(
        "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" +
          this.props.keyWord +
          "&origin=*&format=json&formatversion=2"
      );
      this.setState({
        text: response.data.query.pages[0].extract,
        loading: false,
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div style={textContainer}>
          <p style={text}></p>
        </div>
      );
    } else {
      return (
        <div style={textContainer}>
          <p style={text}>{this.state.text}</p>
        </div>
      );
    }
  }
}

interface Props {
  keyWord: string;
  text: string;
}
interface State {
  loading: boolean;
  text: string;
}

const textContainer: CSSProperties = {
  marginTop: "2rem",
};

const text: CSSProperties = {
  margin: "0",
  lineHeight: "1.2",
  color: "inherit",
  fontSize: "0.8rem",
};
