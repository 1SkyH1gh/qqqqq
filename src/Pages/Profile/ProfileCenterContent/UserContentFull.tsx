import * as React from 'react'
import {FunctionComponent} from "react";
import {PhotoCollection} from "./PhotoCollection";
import {ProfileDescription} from "./ProfileDescription";
import {NewPost} from "./NewPost";
import {Post} from "./Post";
import styles from './UserContentFullStyles.module.scss'
import {FriendList} from "./FriendList";

export interface UserContentFullProps{

}

export const UserContentFull:FunctionComponent<UserContentFullProps>=()=>{
    return(
        <div className={styles.ContentBlock}>

        <PhotoCollection/>
        <div className={styles.contentColumn}>
        <div className={styles.contentRow}>

        <ProfileDescription  status={"empty status"}/>

            <NewPost/>
        </div>
            <div className={styles.Postrow}>
                <FriendList firstName={"nikita"}/>
            <Post/>
            </div>
        </div>


        </div>
    )
}