// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";
import { ReactNode } from "react";

// NEXT IMPORTS ============================================================================== // 

// COMPONENT IMPORTS ========================================================================= // 
import { Navbar } from "../nav/navbar/Navbar";
import { Footer } from "../nav/footer/Footer";

// STYLES ==================================================================================== // 
import styles from './layout.module.css'

// RESOURCES ================================================================================= // 



/* 
Component Name:

Author: Logan
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
The layout wraps the whole app to keep some elements consistent throughout. Such as the navbar 
and footer in this case.
*/


export const Layout = ({children}) => {

    // VARIABLES ============================================================================== // 

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <div className={styles.container}>
                <Navbar/>
                    <main className={styles.main} id={`top`}>
                        {children}
                    </main>
                <Footer/>
            </div>
        )
}
