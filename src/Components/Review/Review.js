import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";

import './Review.css'

const Review = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mighty-reaches-12627.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])





    return (
        <div className="review-bg">
            <div className="container mt-3 ">
                <h1 className="text-center text-white">What <span className="text-warning">People</span> Say's ?</h1>
                <hr className="text-white" />
                <div className="row g-4 mt-2 mb-5">
                    {reviews.map((review) => (

                        <div key={review._id} className="col-md-6 col-lg-4 col-sm-12">

                            <div className="card bg-light mb-5  review shadow  border rounded-4">

                                <div className="align-image">
                                    <img src={review.image} className=" img-fluid review-image" alt="..." />

                                </div>



                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold fs-2"> <span className="text-warning">{review.name}</span> </h5>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div>
                                            <ReactStars

                                                count={review.rating}
                                                // onChange={ratingChanged}
                                                size={24}
                                                half={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>


                                    <p className="text-center text-secondary"> <span className="text-warning fw-bold fs-4">"</span> {review.description}<span className="text-warning fw-bold fs-4">"</span></p>
                                </div>


                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Review;