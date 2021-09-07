import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><a href="/">My Shop</a></li>
                </ul>
                <ul>
                    <li><a href="/">
                        <span className="shoppingCart">
                        <span className="count">0</span>
                        <i class="fas fa-cart-plus"></i>
                        </span>
                        </a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
