import React from 'react';
import styles from './CartDetail.module.css'

function CartDetail({item,plus,minus}) {
    
    return (
        <div className={styles.container}>
            <img src={item.image} id={styles.img} alt="name"/>
            <div className={styles.details}>
                <div className={styles.description}>
                    <div  >
                        <div >{item.name}</div>
                        <div >{item.description}</div>
                    </div>
                    <div><i className="fas fa-check-square" id={styles.check}></i></div>
                </div>
                <div className={styles.account}>
                    <div >
                        {item.price*item.number}
                    </div>
                    <div className={styles.counter}>
                        <i className="fas fa-plus" id={styles.fas} onClick={()=>plus(item)}></i>
                        <b>{item.number}</b>
                        <i className="fas fa-minus" id={styles.fas} onClick={()=>minus(item)}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartDetail;