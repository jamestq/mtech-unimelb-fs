import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import Service from "../components/service";
import Form from "../components/form";

import networkPhoto from "../assets/networking-event.png";

const services = [
  {
      title: "Consulting Service",
      description: [
          "We offer pro bono technology consulting to our partners and sponsors",
          "Consultants are sourced from our pool of talented student members",
      ],
      details: [
          "Strategy and Management Development",
          "Solution Design and Discovery",
          "Technical Implementation"
      ],
      withImage: false
  },
  {
      title: "Networking Events and Seminars",
      description: [
          "We run seminars for our industry partners and sponsors, who will be able to showcase their work, culture and hiring practices",
          "Networking events are held once every semester. Industry partners and club members have to opportunity to share ideas and network",
      ],
      details: [
        <Image src={networkPhoto} key={networkPhoto} alt="photo of a networking event"/>,
      ],
      withImage: true
  }
]

export default function Services({pages, screenSize, windowWidth}){
    return <Layout {...{pages, screenSize, windowWidth}}>
    <Head>
      <title>MTech Consulting</title>
      <meta name="description" content="backend submission system" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mtech-logo.svg" />
    </Head>
    {services.map(service => <Service key={service.title} {...{service}}/>)}
    <Form/>
    </Layout>
}