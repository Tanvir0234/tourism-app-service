import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import banner1 from '../../images/banner/b2.jpg'
import banner2 from '../../images/banner/b1.jpg'
import banner3 from '../../images/banner/wb3.jpg'
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Review from '../Review/Review';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import image1 from '../../images/van.png'
import image2 from '../../images/support.png'
import image3 from '../../images/contact.png'
import { FaAngleDoubleRight } from "react-icons/fa";


const Home = () => {

    const { products } = useProducts([]);





    return (
        <div>
            <Header />

            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-align"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption d-none d-md-block" >
                        <h2>SMART WATCHES</h2>
                        <p>WHAT TIME IS IT?</p>
                        <p><a href="#">More Info</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-align"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-caption d-md-block">
                        <h2>THE WATCH <br /> EVERYONE DESIRE </h2>
                        <p>EMPIRE COLLECTION</p>
                        <p><a href="#">More Info</a></p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-align"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-caption d-none d-md-block">
                        <h2>AN EXTRA ORDINARY <br /> CLASSIC</h2>
                        <p>BUILT FOE MEN</p>
                        <p><a href="#">More Info</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/*Catagory support */}
            <div className="container ">
                <div className="row ms-5 mt-5">
                    <hr />
                    <div className="col-md-4 col-sm-12 d-flex">
                        <div className="mt-1">
                            <img src={image1} alt="" />
                        </div>
                        <div className="ms-2">
                            <h6 className="text-danger fw-bold">Free Shipping</h6>
                            <p>Free Shipping On Order</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex">
                        <div className="mt-1">
                            <img src={image2} alt="" />
                        </div>
                        <div className="ms-2">
                            <h6 className="text-danger fw-bold"> Support 24/7</h6>
                            <p>Contact us 24 hrs a day</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 d-flex">
                        <div className="mt-1">
                            <img src={image3} alt="" />
                        </div>
                        <div className="ms-2">
                            <h6 className="text-danger fw-bold"> Payment Secure</h6>
                            <p>Free shipping on order</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>



            {/*Feature product */}

            <h1 className="text-center m-4"><span className="text-danger">Feature</span> Product</h1>
            <div className="container">
                <div className="row g-4 my-4">
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




                    )).slice(0, 6)}
                </div>
            </div>


            {/*Client Review------*/}

            <Review></Review>



            <Footer></Footer>
        </div>
    );
};

export default Home;


