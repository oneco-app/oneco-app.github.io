import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';
import { logo } from '../../resources/images';

const TopBar = props => {
    const { title, path } = props;
    return (
        <nav className={`${styles.topWrapper} bg-eco-dark`}>
            <div className={`${styles.logoWrapper}`}>
                <img className={`${styles.logoIcon}`} alt='logo' src={logo} />
                <h6 className={`${styles.logoText} text-eco-white`}>onEco</h6>
            </div>
            <div className={`${styles.topNavWrapper} text-eco-white`}>
                {!path ?
                    <h6 className={`${styles.topNavUser}`}>{title}</h6> :
                    <NavLink to={path} className={`${styles.topNavUser} ${styles.topNavUserLink}`}>{title}</NavLink>
                }
                <div className={`hidden ${styles.topNanks}`}>
                    <NavLink className={`${styles.topNavLink}`} to='/'>
                        <h6 className={`${styles.topNavLinkText}`}>Home</h6>
                    </NavLink>
                    <NavLink className={`${styles.topNavLink}`} to='/'>
                        <h6 className={`${styles.topNavLinkText}`}>Organisations</h6>
                    </NavLink>
                    <NavLink className={`${styles.topNavLink}`} to='/'>
                        <h6 className={`${styles.topNavLinkText}`}>Projects</h6>
                    </NavLink>
                    <NavLink className={`${styles.topNavLink}`} to='/'>
                        <h6 className={`${styles.topNavLinkText}`}>Compensations</h6>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default TopBar;