export const CartReducer=(state,action)=>{;
    let {shoppingCart,totalPrice,qty}=state;
    let product;
    let index;
    let updatedQty;
    let updatedPrice;

    if(action.type === "Add_TO_CART"){
        const check = shoppingCart.find(product=>product.id === action.payload.cart.id);
        if(check){
            return state;
        }else{
        product = action.payload.cart;
        product['qty']=1;
        updatedQty=qty+1;
        updatedPrice=totalPrice+Number(product.price);
        return {shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
        }
    }

    if(action.type === "INC"){
        product =action.cart;
        product.qty=product.qty + 1;
        updatedQty = qty + product.qty;
        updatedPrice=totalPrice+Number(product.price);
        index = shoppingCart.findIndex(cart=> cart.id === action.id);
        shoppingCart[index]=product;
       return {shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
    }

    if(action.type === "DEC"){
        product =action.cart;
        if(product.qty >1){
        product.qty=product.qty - 1;
        updatedQty = qty - product.qty;
        updatedPrice=totalPrice-Number(product.price);
        index = shoppingCart.findIndex(cart=> cart.id === action.id);
        shoppingCart[index]=product;
       return {shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
        }else{
            return state;
        }
    }
}