import Head from 'next/head'
import Layout from '../components/layout'
import JobPost from '../components/jobpost';

import loadPositions from '../utility/loadPositions'

import styles from "../styles/Recruit.module.css"

export async function getServerSideProps(){
  const positions = await loadPositions();
  return {
    props: {positions}
  }
}

export default function Recruit({pages, screenSize, windowWidth, positions}){
    return <Layout {...{pages, screenSize, windowWidth}}>
      <Head>
        <title>MTech Consulting</title>
        <meta name="description" content="backend submission system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mtech-logo.svg" />
      </Head>
      <div className={styles.contact}>
        <h2>We are recruiting!</h2>
        {positions.map(position => <JobPost key={position.id} position={position}/>)}
      </div>
    </Layout>
}