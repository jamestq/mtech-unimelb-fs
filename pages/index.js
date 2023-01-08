import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home(props) {

  return (
    <Layout pages={props.pages} screenSize={props.screenSize} windowWidth={props.windowWidth}>
      <Head>
        <title>MTech Consulting</title>
        <meta name="description" content="backend submission system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mtech-logo.svg" />
      </Head>
      <main className={styles.main}>
        <h1>{props.windowWidth}</h1>
      </main>
    </Layout>
  )
}
