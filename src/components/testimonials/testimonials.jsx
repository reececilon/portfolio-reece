import React from 'react';
import profile1 from '../../assets/media/profile1.png';
import profile3 from '../../assets/media/profile3.png';
import profile4 from '../../assets/media/profile4.png';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion';

const data = [
    {   
        id: 1,
        avatar: profile1,
        name: 'Roger',
        review: "I must say that I was really impressed by how Reece managed to meet my needs! Even though my website was in a different language (Portuguese) he delivered! Thanks again for the incredible work, now my website looks professional and gets way more visits! Roger VSL"
    },
    {   
        id: 2,
        avatar: profile3,
        name: 'An Le',
        review: "As a start up business, Reece listened to our needs from conception to completion. His attention to detail and creativity resulted in a website we were very happy with. I will definitely use him again in future projects. "
    },
    {   
        id: 3,
        avatar: profile4,
        name: 'Emma',
        review: "The work completed by Reece was done at a high standard. I only have good things to say regarding the entire process and it's clear he cares about the work he is completing."
    }
]

function Testimonials() {

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
        <motion.section variants={start} initial='hidden' animate='visible' id='testimonial'>
            <h5>Reviews from clients</h5>
            <h2>Testimonials</h2>

            <Swiper 
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                >
                {
                    data.map(({id, avatar, name, review}) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt='Avatar of client' loading="lazy"/>
                                </div>
                                <h5>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </motion.section>
    )
}

export default Testimonials
