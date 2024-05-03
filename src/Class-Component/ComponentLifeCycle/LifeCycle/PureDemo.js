import React, { Component } from "react";

export default class PureDemo extends Component {
  constructor() {
    super();
    this.state = {
      name: ["ravi", "raju", "vamshi"],
      msg: "",
      namecopy: ["ravi", "raju", "vamshi"]
    };
  }
  handleLoadClick() {
    this.setState({
      namecopy: this.state.name,
    });
  }

  componentDidUpdate() {
    console.log("changes are detected");
    if (this.state.name == this.state.namecopy) {
      this.setState({
        msg: "changes are detected",
      })
    
      
    } else {
        this.setState({
            msg: "no changes detected",
          });    }
  }

  render() {
    return (
      <div className="container-fluid">
        <button
          className="btn btn-primary"
          onClick={this.handleLoadClick.bind(this)}
        >
          Load Component
        </button>
        <ol>
          {this.state.name.map((names) => (
            <li key={names}>{names}</li>
          ))}
        </ol>
      </div>
    );
  }
}
