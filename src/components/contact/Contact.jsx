import React, { useRef, useState } from "react";
import "./contact.css";
import { HiOutlineMail, HiOutlineArrowSmRight } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";

const Contact = () => {
    const form = useRef();
    const [message, setMessage] = useState(""); // State to hold success/error message

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_l6mrhdn",
                "template_4y25g2k",
                form.current,
                "B14J1babWk99VMfie"
            )
            .then(
                (result) => {
                    console.log("Email successfully sent!", result.text);
                    setMessage("✅ Message sent successfully!"); 
                },
                (error) => {
                    console.error("Failed to send email:", error);
                    setMessage("❌ Failed to send message. Try again."); 
                }
            );

        e.target.reset(); 

        setTimeout(() => {
            setMessage(""); 
        }, 5000);
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Let's Connect</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <HiOutlineMail className="contact__card-icon" />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">nikhil.ravikumargowda@gmail.com</span>
                            <a href="mailto:nikhil.ravikumargowda@gmail.com" className="contact__button">
                                Write Me{" "}
                                <HiOutlineArrowSmRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="contact__info">
                    <div className="contact__card">
                        <FiPhone className="contact__card-icon" />
                        
                        <h3 className="contact__card-title">Phone Number</h3>
                        <span className="contact__card-data">6360120872</span>
                        
                        <a href="tel:6360120872" className="contact__button">
                            Call Me{" "} 
                            <HiOutlineArrowSmRight className="contact__button-icon" />
                        </a>
                    </div>
                </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">What's the project?</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="user_name" className="contact__form-input" placeholder="Type your name" required />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="user_email" className="contact__form-input" placeholder="Type your email" required />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className="contact__form-input" placeholder="Provide some project details..." required></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message
                        </button>

                        {/* Show success or error message */}
                        {message && <p className="contact__message">{message}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
