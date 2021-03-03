import React, { CSSProperties } from "react";
import { RouteComponentProps } from "react-router-dom";
import Modal from "./Modal";
import HeaderSection from "./HeaderSection";
import TextSection from "./TextSection";

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
      <div style={detailBackground}>
        <img style={detailImage} src={this.state.imageSrc}></img>
        <div style={detailContainer}>
          <HeaderSection
            title={this.props.match.params.name}
            toggleModal={this.toggleModal}
          />
          <TextSection text="A forest is an area of land dominated by trees. Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing and ecological function. The Food and Agriculture Organization defines a forest as land spanning more than 0.5 hectares with trees higher than 5 meters and a canopy cover of more than 10 percent, or trees able to reach these thresholds in situ. It does not include land that is predominantly under agricultural or urban land use. Using this definition FRA 2020 found that forests covered 4.06 billion hectares or approximately 31 percent of the global land area in 2020 but are not equally distributed around the globe." />
        </div>
        {this.state.isModalOpen ? (
          <Modal shouldClose={this.toggleModal}>
            <p>
              Modal was opened from&nbsp;
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

const detailBackground: CSSProperties = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const detailContainer: CSSProperties = {
  position: "relative",
  padding: "0 1.2rem",
  height: "100%",
  width: "100%",
  zIndex: 100,
  background: "rgba(0, 0, 0, 0.5)",
};

const detailImage: CSSProperties = {
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const highlight: CSSProperties = {
  color: "orange",
};

export default DetailView;
