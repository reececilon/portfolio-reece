import React from 'react';
import ME from '../../assets/media/ME.jpeg';
import profile1 from '../../assets/media/profile1.jpeg';
import profile2 from '../../assets/media/profile2.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

function About() {

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
        threshold: 0.3
    });
    const animationP = useAnimation();
    const animation1 = useAnimation();
    const animation2 = useAnimation();
    const animation3 = useAnimation();


    useEffect(() => {
        console.log('use effect hook abouts, inView = ', inView)
        if(inView) {
            animationP.start({
                transition: {
                    delay: 0.5,
                    type: 'tween',
                    duration: 0.1
                },
                rotate: 10
            })
            animation1.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween',
                    delay: 0,
                    duration: 0.2
                }
            })
            animation2.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween',
                    delay: 0.2,
                    duration: 0.2
                }
            })
            animation3.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween',
                    delay: 0.4,
                    duration: 0.2
                }
            })
        }
        if(!inView) {
            animationP.start({
                rotate: 0
            })
            animation1.start({
                x: '5vw',
                opacity: 0,
                transition: {
                    type: 'tween',
                    delay: 0
                }
            })
            animation2.start({
                x: '5vw',
                opacity: 0,
                transition: {
                    type: 'tween',
                    delay: 0.2
                }
            })
            animation3.start({
                x: '5vw',
                opacity: 0,
                transition: {
                    type: 'tween',
                    delay: 0.4
                }
            })
        }
    }, [inView]);

    return (
        <motion.section variants={start} initial='hidden' animate='visible' ref={ref} id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <motion.div animate={animationP} className="about__me-image">
                        <img animate={animationP} src={profile2} alt="About image"/>
                    </motion.div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <motion.article animate={animation1} className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>1+ Years</small>
                        </motion.article>
                        <motion.article animate={animation2} className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>5+ Clients</small>
                        </motion.article>
                        <motion.article animate={animation3} className='about__card'>
                            <MdOutlineLibraryAddCheck className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </motion.article>
                    </div>

                    <p>
                    I'm Reece, a junior full-stack web developer. 
                    When I was in university, I used coding to analyze Higgs boson interactions using real-world data. 
                    I thought this was so amazing, and it made me realise how powerful coding can be.
                    This led me to want to learn more about coding. 
                    </p>
                    <p>
                    As of now, I enjoy building full-stack web applications. 
                    In my pursuit of a career in web development, 
                    I have gained a plethora of skills.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </motion.section>
    )
}

export default About
