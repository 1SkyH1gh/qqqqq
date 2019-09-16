import * as React from 'react'
import {FunctionComponent} from "react";

import styles from './ProfileStyles.module.scss'

import {Fon} from "./Fon";
import {AvatarFull} from "./UserControl/AvatarFull";
import {UserContentFull} from "./ProfileCenterContent/UserContentFull";
import {NicknameTagAva} from "../../miniResourses/NicknameTagAva";
import {AvaMini} from "../../AvaMini";

export interface ProfileProps{
nickname:string
    id?:string
    status?:string
}
export const Profile:FunctionComponent<ProfileProps>=(props)=>{
    return(
        <div className={styles.ProfileFull}>
          <Fon/>
            <AvatarFull/>

                <UserContentFull/>
            <NicknameTagAva ava={<AvaMini/>} nickname={"Nikita Teluykov"} tag={"@Telqwqe"} city={"Minsk"}/>


        </div>
    )
}