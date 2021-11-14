import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('')

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }


    const handleSubmit=(e)=>{
        const user = {email}
        fetch('http://localhost:5000/users/admin',{
           method : 'PUT',
           headers:{
               'content-type':'application/json'
           },
           body : JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Added Admin Successfully')
            
            }
        })
        
        e.preventDefault()
    }

    return (
        <div >
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mb-3 w-75">

                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleOnBlur} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;