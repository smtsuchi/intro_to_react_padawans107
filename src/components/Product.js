import React from 'react'

export default function Product({product, addToCart, user, setMessages}) {
    const addToCartAPI = async () => {
        if (user.apitoken){
            const url = `http://127.0.0.1:5000/api/cart/add`
            const options = {
                method: 'POST',
                body: JSON.stringify({'productId': product.id}),
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${user.apitoken}`
                }
            } 


            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status ==='ok'){
                setMessages([data.message])
            }
        }
    }
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={product.img_url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.description}</p>
                <button className='btn btn-primary' onClick={()=>{addToCart(product); addToCartAPI()} }>Add To Cart</button>
            </div>
        </div>
    )
}
