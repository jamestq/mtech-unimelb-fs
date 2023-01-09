import Head from 'next/head'
import Layout from '../components/layout'
import MemberDisplay from '../components/memberDisplay'
import loadMembers from '../utility/loadMembers'

export async function getServerSideProps(){
    const memberList = await loadMembers();
    return {
        props: {memberList}
    }
}

export default function About({pages, screenSize, windowWidth, memberList}){

    return <Layout {...{pages, screenSize, windowWidth}}>
    <Head>
      <title>MTech Consulting</title>
      <meta name="description" content="backend submission system" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mtech-logo.svg" />
    </Head>
    <MemberDisplay {...{memberList}}/>
  </Layout>
}