// REACT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from 'next/image'

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './project-card.module.css'

// RESOURCES ================================================================================= // 


/* 
Component Name: Project Card

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
This component is displays a card with a title of an project and a link to it.
When being called it takes in a prop (data) which is a Project object.

    data = {
        body: string,
        id: number,
        title: string,
        userId: number
    }
*/


export const GradCard = ({data}) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <div className={styles.container} id={`section${data.id}`}>
                <div className={styles.lineBox}>
                    <div className={styles.cardLine}></div>
                </div>
                <div className={styles.mainContent}>
                    <div className={styles.cardLeftSplit}>
                        {/* <Image src={`${IMG_TO_SRC[data.image]}`} layout='fill'></Image> */}
                        <Image src={data.image} layout='fill' objectFit="cover"></Image>
                    </div>
                    <div className={styles.contentLine} style={{backgroundColor: `${data.colour}`}}></div>
                    <div className={styles.cardRightSplit}>
                        <div className={styles.cardTopText}>
                            <h5 style={{color: `${data.colour}`}}>{data.area}</h5>
                            <h5 className={styles.drift}>{data.type}</h5>
                        </div>
                        <div className={styles.cardMidText}>
                            <p>{data.body}</p>
                        </div>
                        <div className={styles.cardBotText}>
                            <div className={styles.projectHover}>
                                <Link href={`/portfolio/${data.id}#top`}>
                                    <a className={styles.cardLink} style={{color: `${data.colour}`}}>
                                        Project Page
                                    </a>
                                </Link>
                                <div className={styles.projectLine} style={{backgroundColor: `${data.colour}`}}></div>
                            </div>
                            <h4>{data.date}</h4>
                        </div>
                    </div>
                </div>


            </div>
        )
}
