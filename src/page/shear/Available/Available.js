import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Available = () => {
    return (
        <div>
            <a title="Facebook" className="fs-3 m-1 text-info" href="https://www.facebook.com/mehedysr" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a title="Linkedin" className="fs-3 m-1 text-info" href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
            <a title="Github" className="fs-3 m-1 text-info" href="https://github.com/mdmehedyhassan" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a title="Twitter" className="fs-3 m-1 text-info" href="https://twitter.com/MdMehedyHassa10" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
        </div>
    );
};

export default Available;