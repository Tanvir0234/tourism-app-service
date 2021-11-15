import React from 'react';
import './Products.css'
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { FaAngleDoubleRight } from "react-icons/fa";

const Products = () => {
    const {products} = useProducts([]);
    return (
        <div>
            <Header/>
            <div className="container mt-2 ">
            <h1 className="text-center m-4">Our <span className="text-danger">Watch</span> Collection </h1>
            <div className="row g-4 mt-2">
                {products.map((product) => (

                    <div key={product._id} className="col-md-6 col-lg-4 col-sm-12">

                        <div className="card h-100 shadow  border rounded-3">

                            <img src={product.image} className="size  rounded-start w-100" alt="..." />


                            <div className="card-body">
                                <h5 className="card-title text-center">{product.name}</h5>
                                <p className="text-center">{product.description}</p>
                                <h6 className="card-text text-center">Price : ${product.price}</h6>
                            </div>

                            <Link to={`/details/${product._id}`}>
                                <button className="btn btn-danger align mb-3">See Details <FaAngleDoubleRight></FaAngleDoubleRight> </button>
                            </Link>
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