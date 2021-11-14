import React, { useState } from 'react';
import './Dashboard.css'
import AddProduct from './AddProduct/AddProduct';
import AllOrders from './AllOrders/AllOrders';
import Orders from './Orders/Orders';
import MakeAdmin from './MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const [isActive, setIsActive] = useState(false)
    const [control, setControl] = useState("myOrders");
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 col-sm-12">
                            <div className="area  p-1">
                                <h6 className="text-center fs-2 text-white fw-bold mt-3">Dashboard</h6>
                                <div className=" mt-3 ">
                                    <div className="list active">
                                        <li
                                            onClick={() => {
                                                setControl("orders");
                                                setIsActive(true)
                                            }}
                                            
                                            className={isActive ? ' menu p-2' : "menu p-2" }
                                        >
                                            Orders
                                        </li>
                                    </div>
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

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "orders" && <Orders></Orders>}
                            {control === "addProduct" && <AddProduct></AddProduct>}
                            {control === "manageOrder" && <AllOrders></AllOrders>}
                            {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;