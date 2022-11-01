import React from 'react';
import styles from './Banner.module.css';
import banner from '../Assets/Merchandises/big sale.png'

function Banner(props) {
    return (
            <div className={styles.banner}>
                <img src={banner} alt="Banner" id={styles.image}/>
                <div id={styles.title}>Big Sale</div>
                <div id={styles.content}>Lorem ipsum dolor sit amet dolor sit.</div>
            </div>
    );
}


export default Banner;