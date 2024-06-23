import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';

function Services() {

    const {ref, inView} = useInView({
        threshold: 0.7
    });
    const animationB = useAnimation();


    useEffect(() => {
        // if(inView) {
        //     animationB.start({
        //         opacity: 1
        //     })
        // }
        // if(!inView) {
        //     animationB.start({
        //         opacity: 0
        //     })
        // }
    }, [inView]);

    return (
        <section ref={ref} id='services'>
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <motion.article animate={animationB} className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                    </ul>
                </motion.article>
                <motion.article animate={animationB} className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                    </ul>
                </motion.article>
                <motion.article animate={animationB} className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet elit.</p>
                        </li>
                    </ul>
                </motion.article>
            </div>
        </section>
    )
}

export default Services
