import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { RiWhatsappLine }  from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';
import {useAnimation} from 'framer-motion';
import { useContext } from 'react';
import { viewContext } from '../../App';

function Contact() {
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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_riv7ini', 'template_evwf7ki', form.current, 'IpDOYuo_0AZpW0SGJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset();
      };

      const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();


    useEffect(() => {
        if(inView) {
            setActiveNav("#contact")
            animation.start({
                scale: 1,
                opacity: 1
            })
        }
        if(!inView) {
            animation.start({
                scale: 0.8,
                opacity: 0
            })
        }
    }, [inView]);

    return (
        <motion.section variants={start} initial='hidden' animate='visible' ref={ref} id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <motion.article animate={animation} className="contact__option">
                        <HiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>reecthat@gmail.com</h5>
                        <a href="mailto:reecethat@gmail.com" target='_blank'>Send a message</a>
                    </motion.article>
                    <motion.article animate={animation} transition={{delay: 0.2}} className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>rece neil</h5>
                        <a href="https://m.me/receneil" target='_blank'>Send a message</a>
                    </motion.article>
                    <motion.article animate={animation} transition={{delay: 0.4}} className="contact__option">
                        <RiWhatsappLine className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>********738</h5>
                        <a href="https://api.whatsapp.com/send?phone=+447469946738" target='_blank'>Send a message</a>
                    </motion.article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name="email" placeholder="Your Email"  required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact
