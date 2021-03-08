import React, { CSSProperties } from "react";
import Navbar from "./Navbar";
import ViewContainer from "./ViewContainer";
import { BrowserRouter as BrowserRouter } from "react-router-dom";
import { ThemeContext, themes, themeInterface } from "../contexts/ThemeContext";

class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState((state) => ({
      theme: state.theme === themes.light ? themes.dark : themes.light,
    }));
  }

  render() {
    console.log(this.context);
    return (
      <div style={mainLayout}>
        <ThemeContext.Provider value={this.state.theme}>
          <BrowserRouter>
            <Navbar toggleTheme={this.toggleTheme} />
            <ViewContainer />
          </BrowserRouter>
        </ThemeContext.Provider>
      </div>
    );
  }
}

interface Props {}

interface State {
  theme: themeInterface;
}

const mainLayout: CSSProperties = {
  height: "100%",
  color: "white",
};

export default Layout;
