import axios from 'axios';
import React,{useState,useEffect, createContext, Children} from 'react'

export const ProductContext = createContext();
function FeatureProduct(props) {
    const [product,setProduct] =useState([]);
    useEffect(()=>{
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then(res=> setProduct(res.data))
        .catch(err=>console.log(err))
    },[])

    return (
       <ProductContext.Provider value={{products:[...product]}}>
           {
               props.children
           }
       </ProductContext.Provider>
    )
}

export default FeatureProduct
