import React from 'react'
import GridComponent from '../../Customised-components/GridComponent'
import { useState } from 'react'

export default function Home() {
    const [products] = useState([{Name:'santoor',Price:205555,Order:'yes'}])
    const [newspaper] = useState([{Name:'Hindu',Price:'2$',Adress:'2-87'}])

  return (
    <div className='container-fluid'>
        <h1>Customised grid Project We have to pass any data it will convert into table</h1>
      <GridComponent caption='Products data  Table' fields={['Name','Price','Order']} data={products} />
      <hr></hr>
      <GridComponent caption='New Paper Table' fields={['Name','Price','Address']} data={newspaper} />

    </div>
  )
}
