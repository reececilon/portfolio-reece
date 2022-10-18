import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {RiBook2Line} from 'react-icons/ri';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {BsFolder} from 'react-icons/bs';
import { useState } from 'react';
import {motion} from 'framer-motion';

function Nav() {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <motion.nav initial={{width: 0}} animate={{width: 'max-content'}} transition={{duration: 0.5}} exit={{opacity: 0}}>
            <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:0.7}}href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></motion.a>
            <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:0.9}} href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></motion.a>
            <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:1.1}} href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></motion.a>
            {/* <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:0.4}} href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></motion.a> */}
            <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:1.3}} href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFolder /></motion.a>
            <motion.a initial={{opacity: 0}} animate={{opacity: 1}}  transition={{delay:1.5}} href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></motion.a>
        </motion.nav>
    )
}

export default Nav
