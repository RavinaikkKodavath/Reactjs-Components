import React, { Component } from 'react'


export  class LoginComponent extends Component {
    componentDidMount(){
        alert('Login Component is requested and  will mount ')

    }
    // when you requested to render other component this below cycle is auto rendered and destroy the component then New requested compoenent will be rendered 
    componentWillUnmount(){
        alert('Login Component  will unmount ')

        
    }
  render() {
    return (
      <div>
        <h1>Login Component Registered</h1>
      </div>
    )
  }
}


export  class RegisterComponent extends Component {
    componentDidMount(){
        alert('register Component is requested and  will mount ')

    }
    componentWillUnmount(){
        alert('register Component  will unmount ')

        
    }
  render() {
    return (
      <div>
                <h1>Registered Component Registered</h1>

      </div>
    )
  }
}



export default class LifeCycle extends Component {
    constructor(){
        super();
        this.state = {
            view:''
        }
    }

handleLoginClick(){
    this.setState ({
         view:<LoginComponent/>
    })

}

handleRegisterClick(){
    this.setState ({
        view:<RegisterComponent/>
   })
}

  render() {
    return (
      <div className='container-fluid'> 
      <h1>This is Class Component Life cycle demo</h1>
      <br></br>
        <button className='btn btn-primary' onClick={this.handleLoginClick.bind(this)}>Login Component</button>
        <button className='btn btn-danger' onClick={this.handleRegisterClick.bind(this)}>Register Component</button>
{this.state.view}
      </div>
    )
  }
}
