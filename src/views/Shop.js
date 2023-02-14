import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

export default function Shop({addToCart, user, setMessages}) {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const url = 'http://127.0.0.1:5000/api/products'
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === 'ok') {
            setProducts(data.products)
        }
    };

    useEffect(()=>{
        getProducts()
    } , [])

    const showProducts = () => {
        return products.map(p=><Product key={p.id} product={p} addToCart={addToCart} user={user} setMessages={setMessages}/>)
    };

  return products.length===0 ?(
    <div>Shop is loading...</div>
  ): 
  <>
  <div className='row'>
    {showProducts()}
  </div>
  </>
}
