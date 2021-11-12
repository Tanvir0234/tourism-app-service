import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/login.jpg'
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { useHistory, useLocation } from "react-router";


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        //console.log(newLoginData)
    }
    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password);
        
        history.push(redirect_uri);
        e.preventDefault();
    }
    return (
        <div className="row login-bg py-5 ">
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
                <div className="w-75 mt-5 mb-5 bg-white p-4 border rounded shadow">
                    <h1 className="text-center">Log In</h1>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input name="email" onBlur={handleOnChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input name="password" onBlur={handleOnChange} type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                       
                        <input type="submit" className="btn btn-primary"/>
                    </form>
                    <br />
                    <p>New to Our Website ? <Link to="/register">Create Acount</Link> </p>

                </div>
            </div>
            <div className="col-lg-6 col-sm-12">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Login;