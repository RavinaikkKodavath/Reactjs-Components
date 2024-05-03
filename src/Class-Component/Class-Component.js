import React, { Component } from 'react'

export default class Class_Component extends Component {
    constructor(){
        super();
        this.state ={
        title :'Component',
        products:[
         'Electronic','Fashion','FootWear'
        ]
        }
    }
  render() {
    return (
      <div className='container-fluid'>
        <h1> {this.state.title} </h1>
    <h2>how to access the class component States using </h2>
       <ol>
        {
           this.state.products.map(product =>
            <li key={product}>
                {product}
            </li> ) 
        }
        </ol> 
      </div>
    ) 
  }
}
