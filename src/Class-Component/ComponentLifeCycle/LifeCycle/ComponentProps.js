import React, { Component } from 'react'

export default class Login extends Component {
constructor(props){
    super();

}

  render() {
    return (
      <div className='container-fluid'>
        <h1>{this.props.title}</h1>
        <dl>
            <dt>Username</dt>
            <dd><input  type={this.props.type}/></dd>
            <dt>Password</dt>
            <dd><input type='password'/></dd>
        </dl>
      </div>
    )
  }
}


export  class Main extends Component {
  render() {
    return (
      <div>
        <h1>this is example for class props </h1>
        <Login title='Admin Portal' type='email' />
      </div>
    )
  }
}
