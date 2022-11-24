import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/GradShow.module.css'

export default function GradShow() {

  return (
    <div className={styles.gradshowPage}>
        <Head>
            <title>Grad Show | James Andrew Digital</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <div className={styles.container}>
            <div className={styles.gradshowTextBox}>

            </div>
        </div>
    </div>
  )
}