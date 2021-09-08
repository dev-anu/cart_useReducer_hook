export const CartReducer=(state,action)=>{;
    let {shoppingCart,totalPrice,qty}=state;


    if(action.type === "Add_TO_CART"){
        const check = shoppingCart.find(product=>product.id === action.payload.cart.id);
        if(check){
            return state;
        }else{
        shoppingCart=[action.payload.cart,...shoppingCart];
        totalPrice=totalPrice+Number(action.payload.cart.price);
        qty =qty+1;
        return {shoppingCart,totalPrice,qty}
        }
    }

    if(action.type === "INC"){
       console.log(action);
       return {shoppingCart,totalPrice,qty}
    }

}