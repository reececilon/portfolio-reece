import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

function Experience() {

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
        threshold: 0.2
    });
    const animationL = useAnimation();
    const animationR = useAnimation();


    useEffect(() => {
        console.log('use effect hook experience, inView = ', inView)
        if(inView) {
            animationL.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.2
                }
            })
            animationR.start({
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.2,
                }
            })
        }
        if(!inView) {
            animationL.start({
                x: '-5vw',
                opacity: 0
            })
            animationR.start({
                x: '5vw',
                opacity: 0
            })
        }
    }, [inView]);

    return (
        <motion.section variants={start} initial='hidden' animate='visible' ref={ref} id='experience'>
            <h5>
                The skills I have
            </h5>
            <h2 className="">My Expereince</h2>
            <motion.div className="container experience__container">
                <motion.div animate={animationL} className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="expereince__content">
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>SASS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Materialize</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Express</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                    </div>
                </motion.div>
                <motion.div animate={animationR} className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="expereince__content">
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Flask</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Django</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Django Rest</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <AiFillCheckCircle className="experience__details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Expereinced</small>
                            </div>
                        </article>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default Experience
