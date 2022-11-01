import React from 'react';
import Search from "../../Component/Search/Search";
import Banner from "../../Component/Banner/Banner";
import RatingComponent from "../../Component/Rating.component/Rating.component";
import Card from "../../Component/Card/Card";
import styles from "./HomePage.module.css"
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";


function HomePage({products,handlePage , handleProduct }) {
    return (
        <>
            <Header></Header>
            <Search></Search>
            <Banner></Banner>
            <RatingComponent></RatingComponent>
            <div className={styles.cards}>
                {products.map(item => <Card  key={item.id} product={item} handlePage={handlePage} handleProduct={handleProduct}/> )}

            </div>
            <Footer handlePage={handlePage}/>
        </>
    );

}

export default HomePage;