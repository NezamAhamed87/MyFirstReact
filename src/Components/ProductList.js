import React, { useState, useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import styles from './ProductList.module.css';

function ProductList() {
    const { products, setProducts } = useContext(ProductContext);
    const [newProduct, setNewProduct] = useState({ name: "", price: "", description: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newProductData = {
            ...newProduct,
            id: products.length + 1,
        };
        setProducts([...products, newProductData]);
        setNewProduct({ name: "", price: "", description: "" });
    };

    return (
        <div className={styles.productList}>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className={styles.productItem}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleInputChange} />
                <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleInputChange} />
                <input type="text" name="description" placeholder="Description" value={newProduct.description} onChange={handleInputChange} />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default ProductList;
