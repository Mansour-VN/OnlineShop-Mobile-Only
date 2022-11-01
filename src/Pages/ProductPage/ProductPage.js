import React from 'react';
import styles from './ProductPage.module.css';
import Button from '../../Component/Button/Button'

function ProductPage({product, previousPage, addToCart, handlePage}) {
    return (
        <>
            <div>
                <img id={styles.img} src={product.image} alt="{product.image}"/>
                <div className={styles.price}>
                    <b>{product.name}</b>
                    <b>{product.price}</b>
                </div>
                <div>
                    <div>{product.description}</div>
                </div>
                <div>{product.explanation}</div>
            </div>
            <div id={styles.header}>
                <Button styleClass="page" onClick={() => previousPage()}>
                    <i className="fas fa-chevron-circle-left"></i>
                </Button>
                <Button styleClass="fav">
                    <i className="fas fa-heart"></i>
                </Button>
            </div>
            <div id={styles.footer}>
                <Button styleClass={"page"} onClick={() =>addToCart(product)} >Buy Now</Button>
                <Button styleClass="page" onClick={() => handlePage('cart')}>
                    <i className="fas fa-cart-arrow-down"></i>
                </Button>
            </div>

        </>
    );
}

export default ProductPage;