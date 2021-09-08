import React, { useContext } from "react";
import { CartContext } from "../Data/CartContext";

function Cart() {
  const { shoppingCart,dispatch } = useContext(CartContext);
  
  return (
    <div style={{width:"80%",margin:"20px auto"}}>
      <table style={{width:"100%"}}>
        <tr>
            <th>Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Add</th>
          <th>Minus</th>
          <th>Delete</th>
        </tr>
        {shoppingCart.map((product) => {
          return (
            <tr key={product.id}>
                <td style={{textAlign:"center"}}><img src={product.image_link} alt="product" width="40px"/></td>
              <td>{product.name}</td>
              <td style={{textAlign:"center"}}>{product.price}</td>
              <td style={{textAlign:"center"}}><button onClick={()=>dispatch({type:'INC',id:product.id,cart:product})}>+</button></td>
              <td style={{textAlign:"center"}}><button>-</button></td>
              <td style={{textAlign:"center"}}><button>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Cart;
