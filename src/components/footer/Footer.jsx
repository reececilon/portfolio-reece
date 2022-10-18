import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Footer() {

    const start = {
        hidden: {
            display: 'none'
        },
        visible: {
            display: 'block',
            transition: { delay: 4.5 }
        }
    }

    return (
        <motion.footer variants={start} initial='hidden' animate='visible'>
            <a href='#' className='footer__logo'>Thatcher</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonial'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='#facebook'><BsFacebook /></a>
                <a href='#instagram'><BsInstagram /></a>
                <a href='#twitter'><BsTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Designed and built by Reece Thatcher </small>
            </div>
        </motion.footer>
    )
}

export default Footer
