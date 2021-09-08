import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from '../Data/CartContext'

function Navbar() {
    const {qty} = useContext(CartContext);
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">My Shop</Link></li>
                </ul>
                <ul>
                    <li><Link to="/cart">
                        <span className="shoppingCart">
                        <span className="count">{qty}</span>
                        <i class="fas fa-cart-plus"></i>
                        </span>
                        </Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
