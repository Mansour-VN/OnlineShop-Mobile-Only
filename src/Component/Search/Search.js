import React from 'react';
import styles from './Search.module.css';
import Button from '../Button/Button'

function Search(props) {
    return (
        <div className={styles.search} >
            <i className="fas fa-search" id={styles.search}></i>
            <input type="text" id={styles.input}/>
            <Button styleClass="button" >
                <i className="fas fa-sliders-h" id={styles.sliders}></i>
            </Button>
        </div>
    );
}

export default Search;