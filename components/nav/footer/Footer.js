// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";
import Image from 'next/image'

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './footer.module.css'

// RESOURCES ================================================================================= // 
import logoPic from './MyLogo.png'
import cV from './CV.svg'
import linkedIn from './LinkedIn.svg'
import faceBook from './Facebook.svg'


/* 
Component Name: Footer

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview:
*/


export const Footer = () => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <footer className={styles.container}>
                <div className={styles.contactTitle}>Contact</div>
                <div className={styles.footer}>
                    <div className={styles.footerLeft}>
                        <Image
                            src={logoPic}
                        />
                        <div className={styles.logoBox}>
                            <div className={styles.icon}><Image src={cV}/></div>
                            <div className={styles.icon}><Image src={linkedIn}/></div>
                            <div className={styles.icon}><Image src={faceBook}/></div>
                        </div>
                        <p className={styles.email}>james.andrew4852@gmail.com</p>
                        <p className={styles.phone}>0450574098</p>
                    </div>
                    <div className={styles.footerRight}>
                        <p className={styles.textWork}>I am currently looking for work as a Front-End Web Developer</p>
                        <div className={styles.textQuotes}>
                            <p>"James is an efficient and hard worker who willingly takes on responsibilities when issues arise, communicating well and finding solutions."<br></br><br></br><span style={{fontWeight: '300'}}>Previous Employer - Sarah Chaplin</span></p>
                            <p> <br></br><br></br><br></br> </p>
                            <p> <br></br><br></br><br></br> </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
}
