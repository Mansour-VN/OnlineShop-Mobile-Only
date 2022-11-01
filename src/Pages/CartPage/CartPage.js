import React, { useEffect } from 'react';
import styles from './CartPage.module.css'
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import CartDetail from "../../Component/CartDetail/CartDetail";

function CartPage({handlePage,plus,minus,cart}) {
    let sum=0;
    const calc=()=>{
        cart.map((item)=>{
          sum+=item.number*item.price
        })}
    return (
        
        <>
            <Header></Header>
            {cart.map(item=><CartDetail key={item.id}  item={item} plus={plus} minus={minus} />)}
            <div>
            {cart.length!==0&&<div>{calc()}Total Price: $ {sum}</div>}
            </div>
            <Footer handlePage={handlePage}/>
        </>
    );
}
export default CartPage;