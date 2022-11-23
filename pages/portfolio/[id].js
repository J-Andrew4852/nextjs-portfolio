import Head from 'next/head'
import Link from 'next/link'
import { PageTitleHeader } from '../../components/pageTitleHeader/PageTitleHeader'
import styles from '../../styles/Projects.module.css'
import { portfolio } from '../api/projects.js'


export default function ProjectmDetail({ project }) {

    return (
        <div className={`${styles.projectPageContainer} ${styles.contianer}`}>
            <Head>
                <title>Project Details | James Andrew Digital</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>

            <PageTitleHeader title={project.title} navigation={true}/>

            <div className={styles.projectBody}>
                <br/>
                <p>{project.body}</p>
                <br/><br/><br/>
                <p className={styles.warning}>Due to time constraints, I have been unable to complete this project page. I am hard at work on completing the website and this page will be completed soon.</p>
                <br/>
            </div>
        </div>
    )
}

export async function getStaticPaths() {

    const paths = portfolio.map((project) => ({
        params: { id: project.id.toString() },
    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    // const project = await res.json()
    const [project] = portfolio.filter((p) => p.id.toString() === params.id);
    // const req = await fetch(`http://localhost:3000/portfolio/${params.id}.json`);
    // const data = await req.json();
    // const project = params.id

    return { props: { project } }
}
