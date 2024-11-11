import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

function ProductCounter() {
    const { products } = useContext(ProductContext);
    return <p>Total Products: {products.length}</p>;
}

export default ProductCounter;
