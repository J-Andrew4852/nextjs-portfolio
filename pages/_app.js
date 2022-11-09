import '../styles/globals.css'

import { Layout } from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="..public/images/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
