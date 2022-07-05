import React from 'react';
import { TopBar } from '../../components';
import { Footer, LoginSection } from '../../sections';

import styles from './Login.module.css';

const Login = props => {
    return (
        <section className='bg-eco-dark'>
            <TopBar title='Home' path='/' />
            <LoginSection />
            <Footer />
        </section>
    )
}

export default Login;