import React from "react";
import styles from './checkbox.module.css';
import { MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
import { DiAndroid } from "react-icons/di";

function CheckBox ({children, checked, box, ...rest}) {
    return (
        <div className={styles.checkbox}>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div className={styles.icon}>
                    {checked ? (<MdCheckBox className={styles.checked}/>): (<MdCheckBoxOutlineBlank/>)}
                </div>
            </label>
            <span>{children}</span>
            <div>
                {box ? (<DiAndroid className={styles.icon2}/>) : (<DiAndroid className={styles.icon2_1}/>)}
            </div>
        </div>
    )
}

export default CheckBox;