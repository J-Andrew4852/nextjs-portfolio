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
        <link rel="shortcut icon" href="/favicon.ico" />
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
