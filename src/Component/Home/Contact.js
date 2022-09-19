import React from 'react';
import {IoMdSchool} from "react-icons/io";
import './Contact.css'
function Contact(props) {
    return (
        <div className={'contact'}>

            <div className={'contact-div'}>
                <div className={'contact-col'}>
                    <IoMdSchool className={'about-logo'}/>
                </div>
                <div className={'contact-col1'}>
                    <h2 className={'contact-text'}>
                        Contact Us
                    </h2>
                    <div className={'contact-info'}>
                        <div className={'contact-inputs'}>
                            <input className={'contact-input'} type="text"  placeholder={'Your Name*'}/>
                            <input className={'contact-input'} type="email" placeholder={'Your Email*'}/>
                        </div>
                        <div className={'contact-inputs'}>
                            <textarea className={'contact-input'} name="" id="" cols="5" rows="5" placeholder={'Your Message*'}></textarea>
                        </div>
                    </div>
                    <div className={'contact-btn'}>
                        <button className={'contact-button'}>Send Messages</button>

                    </div>
                </div>


            </div>

        </div>
    );
}

export default Contact;
