import React, { useContext } from 'react';
import ME from '../../assets/media/ME.jpeg';
import profile1 from '../../assets/media/profile1.jpeg';
import profile2 from '../../assets/media/profile2.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdOutlineLibraryAddCheck } from 'react-icons/md';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { viewContext } from '../../App';

function About() {
    const [activeNav, setActiveNav] = useContext(viewContext);
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
        if(inView) {
            setActiveNav("#about");
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
                        <img animate={animationP} src={profile2} alt="About image" loading="lazy"/>
                    </motion.div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <motion.article animate={animation1} className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years</small>
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
                    Hello! I'm Reece, a full-stack web developer with over two years 
                    of experience and a passion for coding that began during university, 
                    where I analyzed Higgs boson interactions. Awestruck by the power of programming, 
                    I delved deeper into its potential.
                    </p>
                    <p>
                    I've dedicated myself to front-end development, crafting 
                    full-stack web applications, implementing new features, optimizing 
                    design, and improving UX/UI. I hold a Level 5 Diploma in Full-Stack 
                    Web Development from the Code Institute and excel in JavaScript, 
                    Python, C#, React, .NET, Flask, and Django. 
                    With a diverse skill set and significant expertise, 
                    I'm well-equipped for any web development challenge.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </motion.section>
    )
}

export default About
