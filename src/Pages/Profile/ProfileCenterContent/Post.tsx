import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./PostStyles.module.scss";
import avatar from "../../../avaMini.jpg";
import Icon from "@mdi/react";
import {mdiChevronDownBoxOutline, mdiCommentProcessingOutline, mdiCommentQuoteOutline, mdiHeartOutline} from "@mdi/js";
import {PostHeader} from "../../../miniResourses/PostHeader";

export interface PostProps {

}

export const Post:FunctionComponent<PostProps>=()=>{
    return(
        <div className={styles.newPost}>
            <PostHeader/>
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