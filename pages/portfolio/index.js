import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GradCard } from '../../components/projectCard/ProjectCard'
import { PageTitleHeader } from '../../components/pageTitleHeader/PageTitleHeader'
import styles from '../../styles/Portfolio.module.css'
import { portfolio } from '../api/projects.js'
import image1 from '../../public/images/BiblioFile.jpg'


export default function Portfolio({ portfolio }) {

  useEffect(() => {
    console.log({portfolio})
  }, )

  return (
    <div className={styles.portfolioPage}>
      <Head>
        <title>Portfolio | James Andrew Digital</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
      </Head>

      <PageTitleHeader title="My Portfolio" navigation={false}/>

      <div className={styles.projectsList}>
          {portfolio.map((project) => (
              <GradCard key={project.id} data={project}/>
          ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {

  return {
    props: {
      portfolio,
    },
  }
}
