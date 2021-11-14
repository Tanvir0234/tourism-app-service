import React from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch("https://mighty-reaches-12627.herokuapp.com/review", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId){
            alert('Added Successfully')
        }
      });
        //console.log(data);
        reset()
    }
    return (
        <div className="d-flex justify-content-center align-items-center ">
        <div className="m-5" >
            <h1 className="text-center mb-5 mt-5">Add Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})}  placeholder="Name" className="w-100 p-2 m-2" /> <br />
                
                <input {...register("description", { required:true})} placeholder="Description" className="w-100 p-2 m-2"  /><br />
                <input type="number" {...register("rating")} placeholder="Enter Rating Number" className="w-100 p-2 m-2"  /><br />
                <input {...register("image", { required: true})} placeholder="Your Image url" className="w-100 p-2 m-2"  /><br />
                <input type="submit"  className="btn btn-success px-5 mx-4" /><br />
                
            </form>
           
        </div>
    </div>
    );
};

export default AddReview;