import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../contexts/ThemeContext";

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
    if (!this.props.persistent) {
      this.props.shouldClose();
    }
  }

  render() {
    return ReactDOM.createPortal(
      <ThemeContext.Consumer>
        {(value) => (
          <div
            style={{
              ...modal,
              backgroundColor: value.overlay,
              color: value.textColor,
            }}
            onClick={this.onClick}
          >
            {this.props.children}
          </div>
        )}
      </ThemeContext.Consumer>,
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
