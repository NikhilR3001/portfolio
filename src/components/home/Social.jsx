import React from "react";
import { FiPhone, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const Social = () => {
    return (
        <div className="home__social">
            <a href="tel:6360120872" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiPhone />
            </a>
            <a href="mailto:nikhil.ravikumargowda@gmail.com" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <MdOutlineEmail />
            </a>
            <a href="https://www.linkedin.com/in/ni-khil-r/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;
