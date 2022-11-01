import React, {useEffect, useState} from 'react';
import styles from '../Footer/Footer.module.css'
import Button from '../Button/Button'

function Footer({handlePage}) {
    const [icons, setIcons] = useState({home: "page", bill: "Inactive", cart: "Inactive", user: "Inactive",});
    // useEffect(() => {
    // }, [icons]);
    const handleIcon = (icon) => {
        console.log(icon)
        if (icon === "home") {
            setIcons
            (icons.home = "page")
            setIcons
            (icons.bill = "Inactive")
            setIcons
            (icons.user = "Inactive")
            setIcons
            (icons.cart = "Inactive")

        }else if (icon === "bill"){
            setIcons
            (icons.home = "Inactive")
            setIcons
            (icons.bill = "page")
            setIcons
            (icons.user = "Inactive")
            setIcons
            (icons.cart = "Inactive")
        }else if (icon === "user"){
            icons.home = "Inactive"
            icons.bill = "Inactive"
            icons.user = "page"
            icons.cart = "Inactive"
        }else if (icon === "cart"){
            icons.home = "Inactive"
            icons.bill = "Inactive"
            icons.user = "Inactive"
            icons.cart = "page"
        }
        console.log(icons)
    }
    return (
        <div className={styles.footer}>
            <Button styleClass={icons.home} id="home" onClick={() => {
                handlePage('home');
                handleIcon('home');
            }}>
                <i className="fas fa-house-user"></i>
            </Button>
            <Button styleClass={icons.bill} id="settlement" onClick={() => {
                handlePage('home');
                handleIcon('bill');
            }}>
                <i className="fas fa-file-invoice-dollar"></i>
            </Button>
            <Button styleClass={icons.cart} id='cart' onClick={() => {
                handlePage('cart');
                handleIcon('cart');
            }}>
                <i className="fas fa-cart-arrow-down"></i>
            </Button>
            <Button styleClass={icons.user} id='user' onClick={() => {
                handlePage('cart');
                handleIcon('user');
            }}>
                <i className="fas fa-user"></i>
            </Button>
        </div>
    );
}

export default Footer;