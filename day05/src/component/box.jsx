import React from "react";
import '../App.css';
import styles from './box.module.css';

function Box01 () {
    return (
        <div style={{border:'1px solid #000'}} className={styles.Box}>
            box01
        </div>
    );
}

export default Box01;