import React from 'react';
import Button from '../Button/Button'
import styles from "../Rating.component/Rating.module.css";


function RatingComponent(props) {
    return (
        <div className={styles.content}>
            <Button styleClass='active'>
                All
            </Button>
            <Button styleClass='waiting'>
                Popular
            </Button>
            <Button styleClass='waiting'>
                Recent
            </Button>
            <Button styleClass='waiting'>
                Recomended
            </Button>
        </div>
    );
}

export default RatingComponent;