import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {motion} from 'framer-motion';
// import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

const HeaderSocials = ({inView}) => {

    // const {ref, inView} = useInView();
    const animationSm = useAnimation();

    useEffect(() => {
        console.log('use effect hook in socials, inView = ', inView)
        if(inView) {
            animationSm.start({
                y: -100,
                opacity: 1,
                display: 'flex',
                transition: {
                    type: 'tween', 
                    duration: 0.4,
                    delay: 0.5
                }
            })
        }
        if(!inView) {
            animationSm.start({
                y: '-25vh',
                opacity: 0
            })
        }
    }, [inView]);

    return (
        // initial={{translateY: -1000}} animate={{translateY: -100}} transition={{type: 'spring', duration: 2, bounce: 0.2, delay: 1}}
        <motion.div className="header__socials" animate={animationSm}>
            <a href="https://linkedin.com" target="_blank" className='sicon'><BsLinkedin /></a>
            <a href="https://github.com" target="_blank" className='sicon'><FaGithub /> </a>
            <a href="https://dribbble.com" target="_blank" className='sicon'><FiDribbble /></a>
        </motion.div>
    )
}

export default HeaderSocials
