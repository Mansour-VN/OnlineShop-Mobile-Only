import React from 'react';
import styles from './Card.module.css';
import shirt from '../Assets/Merchandises/jean.jpg';
import Button from '../Button/Button';

function Card({product, handlePage, handleProduct, ...props}) {
    
    return (
        <div className={styles.card}>
            <img src={product.image} className={styles.img} alt={product.name}  onClick={()=>{handlePage("product") ; handleProduct(product)} } />
            <div className={styles.content}>
                <div>
                    <b className={styles.title} >{product.description}</b>
                    <div className={styles.price}>{product.price}</div>

                </div>
                <Button styleClass="fav">
                    <i className="fas fa-heart"></i>
                </Button>
            </div>
        </div>
    );
}

export default Card;