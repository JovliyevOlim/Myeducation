import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";
import {useState} from "react";
import {IoMdSchool} from "react-icons/io";
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
function Footer(props) {



    return (
        <div className={'home-footer'}>
            <div className={'col1'}>
                <div className={'footer-logos'}>
                    <IoMdSchool className={'footer-logo'}/>
                    <h2>MY EDUCATION</h2>
                </div>
            </div>
            <div className={'footer-text'}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dignissimos facere obcaecati possimus quibusdam repellendus, reprehenderit rerum! Accusamus accusantium aspernaturHic, natus, quasi.
                </p>
            </div>
            <div className={'footer-link'}>
                <FaFacebookF className={'link'}/>
                <BsTwitter className={'link'}/>
                <BsLinkedin className={'link'}/>
                <AiFillInstagram className={'link'}/>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Footer;
