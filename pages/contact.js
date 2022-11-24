import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { PageTitleHeader } from '../components/pageTitleHeader/PageTitleHeader'
import styles from '../styles/Contact.module.css'
import { Footer } from '../components/nav/footer/Footer'

export default function Contact() {

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
          <Head>
            <title>Contact | James Andrew Digital</title>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
          </Head>
          <div className={styles.contactTextBox}>
            I am open to working on all projects within Digital Design. I would prefer to work in a group and learn from the experience of others, although I am confident in leading a project to completion on my own. I especially look forward to Web Development projects as I am confident in my Front-End capabilities and am improving on my Back-End development skills.
          </div>
      </div>
      <Footer/>
    </div>
  )
}
