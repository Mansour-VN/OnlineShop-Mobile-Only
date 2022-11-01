import React from 'react';
import styles from './Header.module.css';
import user from "../Assets/User/user.jpg"
import Button from '../Button/Button'


function Header(props) {
    return (
        <div className={styles.header}>
            <Button styleClass='page'>
                <i className="fas fa-th-large" id={styles.large}></i>
            </Button>
            <div id={styles.lines}>
                <div id={styles.line1}>Lorem ipsum.</div>
                <div id={styles.line2}>Lorem ipsum.</div>
            </div>
            <img src={user} alt=""/>
        </div>
    );
}

export default Header;