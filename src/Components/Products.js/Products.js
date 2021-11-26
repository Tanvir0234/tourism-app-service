import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaAngleDoubleRight } from "react-icons/fa";

const Products = () => {
    const { products } = useProducts([]);
    return (
        <div>
            <Header />
            <div className="container mt-2 ">
                <h1 className="text-center m-4">Our <span className="text-danger">Watch</span> Collection </h1>
                <div className="row g-4 mt-2">
                    {products.map((product) => (

                        <div key={product._id} className="my-5 col-md-4 ">
                            <div className="card w-100 h-100 text-center rounded border productCard">
                                <div className="d-flex justify-content-center align-items-center h-75 p-2">
                                    <img src={product.image} className="card-img-top h-75 w-75" alt="" />
                                </div>
                                <div className="card-body">

                                    <h5 className="card-title mt-3"><i className="fas fa-map-marker-alt"></i> {product.name}</h5>
                                    <p className="text-secondary fst-italic fw-normal">{product.description}</p>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <h6><span className="card-title fw-bold">Price : ${product.price}</span></h6>

                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="">
                                        <Link to={`/details/${product._id}`}><button className="product-btn">Book Now <FaAngleDoubleRight></FaAngleDoubleRight></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Products;