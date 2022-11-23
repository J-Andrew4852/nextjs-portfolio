import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { PageTitleHeader } from '../components/pageTitleHeader/PageTitleHeader'
import styles from '../styles/Home.module.css'
import cV from './CV.svg'
import linkedIn from './LinkedIn.svg'
import faceBook from './Facebook.svg'
import gradImage from '../public/images/portrait-photo.JPG'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>James Andrew Digital</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
    <div className={styles.homePageTop}>
      <div className={styles.homeExpertiseHeader}>Expertise</div>
      <div className={styles.expertiseBox}>
        <Link href={`/portfolio#section1`}>
          <div className={`${styles.expertiseLink} ${styles.orange}`}>Web Development</div>
        </Link>
        <Link href={`/portfolio#section3`}>
          <div className={`${styles.expertiseLink} ${styles.purple}`}>UX / UI  Design</div>
        </Link>
        <Link href={`/portfolio#section4`}>
          <div className={`${styles.expertiseLink} ${styles.blue}`}>Design Research</div>
        </Link>
      </div>
      <div className={styles.logoBox}>
        <div className={styles.greenLineV}></div>
        <div className={styles.icon}><Image src={cV}/></div>
        <div className={styles.icon}><Image src={linkedIn}/></div>
        <div className={styles.icon}><Image src={faceBook}/></div>
        <div className={styles.greenLineV}></div>
      </div>
      <Link href={`https://bibiliofile.netlify.app/`}>
        <a target="_blank">
          <div className={styles.webHover}>
            <p className={styles.newWebsite}>Check out my newest website project</p>
            <div className={styles.webLine}></div>
          </div>
        </a>
      </Link>
    </div>
    <div className={styles.showreelSection}>
      <div className={styles.homeShowreelHeader}>My Showreel</div>
      <video className={styles.showreelVideo} controls>
        <source src="/videos/showreel.mp4" type="video/mp4"></source>
      </video>
    </div>
    <div className={styles.homePageMid}>
      <div className={styles.aboutMe}>
        <div className={styles.myImage}>
          <Image src={gradImage} alt="My Graduate Image" layout={'responsive'} width={783} height={1175} priority/>
        </div>
        <div className={styles.aboutTextBox}>
          <h2>About Me</h2>
          <p>Throughout my time at Curtin University I have become confident in my skills within design research and UI / UX design as I have used a design process throughout many assignements, which have refined these skills. I have learnt HTML, CSS and JS within my university course, although I plan to improve on node.js, and learn React.js and SQL once I have graduated.</p>
        </div>
      </div>
    </div>

    {/* <div className={styles.introArea}>
      <h4>Hey! Welcome {name}</h4>
      <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='enter your name' />
    </div> */}

    <div className={styles.homeBody}>
      <div className={styles.options}>
      {/* <Link href='/portfolio'>
        <div className={styles.option}>
          view portfolio
        </div>
      </Link>
      <Link href='/contact'>
        <div className={styles.option}>
          view contact
        </div>
      </Link> */}
      </div>
    </div>
    </div>
  )
}
