import * as React from 'react'
import {FunctionComponent} from "react";
import {AvaMini} from "../../../miniResourses/AvaMini";
import styles from './FriendListStyles.module.scss'
export interface FriendListProps {
    firstName:string
}

export const FriendList:FunctionComponent<FriendListProps>=(props)=>{
    return(
        <div className={styles.frnd_list_cont}>
            <div className={styles.title}>Friends list</div>
            <div className={styles.pool}>
            <AvaMini/>
            <AvaMini/>
            <AvaMini/>
            <AvaMini/>
            <AvaMini/>
                <AvaMini/>
                <AvaMini/>
                <AvaMini/>
                <AvaMini/>
                <AvaMini/>
            </div>
        </div>
    )
}