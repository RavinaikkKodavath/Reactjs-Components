import React, { Component } from "react";

export class LayoutRedering extends Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.layout === "horizonta") {
      return (
        <nav>
          <div className="bi bi-facebook mb-3"></div>
          <div className="bi bi-twitter mb-3"></div>
          <div className="bi bi-linkedin mb-3"></div>
          <div className="bi bi-instagram mb-3"></div>
        </nav>
      );
    } else {
      return (
        <nav className="d-flex">
        <div className="bi bi-facebook mb-3 me-3"></div>
        <div className="bi bi-twitter mb-3 me-3"></div>
        <div className="bi bi-linkedin mb-3 me-3"></div>
        <div className="bi bi-instagram mb-3 me-3"></div>
      </nav>
      
      );
    }
  }
}

export default class ConditionalRendering extends Component {
  constructor() {
    super();
    this.state = {
      viewLayout: "",
    };
  }

  handleLayoutChange(e) {
    this.setState({
      viewLayout: e.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h2>Select a Toolbar Layout</h2>
        <div className="w-25">
          <select
            onChange={this.handleLayoutChange.bind(this)}
            className="form-select"
          >
            <option value="-1">Select Layout </option>
            <option value="horizonta">Horizontal </option>
            <option value="vertical">Vertical </option>
          </select>
        </div>
        <h3>Toolbar</h3>
        <LayoutRedering layout={this.state.viewLayout} />
      </div>
    );
  }
}
