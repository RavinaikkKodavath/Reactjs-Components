import React,{useState} from 'react'

export default function Filters_demo() {
    const [cities] = useState(['Delhi', 'Hyd','Mumbai','Chennai','Bangalore'])
    const [button,setButton] = useState('bi bi-sort-alpha-down');
     
    function handleSortClick(e){
        console.log(e.target.className)
        if(e.target.className ==='bi bi-sort-alpha-down'){
            setButton('bi bi-sort-alpha-up')
            cities.sort();
        }else{
            setButton('bi bi-sort-alpha-down')
            cities.sort();
            cities.reverse();
        }
    }


  return (
    <div className='mb-3'>
        <h2>This is some techque for using sorting Assending and Decending Order filters</h2>
        <h2 className='mt-3' > Cities List <button onClick={handleSortClick}><span className={button}></span></button> </h2>
      <ol>
        {cities.map(city =>
            <li key={city}> {city}</li>
            )}
      </ol>
    </div>
  )
}
