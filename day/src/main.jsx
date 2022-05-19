import React from "react";
import Footer from "./footer";
import styles from './main.module.css';

function MainCom () {
    return (
        <div>
            <div className={styles.mainimg}>
                mainimg
            </div>
            <div className={styles.contents}>

            </div>
            <Footer/>
        </div>
    );
}

export default MainCom;