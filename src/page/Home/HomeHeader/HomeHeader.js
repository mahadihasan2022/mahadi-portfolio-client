import React from 'react';
import Typewriter from 'typewriter-effect';
import Available from '../../shear/Available/Available';
import homeHeaderSvg from '../../../images/svg/home-header.svg';
import resumePdf from '../../../images/pdf/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
   
const HomeHeader = () => {
    return (

        <div className="row d-flex align-items-center mt-5 mb-5">
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="col-md-6 text-center text-md-start">
                <h1 style={{fontFamily: "'Concert One', cursive"}}>
                    Hello, I'm <br />
                    <span>
                        MD MEHEDY HASSAN
                    </span>
                </h1>

                <h1 style={{ fontWeight: 700, color: '#0dcaf0', fontFamily: " 'Pompiere', cursive"}}>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer...', 'Backend Developer...'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <Available />
                <a className="btn fw-bold btn-info" href={resumePdf} download>
                    <FontAwesomeIcon icon={faDownload} /> Download Resume
                </a>
            </div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                className="col-md-6">
                <img src={homeHeaderSvg} alt="" />
            </div>
        </div>
    );
};

export default HomeHeader;