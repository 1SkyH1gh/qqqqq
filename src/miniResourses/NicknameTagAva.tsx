import * as React from 'react'
import {FunctionComponent} from "react";

export interface NicknameTagAvaProps{
ava:JSX.Element,
    nickname:string,
    tag?:string,
    city?:string,
    date?:string
}

export const NicknameTagAva:FunctionComponent<NicknameTagAvaProps>=(props)=>{
    return(
        <div>
            <p>{props.ava}</p>
            <p>{props.nickname}</p>
            <p>{props.tag}</p>
            <p>{props.city}</p>
            <p>{props.date}</p>
        </div>
    )
}