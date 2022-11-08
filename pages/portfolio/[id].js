import Head from 'next/head'
import Link from 'next/link'
import { PageTitleHeader } from '../../components/pageTitleHeader/PageTitleHeader'
import styles from '../../styles/Projects.module.css'
import { portfolio } from '../api/projects.js'


export default function ProjectmDetail({ project }) {

    return (
        <div className={`${styles.projectPageContainer} ${styles.contianer}`}>
            <Head>
                <title>Project Details | NEXT JS DEMO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PageTitleHeader title={project.title} navigation={true}/>

            <div className={styles.projectBody}>
                <p>{project.body}</p>
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
