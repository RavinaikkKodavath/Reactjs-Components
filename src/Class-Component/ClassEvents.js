import React, { Component } from 'react'

export default class ClassEvents extends Component {
    constructor(){
        super()
        this.state={
            mesg:'hello ravi'
        }
        // this.handleClick = this.handleClick.bind(this)
    }

handleClick(){
    this.setState({
        mesg:'hello user'
    })
}

  render() {
    return (
      <div>
        <button type='button' onClick={this.handleClick.bind(this)}>Click me </button>
        <br></br>
        {this.state.mesg}
      </div>
    )
  }
}
