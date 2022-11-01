import React from 'react';
import styles from './Button.module.css';
// page , button, waiting
function Button({styleClass,children,onClick}) {
    return (
        <div  className={styles[styleClass]} onClick={onClick}>
            {children}
        </div>
    );
}

export default Button;