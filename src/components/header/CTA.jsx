import React from 'react'
// @ts-ignore
import Resume from '../../assets/media/Resume.2024.pdf';

function CTA() {
    return (
        <div className="cta">
            <a className="btn" href={Resume} download>Download CV</a>
            <a className="btn btn-primary" href="#contact">Let's Talk</a>
        </div>
    )
}

export default CTA
