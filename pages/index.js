import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import FormTemplate from '../components/formTemplate';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>MTech Submission Backend</title>
        <meta name="description" content="backend submission system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mtech-logo.svg" />
      </Head>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
    </>
  )
}
