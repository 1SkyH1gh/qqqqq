import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./PostStyles.module.scss";
import avatar from "../../../avaMini.jpg";
import Icon from "@mdi/react";
import {mdiChevronDownBoxOutline, mdiCommentProcessingOutline, mdiCommentQuoteOutline, mdiHeartOutline} from "@mdi/js";

export interface PostProps {

}

export const Post:FunctionComponent<PostProps>=()=>{
    return(
        <div className={styles.newPost}>
            <div className={styles.newPost_header}>
                <div className={styles.newPost_header_left}>
                    <img src={avatar} className={styles.miniAvatar}/>
                    <div className={styles.nickname_data}>
                        <div>Ilya Tormanov</div>
                        <div>18.08.2021</div>
                    </div>
                </div>
                <Icon path={mdiChevronDownBoxOutline} size={1} className={styles.newPost_header_right}/>

            </div>
            <div className={styles.newPost_content}>Вы знали, что большинство алгоритмических проблем можно свести к нескольким основным парадигмам?

                В нашем материале читайте про 4 основные алгоритмические парадигмы с примерами реализации на C++.</div>
            <div className={styles.newPost_statistic}>
                <Icon path={mdiCommentProcessingOutline} size={1}/>
                <Icon path={mdiHeartOutline} size={1}/>
                <Icon path={mdiCommentQuoteOutline} size={1}/>
            </div>

        </div>
    )
}