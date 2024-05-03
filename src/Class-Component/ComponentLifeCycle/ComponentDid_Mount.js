import { data } from 'jquery'
import React, { Component } from 'react'

export default class ComponentDid_Mount extends Component {
    constructor(){
        super()
        this.state ={
            products:[]
        }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            this.setState({
                products:data
            })
        })
    }
  render() {
    return (
      <div className='container-fluid'>
        {this.state.products.map(product =>
          <li key={product.id}>{product.title}</li>
          )}
      </div>
    )
  }
}
