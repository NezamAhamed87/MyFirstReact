import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>My Practice App</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/products">Products</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}

export default Header;
