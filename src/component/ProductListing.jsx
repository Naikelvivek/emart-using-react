import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/action'; // Import your addToCart action

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Fetch products error:', error);
            }
        };
        fetchProducts();
    }, []);

    const addProductToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch addToCart action with selected product
    };

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-outline-dark" onClick={() => addProductToCart(product)}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
