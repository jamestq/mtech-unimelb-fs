import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Presentation from '../components/presentation'

import connectIcon from '../assets/icons/connect.svg';
import project from '../assets/icons/project.svg'

const bannerContent = {
  title: "Melbourne Technology Consulting Club",
  description: "The University of Melbourne",
}

const missionStatement = {
  header: "Our Mission",
  details: [
    {
      title: "Professional Network",
      description: "Gather like-minded individuals who are interested in the field of technology consulting",
      icon: connectIcon
    },
    {
        title: "Industry Projects",
        description: "Offer opportunities to experience real world projects with partners",
        icon: project
    },
  ]
}

export default function Home({pages, screenSize, windowWidth}) {

  return (
    <Layout {...{pages, screenSize, windowWidth}}>
      <Head>
        <title>MTech Consulting</title>
        <meta name="description" content="backend submission system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/mtech-logo.svg" />
      </Head>
      <main className={styles.main}>
        <Banner content={bannerContent}/>
        <Presentation content={missionStatement}/>
        <Link href={"/services"} className={styles.link}>
            Learn More
        </Link>
      </main>
    </Layout>
  )
}
