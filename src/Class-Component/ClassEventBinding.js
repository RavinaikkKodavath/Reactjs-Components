import React, { Component } from 'react'

export default class ClassEventBinding extends Component {
    constructor(){
        super();
        this.state = {
         name:'',
         price:0,
         city:''
        }
    }
handlename(e){
     this.setState({
        name:e.target.value,
        price:this.state.price,
        city:this.state.city

       })
}
handleprice(e){
    this.setState({
        name:this.state.name,
        price:e.target.value,
        city:this.state.city

       })
    
    
}
handlecity(e){
    this.setState({
        name:this.state.name,
        price:this.state.price,
        city:e.target.value,

       })

    
    
}

register(){
    alert(JSON.stringify(this.state))

}

  render() {
    return (
      <div className='container-fluid'> 
      <h1>Class Event Binding</h1>
        <dl>
            <dt>Name</dt>
            <dd><input type='text' onChange={this.handlename.bind(this)} className='form-group' /></dd>
            <dt>Price</dt>
            <dd><input type='number' onChange={this.handleprice.bind(this)} className='form-group'/></dd>
            <dt>City</dt>
            <dd><select onChange={this.handlecity.bind(this)} className='form-group'>
                <option>
                    delhi
                </option>
                <option>
                    hyd
                </option>
                </select></dd>
            <button type='submit' className='btn btn-danger' onClick={this.register.bind(this)}>Submit</button>
        </dl>

        <dl>
            <dt>Name</dt>
            <dd>{this.state.name}</dd>
            <dt>Price</dt>
            <dd>{this.state.price}</dd>
            <dt>City</dt>
            <dd>{this.state.city}</dd>
        </dl>
      </div>
    )
  }
}
