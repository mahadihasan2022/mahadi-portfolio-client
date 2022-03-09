import React from 'react';
import { useForm } from "react-hook-form";
const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <h3 className="text-center">Contact me by email here</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="text-info">
                <label htmlFor="name">Name</label>
                <input {...register("name", { required: true })} placeholder="Enter Your Name" className="form-control" />
                {errors.name && <span>Name field is required</span>}
                
                <label className="mt-3" htmlFor="email">Email</label>
                <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="form-control" />
                {errors.email && <span>Email field is required</span>}
                
                <label className="mt-3" htmlFor="phone">Phone Number</label>
                <input type="number" {...register("phone")} placeholder="Enter Your Phone Number" className="form-control" />
                
                <label className="mt-3" htmlFor="company">Company Name</label>
                <input {...register("company")} placeholder="Enter Your Company Name" className="form-control" />
               
                <label className="mt-3" htmlFor="message">Message</label>
                <textarea {...register("message")} placeholder="Enter Your Message" className="form-control" />

                <input type="submit" value="Send Email" className="btn btn-info form-control fw-bolder mt-2"/>
            </form>
        </div>

    );
};

export default ContactForm;