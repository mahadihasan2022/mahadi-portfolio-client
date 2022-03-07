import React from 'react';
import Typewriter from 'typewriter-effect';
import Available from '../../shear/Available/Available';
import homeHeaderSvg from '../../../images/svg/home-header.svg';
import resume from '../../../images/pdf/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// #0dcaf0    
const HomeHeader = () => {
    return (
        
        <div className="row d-flex align-items-center ">
            <div className="col-md-6 text-center">
                <h1>
                    Hello, I'm <br />
                    <span>
                        MD MEHEDY HASSAN
                    </span>
                </h1>

                <h1 style={{ fontWeight: 700, color: '#0dcaf0'}}>
                    <Typewriter
                        options={{
                            strings: ['Frontend Developer...', 'Backend Developer...'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <Available />
                <a className="btn btn-info" href={resume} download>
                    <FontAwesomeIcon icon={faDownload}/> Download Resume
                </a>
            </div>
            <div className="col-md-6">
                <img src={homeHeaderSvg} alt="" />
            </div>
        </div>
    );
};

export default HomeHeader;