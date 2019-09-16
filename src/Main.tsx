import * as React from 'react'
import {FunctionComponent} from "react";
import styles from "./App.module.scss";
import {LeftControlPanel} from "./LeftControlPanel";
import {Header} from "./Header";
import {MusicContentTopBlock} from "./MusicContentTopBlock";


import {Page} from "./Pages/Page";
export interface MainProps {

}

export const Main:FunctionComponent<MainProps>=()=>{
    return(
        <div>
            <div className={styles.app}>

                <LeftControlPanel/>
                <div className={styles.main}>
                    <Header/>
                    <MusicContentTopBlock/>
                    <Page/>
                </div>
            </div>
        </div>
    )
}