import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { PageTitleHeader } from '../components/pageTitleHeader/PageTitleHeader'
import styles from '../styles/Contact.module.css'

export default function Contact() {

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
          <Head>
            <title>Contact | James Andrew Digital</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <div className={styles.contactTextBox}>
            I am open to working on all projects within Digital Design. I would prefer to work in a group and learn from the experience of others, although I am confident in leading a project to completion on my own. I especially look forward to Web Development projects as I am confident in my Front-End capabilities and am improving on my Back-End development skills.
          </div>
      </div>
    </div>
  )
}
