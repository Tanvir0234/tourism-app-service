import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import banner1 from '../../images/banner/b2.jpg'
import banner2 from '../../images/banner/b1.jpg'
import banner3 from '../../images/banner/wb3.jpg'
import { Link } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';

const Home = () => {

    const { products } = useProducts([]);

    return (
        <div>
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

                    <Carousel.Caption className="carousel-caption d-none d-md-block">
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

{/*Feature product */}

<h1 className="text-center m-4"><span className="text-danger">Feature</span> Product</h1>
            <div className="container">
                <div className="row g-4 my-4">
                    {products.map((product) => (

                        <div key={product._id} className="col-md-6 col-lg-4 col-sm-12">

                            <div className="card h-100 shadow  border rounded-3">

                                <img src={product.image} className="rounded-start w-100  size" alt="..." />


                                <div className="card-body">
                                    <h5 className="card-title text-center">{product.name}</h5>
                                    <p className="text-center">{product.description}</p>
                                    <h6 className="card-text text-center"> Price : ${product.price}</h6>
                                </div>

                                <Link to={`/details/${product._id}`}>
                                    <button className="btn btn-danger align mx-4 mb-3">See Details</button>
                                </Link>
                            </div>

                        </div>
                    )).slice(0, 6)}
                </div>
            </div>






        </div>
    );
};

export default Home;