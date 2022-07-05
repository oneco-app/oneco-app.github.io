import React from 'react';

import styles from './Input.module.css';

const Input = props => {
    const { label, placeholder, type } = props;

    return (
        <div className={`${styles.inputWrapper}`}>
            <label className={`${styles.inputLabel}`}>{label}</label>
            <input className={`${styles.inputField}`} placeholder={placeholder} type={type} />
        </div>
    )
}

export default Input;