import React,{useContext} from 'react'
import {SingleContext} from '../Data/SingleProductContext'
import {Link} from 'react-router-dom';
import {CartContext} from '../Data/CartContext'

function ProductDetails(props) {
    const product = props.history.location.state;
    const {dispatch} = useContext(CartContext);
    return (
        <div className="product_details">
            <div className="product">
                <img src={product.product.image_link} alt="product"/>
            </div>
            <div className="content">
                <h1>{product.product.name}</h1>
                <h2 style={{color:"grey"}}>${product.product.price}.00</h2>
                <div className="content_brand"><div><b>{product.product.brand}</b></div> <div><b>Ratings:</b> <span style={{color:"blue"}}>{product.product.rating}</span></div></div>
                <div className="content_price">
                    <div>{product.product.product_colors.map((pro,index)=><span key={index} style={{background:pro.hex_value, padding:"10px 18px",borderRadius:"50%"}}>c</span>)}</div>
                </div>
                <div className="content_description">
                    <p style={{width:"90%"}}><b>Description:</b> {product.product.description}</p>
                </div>
                <div className="btns">
                    <Link to="/">Back</Link>
                    <button onClick={()=> dispatch({type:"Add_TO_CART", payload:{id:product.id,cart:product.product}})}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
