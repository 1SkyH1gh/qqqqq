import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./ProfileDescription.module.scss";
import Icon from "@mdi/react";
import {mdiLibraryMusicOutline, mdiPostOutline, mdiStarOutline} from "@mdi/js";

export interface ProfileDescriptionProps{
    nickname:string,
    id:string,
    status?:string
}

export const ProfileDescription:FunctionComponent<ProfileDescriptionProps>=(props)=>{
    return(
        <div className={styles.Profile}>

            <div className={styles.descriptionProfile}>
                <div className={styles.nicknameID}>
                    <span className={styles.nickname}>{props.nickname}</span>
                    <span className={styles.id}>{props.id}</span>
                </div>

                <span className={styles.status}>{props.status}</span>
            </div>
            <div className={styles.profileContent}>
                <Icon path={mdiPostOutline} size={1} color={"#444444"}/>
                <Icon path={mdiLibraryMusicOutline} size={1} color={"#444444"}/>
                <Icon path={mdiStarOutline} size={1} color={"#444444"}/>
            </div>
        </div>
    )
}