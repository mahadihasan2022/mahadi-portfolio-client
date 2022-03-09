import { faCode, faCodeBranch, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = (props) => {
    const { _id, title, img, description, technology, liveSite, clientCode, serverCode } = props.project;
    const onMouseOverHandler = id => {
        document.getElementById(`project-details-id` + id).style.display = 'block';
    }
    const onMouseOutHandler = id => {
        document.getElementById(`project-details-id` + id).style.display = 'none';
    }
    return (
        <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
            onMouseOver={() => onMouseOverHandler(_id)}
            onMouseOut={() => onMouseOutHandler(_id)}
            className="col-md-6">
            <div className="border-global-style p-2 m-2 mt-4">
                <div className="p-2">
                    <img style={{ borderRadius: 10 }} className="w-100 p-2 bg-info" src={img} alt="" />
                    <h2 className="text-info fw-bolder mt-3">{title}</h2>
                </div>
                
                <a href={liveSite} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileImage} /> Live Site
                </a>
                <a href={clientCode} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCode} /> Client Code
                </a>
                {
                    serverCode &&
                    <a href={serverCode} className="btn btn-info m-1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCodeBranch} /> Server Code
                    </a>
                }
                <div id={`project-details-id` + _id} className="p-3 project-details-div">
                    <p><b className="text-info">Technology: </b>{technology}</p>
                    <p><b className="text-info">Description: </b>{description}</p>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;