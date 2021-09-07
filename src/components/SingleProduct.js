import React from 'react'
import './Single.css';

function SingleProduct({product}) {
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
                <p>{product.product_colors.map(color=><span style={{background:color.hex_value, padding:"5px 7px",borderRadius:'50%',fontSize:'5px',margin:'.5px'}}>c</span>)}</p>
                ):<p style={{fontSize:'12px',color:"grey"}}>No Colors available</p>}
                <h5 style={{color:"#56403a"}}>${product.price}.00</h5> 
                </div>
                <div className="product_btns">
                    <button>Details</button>
                    <button>Add to Cart</button>
                </div>
            </div>   
        </div>
    )
}

export default SingleProduct
