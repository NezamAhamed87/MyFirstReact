import React, { createContext, useState } from 'react';

// Create the context
export const ProductContext = createContext();

// Create a provider component
export function ProductProvider({ children }) {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop", price: "$999", description: "A high-performance laptop" },
        { id: 2, name: "Phone", price: "$699", description: "A smartphone with a great camera" },
        { id: 3, name: "Headphones", price: "$199", description: "Noise-cancelling headphones" }
    ]);

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    );
}
