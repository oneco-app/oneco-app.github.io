import React from 'react';
import { TopBar } from '../../components';
import { Content, Footer } from '../../sections';

import styles from './Home.module.css';

const Home = props => {
    return (
        <section className='bg-eco-dark'>
            <TopBar title='Login' path='/login' />
            <Content />
            <Footer />
        </section>
    )
}

export default Home;