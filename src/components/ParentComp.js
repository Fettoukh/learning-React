import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";
import MemoComponent from "./MemoComponent";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Fettoukh"
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Fettoukh"
      });
    }, 2000);
  }

  render() {
    console.log("****************Parent Render****************");
    return (
      <div>
        Parent Component
        {/*<RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>*/}
        <MemoComponent name={this.state.name}></MemoComponent>
      </div>
    );
  }
}

export default ParentComp;
