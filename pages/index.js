import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Presentation from '../components/presentation'
import Sponsors from '../components/sponsors'
import connectIcon from '../assets/icons/connect.svg';
import project from '../assets/icons/project.svg'
import Affilation from '../components/affiliate'

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
      <Banner content={bannerContent}/>
      <Presentation content={missionStatement}/>
      <Affilation/>
      <Sponsors/>
      <Link href={pages["Our Team"]} className={styles.link}>
          Learn More
      </Link>
    </Layout>
  )
}
