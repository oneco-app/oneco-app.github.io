import React from 'react';

import styles from './Content.module.css';

const Content = props => {
    return (
        <section className={`${styles.contentWrapper}`}>
            <div>
                <h3 className={`${styles.contentFocusContent} text-eco-white`}>
                    <span className={`$ text-eco-green`}>Grow your business while saving the planet. </span>
                    So together we can fix climate change. Bit by bit.
                    And then go beyond.
                </h3>
            </div>
            <div className={`${styles.contentAboutWrapper}`}>
                <div className={`${styles.aboutWrapper} text-eco-white`}>
                    <h4 className={`${styles.aboutProblem}`}>
                        The internet required 140 billion kWh of electricity in 2020. 
                        This accounts for about 4% of global emissions (CO₂Eq), 
                        while the airline industry's share is about 3%. We address 
                        that with a CARBON NEGATIVE approach while helping 
                        businesses grow. We will start with products for email, web 
                        and e-commerce to then go beyond. Battling carbon 
                        emissions like no one else.
                    </h4>
                    <h4 className={`${styles.aboutHelp}`}>
                        Join our waiting list while we are in closed beta.
                    </h4>
                    <div className={`${styles.signUpWrapper}`}>
                        <label className={`${styles.signUpLabel}`}>Email</label>
                        <input className={`${styles.signUpField} bg-eco-purple`} />
                        <button className={`${styles.signUpButton} bg-eco-green`}>
                            <p className={`${styles.signUpButtonText} text-eco-dark`}>OK</p>
                        </button>
                    </div>
                </div>
                <div>
                    <h5 className={`${styles.aboutGimmick} text-eco-white`}>
                        We use a dark background and avoid 
                        useless gimmicks on our website to save 
                        energy. Imagine if everyone did that.
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default Content;