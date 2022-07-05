import React from 'react';

import styles from './Button.module.css';

const ActionButton = props => {
    const { title, color } = props;
    let bgColor = '';
    if (color === 'green') {
        bgColor = 'bg-eco-green';
    }
    if (color === 'white') {
        bgColor = 'bg-eco-white';
    }
    return (
        <button className={`${bgColor} ${styles.actionButton}`}>
            {title}
        </button>
    )
}

export default ActionButton;