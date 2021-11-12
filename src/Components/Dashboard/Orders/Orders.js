import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import './Order.css'

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    const handleDelete = (id) => {
        let answer = window.confirm("Are you sure?")
        if(answer){
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    
                    
                        if(data.deletedCount){
                            
                            const remaining = orders.filter(order =>order._id !== id);
                            setOrders(remaining);
                           
                        } 
                    
                    
                });
        }
       

    };
    return (
        <div>
           
           <h1 className="text-center">Your Order : {orders.length}</h1>
            <div class="table-responsive">
                <table class="table">
                <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Product Image</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Stetus</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{order.name}</td>
                                <td><img src={order.image} alt="" className="image" /></td>
                                <td>$ {order.price}</td>
                                <td>{order.address}</td>
                                <td>{order.stetus}</td>
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="btn bg-danger p-2 ms-4"
                                >
                                   Delete
                                </button>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

        </div>
    );
};

export default Orders;