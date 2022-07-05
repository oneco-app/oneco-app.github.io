import React from 'react';
import { NavLink } from 'react-router-dom';
import { ActionButton, Input } from '../../components';

import styles from './Login.module.css';

const LoginSection = props => {
    return (
        <section className={`${styles.sectionWrapper}`}>
            <div className='pr-44 w-1/2 flex flex-col'>
                <h3 className={`${styles.sectionTitle}`}>Login</h3>
                <Input placeholder='username or email' type='text' label='Email or username' />
                <Input placeholder='Password' type='password' label='Password' />
                <ActionButton title='Login' color='green' />
                <NavLink to='/' className={`${styles.sectionLink}`}>Forgot Password?</NavLink>
            </div>
            <div className='pr-72 w-1/2'>
                <h5 className={`${styles.sectionSubTitle}`}>Need an account?</h5>
                <p className={`${styles.sectionInfo}`}>Join our waitlist while we are in private beta (and if you don't yet have an invitation).</p>
                <ActionButton title='Join' color='white' />
            </div>
        </section>
    )
}

export default LoginSection;