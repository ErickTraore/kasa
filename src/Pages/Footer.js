import React from 'react';
import '../sass/mains.scss';
import logoFooter from '../assets/logo/LOGOcalc.png';
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer__content'>
                <div className='footer__content__logo'>
                    <img  src={`${logoFooter}`} alt=""
                    />
                </div>
            </div>
            <div className='footer__coppryght'>
                <div className='footer__coppryght__text'>
                    <p>
                    <RiCopyrightLine />
                        2020 Kasa, All rights reserved
                    </p>
                </div>
            </div>
       </div>
    );
};

export default Footer;
