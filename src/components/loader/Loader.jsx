import React from 'react';
import logo from '../../assets/media/icon1.png';
import { motion } from 'framer-motion';
import { MdGpsFixed } from 'react-icons/md';

function loader() {

    const imgVariants = {
        hidden: {
            // scale: 1.2,
            scale: 4,
            opacity: 0,
        },
        visible: {
            opacity: 1,
            // scale: 0.3,
            scale: 1,
            position: 'absolute',
            top: ['20rem', '1.5rem'],
            margin: 0,
            // top: 0,
            // bottom: 0,
            // right: 0,
            // left: 0,
            // y: [0, -335],
            transition: {
                opacity: {
                    duration: 2
                },
                scale: {
                    delay: 1.5,
                    duration: 2},
                opacity: {duration: 1},
                // y: {
                //     delay: 1.5,
                //     duration: 2
                // }
                top: {
                    delay: 1.5,
                    duration: 2
                }
            }
        }

    }

    const sectionVariants = {
        hidden: {
            // overflow: 'visible',
            height: '100vh',
            display: 'flex',
            opacity: 1
        },
        visible: {
            // height: 0,
            display: 'none',
            opacity: 0,
            transition: {
                // height: {
                //     delay: 3.5},
                opacity: {
                    delay: 3.5,
                    duration: 1},
                display: {delay: 4.5}
            }
        }
    }

    return (
        <motion.section variants={sectionVariants} initial='hidden' animate='visible' className="loading">
            <motion.img variants={imgVariants} initial='hidden' animate='visible' exit='exit' src={logo}/>
        </motion.section>
    )
}

export default loader

