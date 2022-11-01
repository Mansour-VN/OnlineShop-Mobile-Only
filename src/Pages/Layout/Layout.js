import React from 'react';
import Header from '../../Component/Header/Header'
import Footer from '../../Component/Footer/Footer.module.css'

function Layout(props) {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    );
}

export default Layout;