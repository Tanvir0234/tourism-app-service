import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch("https://mighty-reaches-12627.herokuapp.com/addProduct", {
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
        <div className="border d-flex justify-content-center align-items-center ">
        <div >
            <h1 className="text-center">Add a New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true})}  placeholder="Name" className="p-2 m-2" /> <br />
                
                <input {...register("description", { required:true})} placeholder="Description" className="p-2 m-2"  /><br />
                <input type="number" {...register("price")} placeholder="price" className="p-2 m-2"  /><br />
                <input {...register("image", { required: true})} placeholder="Image url" className="p-2 m-2"  /><br />
                <input type="submit"  className="btn btn-danger px-5 mx-4" /><br />
                
            </form>
           
        </div>
    </div>
    );
};

export default AddProduct;