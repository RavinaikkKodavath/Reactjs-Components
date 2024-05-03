import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom';

export default function ShopperDetails() {
    const params = useParams();
    const [products, setProducts] = useState({id:0,title:'',category:'',rating:{rate:0,count:0}});
     
    useEffect(() => {
      axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${params.prodId}`,
      }).then((response) => {
        setProducts(response.data);
      });
    }, []);
  
  return (
    <div className='container-fluid'>
        <h1>Products Details</h1>
      <dl>
        <dt>Title</dt>
        <dd>{products.title}</dd>
        <dt>Preview</dt>
        <dd><img src={products.image} width='300' height='200'/></dd>
        <dt>Price</dt>
        <dd>{products.price}</dd>
        <dt>Rating</dt>
        <dd><span className='bi bi-star-fill text-success'></span>{products.rating.rate}[{products.rating.count}]</dd>
      </dl>

      <Link to={`/products/${products.category}`} >Back to {products.category} </Link>

    </div>
  )
}
