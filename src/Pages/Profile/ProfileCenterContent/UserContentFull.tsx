import * as React from 'react'
import {FunctionComponent} from "react";
import {PhotoCollection} from "./PhotoCollection";
import {ProfileDescription} from "./ProfileDescription";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import styles from './UserContentFullStyles.module.scss'
export interface UserContentFullProps{

}

export const UserContentFull:FunctionComponent<UserContentFullProps>=()=>{
    return(
        <div className={styles.ContentBlock}>

        <PhotoCollection/>
        <div className={styles.contentColumn}>
        <div className={styles.contentRow}>

        <ProfileDescription nickname={"IlyaTormanov"} id={"@qweasr"} status={"empty status"}/>

            <NewPost/>
        </div>
            <div className={styles.Postrow}>
            <Post/>
            </div>
        </div>


        </div>
    )
}