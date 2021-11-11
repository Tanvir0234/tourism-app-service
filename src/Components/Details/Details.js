import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { productId } = useParams();
    const [details, setDetails] = useState([])
    const [singleProduct, setSingleProduct] = useState({})

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const foundDetail = details.find(detail => detail.id === productId);
        setSingleProduct(foundDetail);

    }, [details])

    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-6 col-sm-12  d-flex justify-content-center align-items-center">
                    <div>
                    <h2 className="mt-4">{singleProduct?.name}</h2>
                    <h6 className="my-3">{singleProduct?.description}</h6>
                    <h2>Price : {singleProduct?.price}</h2>
                    </div>
                   

                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                        <img className="img-fluid w-100 align" src={singleProduct?.image} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details;