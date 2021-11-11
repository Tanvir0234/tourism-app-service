import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../Hooks/useAuth';
import './Register.css'
import { useHistory, useLocation } from "react-router";


const Register = () => {
    

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user , registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    


    return (
        <div className="row register-bg">


            <div className="col-lg-12 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="bg-form">
                    <div className="col-md-4">
                        <div className=" d-flex justify-content-center align-items-center ">
                            <div className="mt-5 mb-5" >
                                <h1 className="text-center text-white">Register</h1>
                                <form onSubmit={handleLoginSubmit}>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Name </label>
                                        <input name="name" onBlur={handleOnBlur}   type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                                        <input name="email" onBlur={handleOnBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input name="password" onBlur={handleOnBlur} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;