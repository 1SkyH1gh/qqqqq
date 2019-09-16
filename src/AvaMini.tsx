import * as React from 'react'
import {FunctionComponent} from "react";
import ava from './avaMini.jpg'
import styles from './AvaStyles.module.scss'
export interface AvaMiniProps {

}

export const AvaMini:FunctionComponent<AvaMiniProps>=()=>{
    return(
        <img src={ava} className={styles.ava}/>
    )
}