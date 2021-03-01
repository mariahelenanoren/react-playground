import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component<Props> {
  element: HTMLDivElement;

  constructor(props: Props) {
    super(props);
    this.element = document.createElement("div");
    this.element.id = "modal-root";

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    document.body.appendChild(this.element);
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  onClick() {
    this.props.shouldClose();
  }

  render() {
    console.log(this.props);
    return ReactDOM.createPortal(
      <div style={modal} onClick={this.onClick}>
        {this.props.children}
      </div>,
      this.element
    );
  }
}

interface Props {
  persistent?: boolean;
  shouldClose: () => void;
}

const modal: CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default Modal;
