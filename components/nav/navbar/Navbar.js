// REACT IMPORTS ============================================================================== // 
import { useEffect, useState } from "react";
import Image from 'next/image'

// NEXT IMPORTS ============================================================================== // 
import Link from "next/link";
import { useRouter } from "next/router";

// COMPONENT IMPORTS ========================================================================= // 

// STYLES ==================================================================================== // 
import styles from './navbar.module.css'

// RESOURCES ================================================================================= // 
import logoPic from './MyLogo.png'

/* 
Component Name: Navbar

Author: Logan Trundle
Collaborators:
Version #: 1.0.0
Date Created: 16/09/2022
Date Updated:

Overview: 
*/


export const Navbar = () => {

    // VARIABLES ============================================================================== // 
    const router = useRouter();

    // COMPONENT INIT ========================================================================= // 
    useEffect(() => {}, []);

    // RENDER ================================================================================= // 
    return (
            <nav className={styles.container}>
                <Link href='/'>
                    <a className={styles.miniLogo}><Image src={logoPic}/></a>
                </Link>
                <div className={`${styles.links_container} ${styles.navOption}`}>
                    <Link href='/#top'>
                        <a className={router.pathname === '/' ? `${styles.link_active}` : ""}>Home</a>
                    </Link>
                    <Link href='/portfolio#top'>
                        <a className={router.pathname.startsWith('/portfolio') ? `${styles.link_active}` : ""}>Portfolio</a>
                    </Link>
                    <Link href='/contact#top'>
                        <a className={router.pathname.startsWith('/contact') ? `${styles.link_active}` : ""}>Contact</a>
                    </Link>
                    <Link href='/gradshow#top'>
                        <a className={router.pathname.startsWith('/gradshow') ? `${styles.link_active}` : ""}>Grad Show</a>
                    </Link>
                </div>
            </nav>
        )
}
