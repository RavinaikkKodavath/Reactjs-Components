import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom';

export default function ShoppingProducts() {
    const params = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
          method: "get",
          url: `https://fakestoreapi.com/products/category/${params.catName}`,
        }).then((response) => {
            setProducts(response.data);
        });
      }, []);
  return (
    <div className='container-fluid '>
<div className='d-flex'>
    {
        products.map(products =>
            <div key={products.id}>
<Link to ={`/details/${products.id}`}>
<img className='me-2 border border-2 border-danger p-2' src={products.image} width="100" height='100' />

 </Link>
      
            </div>
            )
    }
    </div>
    <Link to='/home'>Back to Category </Link>
      </div>
  )
}
