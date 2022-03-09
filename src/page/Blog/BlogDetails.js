import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BlogDetails = (props) => {
    const { headline, img, description, link } = props.blog;
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            className="col-lg-4 col-6"
        >
            <div
                className="border-global-style p-2 m-2 mt-4 "
                style={{height: '95%'}}
            >
                <img style={{ borderRadius: '7px' }} className="w-100" src={img} alt="" />
                <h5 className="pt-3 text-info">{headline}</h5>
                <p style={{ textAlign: "justify" }}><small>{description} <span className="text-secondary">...see more</span></small></p>
                <a href={link} className="btn btn-info" target="_blank" rel="noopener noreferrer">
                    Read Continue... <FontAwesomeIcon icon={faArrowTrendUp} />
                </a>
            </div>
        </div>
    );
};

export default BlogDetails;