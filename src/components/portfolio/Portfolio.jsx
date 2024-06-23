import React, {useContext, useEffect} from 'react'
import {useInView} from 'react-intersection-observer';
import IMG1 from '../../assets/media/IMG1.png';
import IMG2 from '../../assets/media/IMG2.png';
import IMG3 from '../../assets/media/IMG3.png';
import IMG4 from '../../assets/media/IMG4.png';
import IMG5 from '../../assets/media/IMG5.png';
import IMG6 from '../../assets/media/IMG6.png';
import { motion } from 'framer-motion';
import { viewContext } from '../../App';

const data = [
    {
        id: 1,
        image:  IMG1,
        title:  'TwigElites Twiglet locator',
        github: 'https://github.com/TaroSchenker/TwigElites-Client',
    },
    {
        id: 2,
        image:  IMG2,
        title:  'Trial by Trivia',
        github: 'https://github.com/Saamiya96/LAP3Client/tree/main/trial-by-trivia',
        demo:   'https://62f611ce8c00f41301ee8aa2--trial-by-trivia.netlify.app/'
    },
    {
        id: 3,
        image:  IMG3,
        title:  'Habitat',
        github: 'https://github.com/Ismael76/Habitat-Client',
        demo:   'https://habitat-app.netlify.app/'
    },
    {
        id: 4,
        image:  IMG4,
        title:  'We-Post',
        github: 'https://github.com/Ismael76/WePost-Client',
        demo:   'https://we-post.netlify.app/'
    },
    {
        id: 5,
        image:  IMG5,
        title:  'Critiqal',
        github: 'https://github.com/reececilon/critiqal-p4',
        demo:   'https://critiqal.herokuapp.com/'
    },
    {
        id: 6,
        image:  IMG6,
        title:  'Retail KPI',
        github: 'https://github.com/reececilon/project-3-retail-kpi',
    }
]

function Portfolio() {
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
        threshold: 0.2
    });


    useEffect(() => {
        if(inView) {
            setActiveNav("#portfolio");
        }
    }, [inView]);

    return (
        <motion.section variants={start} initial='hidden' animate='visible' ref={ref} id='portfolio'>
            <h5>My recent work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} loading="lazy"/>
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target="_blank">GitHub</a>
                                    {demo && <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}

export default Portfolio
