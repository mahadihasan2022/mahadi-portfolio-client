import { faCode, faCodeBranch, faComputerMouse, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = (props) => {
    const { _id, title, img, description, technology, liveSite, clientCode, serverCode } = props.project;
    const onMouseOverHandler = id => {
        document.getElementById(`project-details-id` + id).style.display = 'block';
        document.getElementById('mouseOverAlertTeg' + id).style.display = 'none';
    }
    const onMouseOutHandler = id => {
        document.getElementById(`project-details-id` + id).style.display = 'none';
        document.getElementById('mouseOverAlertTeg' + id).style.display = 'block';
    }
    return (
        <div
            onMouseOver={() => onMouseOverHandler(_id)}
            onMouseOut={() => onMouseOutHandler(_id)}
            className="col-md-6">
            <div className="border-global-style p-2 m-2 mt-4">
                <div className="p-3">
                    <img style={{ borderRadius: 10 }} className="w-100" src={img} alt="" />
                    <h2 className="text-info fw-bolder mt-3">{title}</h2>
                </div>
                <h4 id={'mouseOverAlertTeg' + _id} className="text-danger text-center">
                    <FontAwesomeIcon icon={faComputerMouse}/> Mouse over For details
                </h4>
                <div id={`project-details-id` + _id} className="p-3 project-details-div">
                    <p><b className="text-info">Technology: </b>{technology}</p>
                    <p><b className="text-info">Description: </b>{description}</p>
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
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;