import React from 'react';
import contactSvg from '../../images/svg/contact.svg';
import ContactForm from './ContactForm';
import phoneSvg from '../../images/svg/phone.svg';
import emailSvg from '../../images/svg/email.svg';
import locationSvg from '../../images/svg/location.svg';

const Contact = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center pb-2 mt-5 border-bottom border-info border-5 text-info">Contact Me</h2>
            <div className="row mt-5 mb-5">
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="col-md-6 d-flex">
                    <img className="w-100" src={contactSvg} alt="" />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="col-md-6">
                    <ContactForm />
                </div>
            </div>
            <div className="row text-center">
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img className="w-100" src={phoneSvg} alt="" />
                        <h3 className="text-info mt-3">Mobile Number</h3>
                        <p>+880 1870 289 584</p>
                    </div>
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2500"
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img className="w-100" src={emailSvg} alt="" />
                        <h3 className="text-info mt-3">Email Address</h3>
                        <p>mdmehedyh55@gmail.com</p>
                    </div>
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000"
                    className="col-md-4">
                    <div className="border-global-style p-2 m-2 mt-4">
                        <img className="w-100" src={locationSvg} alt="" />
                        <h3 className="text-info mt-3">Location</h3>
                        <p>383/B, Khilgaon Taltola, Dhaka-1219</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;