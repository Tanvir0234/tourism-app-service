import React, { useEffect, useState } from 'react';
import './Details.css'
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';


const Details = () => {
    const { productId } = useParams();
    const [details, setDetails] = useState([])
    const [singleProduct, setSingleProduct] = useState({})


    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://mighty-reaches-12627.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    useEffect(() => {
        const foundDetail = details.find(detail => detail._id === productId);
        setSingleProduct(foundDetail);
        reset(foundDetail)
    }, [details, reset])

    {/*---------------------Place Order---------------------------------*/ }



    const onSubmit = data => {
    

        data.stetus = "pending";
        delete data._id;
        console.log(data)
           fetch("https://mighty-reaches-12627.herokuapp.com/placeOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.insertedId) {
                    alert('order Success')
                    history.push('/dashboard')

                }
            });
        
        reset();


    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6 col-sm-12d-flex justify-content-center align-items-center">
                        <div>

                            <img className="img-fluid w-100 " src={singleProduct?.image} alt="" />



                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                        <div className="mt-5 mb-5" >
                            <h1 className="text-center">Order Booking</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  {...register("name",)} value={user?.displayName} placeholder="Your Name" className="px-3 m-2 rounded-pill" /> <br />
                                <input {...register("watch",)} value={singleProduct?.name} placeholder="Watch Name" className="px-3 m-2 rounded-pill" /> <br />
                                <input  {...register("email",)} value={user?.email} readOnly placeholder="Email" className="px-3 m-2 rounded-pill" /><br />
                                <input type="number" {...register("price")} value={singleProduct?.price} placeholder="Price Multiple the Person " className="px-3 m-2 rounded-pill" /><br />
                                <input {...register("address",)} placeholder="Address" className="px-3 m-2 rounded-pill" /> <br />

                                <input type="submit" className="btn btn-danger px-5 mx-5 rounded-pill" /><br />



                            </form>

                        </div>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>

    );
};

export default Details;