import React from 'react';
import educationSvg from '../../../images/svg/education.svg'

const Education = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center pb-2 border-bottom border-info border-5 text-info">Education</h2>
            <div className="row d-flex flex-md-row-reverse">
                <div className="col-md-6 d-flex text-center">
                    <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                        src={educationSvg} alt="" />
                </div>

                <div className="col-md-6">
                    <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        className="p-2 mt-2 text-center text-md-start">
                        <h3 className="text-info">Education</h3>
                        <h5><i>Jul 2018 - Current</i></h5>
                        <h6>Bachelor of Science: Mathematics</h6>
                        <p><small>Siddeshwari College, Dhaka</small></p>

                        <h5 className="mt-3"><i>Passed by 2018</i></h5>
                        <h6>Science Education</h6>
                        <p><small>Khilgaon Model University College, Dhaka</small></p>

                        <h3 className="text-info mt-5">Languages</h3>
                        <h5>Bengali - <small><i>Native</i></small></h5>
                        <h5>English - <small><i>(reading, writing, speaking)</i></small></h5>

                        <h3 className="text-info mt-5">Hobby</h3>
                        <h6>My hobbies are programming coding, reading books and doing social work</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;