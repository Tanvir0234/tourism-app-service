import React, { useState } from 'react';
import './Dashboard.css'
import AddProduct from './AddProduct/AddProduct';
import AllOrders from './AllOrders/AllOrders';
import Orders from './Orders/Orders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import useAuth from '../Hooks/useAuth';
import AddReview from './AddReview/AddReview';
import Payment from './Payment/Payment';
import { Link } from 'react-router-dom';
import Products from '../Products.js/Products';

const Dashboard = () => {
    const { admin, user, logOut } = useAuth();
    const [isActive, setIsActive] = useState(false)
    const [control, setControl] = useState("myOrders");
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 col-sm-12">
                            <div className="area  p-1">
                                <h6 className="text-center fs-2 text-white fw-bold mt-3">{user?.displayName}</h6>
                                {admin && <p className="text-center text-warning">Admin</p>}
                                <div className=" mt-3 ">
                                    <Link className="fs-3 fw-bold" to='/products'>
                                        Products
                                    </Link>
                                    <div className="list">
                                        <li
                                            onClick={() => {
                                                setControl("orders");
                                                setIsActive(true)
                                            }}

                                            className={isActive ? ' menu p-2' : "menu p-2"}
                                        >
                                            Orders
                                        </li>
                                    </div>
                                    <div className="list active">
                                        <li
                                            onClick={() => setControl("payment")}
                                            className="menu  p-2"
                                        >
                                            Payment
                                        </li>
                                    </div>
                                    <div className="list">
                                        <li
                                            onClick={() => setControl("addReview")}
                                            className="menu  p-2"
                                        >
                                            Add Your Review
                                        </li>
                                    </div>


                                    {admin && <div>
                                        <div className="list">
                                            <li
                                                onClick={() => setControl("addProduct")}
                                                className="menu  p-2"
                                            >
                                                Add New Product
                                            </li>
                                        </div>

                                        <div className="list">
                                            <li
                                                onClick={() => setControl("manageOrder")}
                                                className="menu   p-2"
                                            >
                                                Manage All Order
                                            </li>
                                        </div>

                                        <div className="list">
                                            <li
                                                onClick={() => setControl("makeAdmin")}
                                                className="menu   p-2"
                                            >
                                                Make Admin
                                            </li>
                                        </div>
                                    </div>}
                                    <Link to="/login">
                                        <button
                                            onClick={logOut}
                                            className="btn btn-danger rounded fw-bold "
                                        >
                                            Log Out
                                        </button>{" "}
                                    </Link>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "orders" && <Orders></Orders>}
                            {control === "manageOrder" && <AllOrders></AllOrders>}
                            {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                            {control === "addProduct" && <AddProduct></AddProduct>}
                            {control === "addReview" && <AddReview></AddReview>}
                            {control === "payment" && <Payment></Payment>}


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;