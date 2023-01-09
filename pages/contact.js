import Head from 'next/head'
import Layout from '../components/layout'

export default function Contact({pages, screenSize, windowWidth}){
    return <Layout {...{pages, screenSize, windowWidth}}>
    <Head>
      <title>MTech Consulting</title>
      <meta name="description" content="backend submission system" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mtech-logo.svg" />
    </Head>
        <h1>Hello Contact</h1>
    </Layout>
}