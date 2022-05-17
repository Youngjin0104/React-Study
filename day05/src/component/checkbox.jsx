import React from "react";
import styles from './checkbox.module.css';
import { MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';

function CheckBox ({children, checked}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} /><span>{children}</span>
                <div className={styles.icon}>
                    {checked ? (<MdCheckBox className={styles.checked}/>): (<MdCheckBoxOutlineBlank/>)}
                </div>
            </label>
        </div>
    )
}

export default CheckBox;