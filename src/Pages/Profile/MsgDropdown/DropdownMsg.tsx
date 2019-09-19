import * as React from 'react'
import {FunctionComponent} from "react";
import {ExamplairMessage} from "../Msg/ExamplairMessage";
import styles from './DropdownMsgStyles.module.scss'
export interface DropdownMsgProps {

}
export const DropdownMsg:FunctionComponent<DropdownMsgProps>=()=>{
    return(
        <div className={styles.drp_dwnMsg_cont}>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
            <ExamplairMessage lastMsg={"hi,what are you doing?"}/>
        </div>
    )
}














