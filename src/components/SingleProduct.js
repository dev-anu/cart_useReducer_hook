import React,{useContext} from 'react'
import {SingleContext} from '../Data/SingleProductContext'
import './Single.css';
import {Link} from 'react-router-dom'
import {CartContext} from '../Data/CartContext'

function SingleProduct({product}) {

    const {dispatch} = useContext(CartContext);
    return (
        <div>
            <div className="card">
                <div className="imgBx">
                    <img src={product.image_link} alt="product" />
                </div>  
                <div className="product_name"> 
                <p>{product.name}</p>
                </div>
                <div className="product_price">
                {product.product_colors.length > 0 ?(
                <p>{product.product_colors.map((color,index)=><span key={index} style={{background:color.hex_value, padding:"5px 7px",borderRadius:'50%',fontSize:'5px',margin:'.5px'}}>c</span>)}</p>
                ):<p style={{fontSize:'12px',color:"grey"}}>No Colors available</p>}
                <h5 style={{color:"#56403a"}}>${product.price}.00</h5> 
                </div>
                <div className="product_btns">
                    <Link to={{pathname:'/product-details',state:{product:product}}}>Details</Link>
                    <button onClick={()=> dispatch({type:"Add_TO_CART", payload:{id:product.id,cart:product}})}>Add to Cart</button>
                </div>
            </div>   
        </div>
    )
}

export default SingleProduct
