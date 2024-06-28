import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState([]); // Define filter state
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            if (componentMounted) {
                const products = await response.json();
                setData(products);
                setFilter(products); // Initialize filter state with all products
                setLoading(false);
                console.log(products);
            }
            return () => {
                componentMounted = false;
            };
        };
        getProducts();
    }, [componentMounted]);

    const Loading = () => {
        return (
            <>
               <div className="col-md-3">
                <skeleton height ={350}/>
               </div>
               <div className="col-md-3">
                <skeleton height ={350}/>
               </div>
               <div className="col-md-3">
                <skeleton height ={350}/>
               </div>
               <div className="col-md-3">
                <skeleton height ={350}/>
               </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category.toLowerCase() === cat.toLowerCase());
        setFilter(updatedList);
    };

    const ShowProducts = () => {
        const productsToDisplay = filter.length > 0 ? filter : data; // Use filtered data if available, otherwise use all data
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>
                        All
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>
                        Men's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
                        Women's Clothing
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>
                        Jewelery
                    </button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>
                        Electronics
                    </button>
                </div>
                <div className="row">
                    {productsToDisplay.map((product) => (
                        <div key={product.id} className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4" key={product.id}>
                                <img className="card-img-top" src={product.image} alt={product.title} height ="250px"/>

                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">
                                        Buy Now
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">
                            Latest Products
                        </h1>
                        <hr />
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <ShowProducts />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
