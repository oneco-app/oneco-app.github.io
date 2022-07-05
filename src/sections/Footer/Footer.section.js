import React from 'react';
import { NavLink } from 'react-router-dom';
import { circle, logo } from '../../resources/images';

import styles from './Footer.module.css';

const Footer = props => {
    return (
        <section className={`${styles.footerWrapper} border-eco-white text-eco-white`}>
            <div className={`${styles.sectionOne}`}>
                <div className={`${styles.sectionOneBadgeWrapper} bg-eco-white`}>
                    <div className={`${styles.sectionOneBadge} bg-eco-dark`}>
                        <img className={`${styles.sectionOneBadgeIcon}`} alt='logo' src={logo} />
                        <h6 className={`${styles.sectionOneBadgeText}`}>Certified <br /> Climate Friendly</h6>
                    </div>
                    <button className={`${styles.sectionOneButton}`}>
                        <p className={`${styles.sectionOneButtonText} text-eco-dark`}>Click to verify</p>
                    </button>
                </div>
                <h5 className={`${styles.sectionOneTitle}`}>Sustainability as a Service with Benefits</h5>
                <div className={`${styles.sectionOneCopyWrapper}`}>
                    <h6 className={`${styles.sectionOneCopy}`}>Made in E.U</h6>
                    <img alt='circle' src={circle} className={`${styles.sectionOneIcon}`} />
                </div>
            </div>
            <div className={`${styles.section}`}>
                <h5 className={`${styles.sectionTitle}`}>onEco</h5>
                <NavLink className={`${styles.sectionLink} text-eco-white`} to='/'>
                    <h6>Home</h6>
                </NavLink>
            </div>
            <div className={`${styles.section}`}>
                <h5 className={`${styles.sectionTitle}`}>Tools</h5>
                <NavLink className={`${styles.sectionLink} text-eco-white`} to='/'>
                    <h6>YOLO Calculator</h6>
                </NavLink>
            </div>
            <div className={`${styles.section}`}>
                <NavLink className={`${styles.sectionLink} text-eco-white`} to='/'>
                    <h6>Terms of Service</h6>
                </NavLink>
                <NavLink className={`${styles.sectionLink} text-eco-white`} to='/'>
                    <h6>Privacy</h6>
                </NavLink>
                <NavLink className={`${styles.sectionLink} text-eco-white`} to='/'>
                    <h6>Imprint</h6>
                </NavLink>
            </div>
        </section>
    )
}

export default Footer;