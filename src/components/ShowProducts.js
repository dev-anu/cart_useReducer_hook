import React,{useContext} from 'react';
import {ProductContext} from '../Data/FeatureProduct';
import SingleProduct from './SingleProduct';

function ShowProducts() {
    const {products} = useContext(ProductContext);
    
    return (
        <>
        <h1 style={{textAlign:"center"}}>Featured Products</h1>
        <div style={{display:'flex',flexWrap:'wrap', width:'90%', margin:"10px auto"}}>
            {
                products.map(product=> <SingleProduct product={product}/>)
            }
        </div>
        </>
    )
}

export default ShowProducts
