import React, { useContext } from 'react';
import CTA from './CTA';
import ME from '../../assets/media/ME.png';
import HeaderSocials from './HeaderSocials';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { BiNoEntry } from 'react-icons/bi';
import { MdMicNone } from 'react-icons/md';
import logo from '../../assets/media/icon1.png';
import { viewContext } from '../../App';

function Header() {
    const start = {
        hidden: {
            display: 'none'
        },
        visible: {
            display: 'block',
            transition: { delay: 4.5 }
        }
    }

    const {ref, inView} = useInView({
        threshold: 0.4
    });
    const animationS = useAnimation();
    const animationM = useAnimation();

    useEffect(() => {
        if(inView) {
            animationS.start({
                y: 0,
                // rotate: 90,
                transition: {
                    duration: 0.1,
                    delay: 0.5
                },
                opacity: 1
            })
            animationM.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                }
            })
        }
        if(!inView) {
            animationS.start({
                y: '-5vh',
                rotate: 90,
                opacity: 0,
            })
            animationM.start({
                opacity: 0,
                y: '5vh'
            })
        }
    }, [inView]);

    return (
        <motion.div variants={start} initial='hidden' animate='visible' ref={ref}>
            <header>
            <div className="container header__container">
                <img src={logo} className='logo'/>
                <h5>Hello I'm</h5>
                <h1>Reece Thatcher</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocials inView={inView}/>
                {/* initial={{opacity: 0, translateY: '30rem'}} animate={{opacity: 1, translateY: 0}} transition={{duration: 1}} */}
                <motion.div className="me" animate={animationM}>
                    <img src={ME} alt="me"/>
                </motion.div>

                <motion.a href='#contact' className='scroll__down' animate={animationS}>Scroll Down</motion.a>
            </div>
        </header>
        </motion.div>
    )
}

export default Header
