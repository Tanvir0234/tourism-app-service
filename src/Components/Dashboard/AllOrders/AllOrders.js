import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';


const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user}=useAuth()

    

    useEffect(() => {
        fetch("https://mighty-reaches-12627.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => {
                
                setOrders(data)
            });
    }, []);
    

    const handleDelete = (id) => {
        let answer = window.confirm("Are you sure?")
        if(answer){
            fetch(`https://mighty-reaches-12627.herokuapp.com/deleteOrder/${id}`, {
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
            <h1 className="text-center mt-5">All Orders : {orders.length}</h1>
            <div class="table-responsive">
                <table class="table">
                <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th>Stetus</th>
                        </tr>
                    </thead>
                    {orders?.map((order, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{user?.name}</td>
                                <td>{order.watch}</td>
                                <td>$ {order.price}</td>
                                <td>{order.address}</td>
                                <td>{order.stetus}</td>
                                <button
                                    
                                    className="btn bg-success text-white p-2 ms-4"
                                >
                                   Aproved
                                </button>
                                <button
                                    onClick={() => handleDelete(order._id)}
                                    className="btn bg-danger text-white p-2 ms-4"
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

export default AllOrders;