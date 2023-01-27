import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import Service from "../components/service";
import Form from "../components/form";
import FloatingCarousel from "../components/floatingCarousel";
import networkPhoto from "../assets/networking-event.png";
import techBG from '../assets/event-photo/tech-background.jpg'
import { useState } from "react";

import styles from "../styles/Services.module.css";

const services = [
  {
      title: "Consulting Service",
      type: "consulting",
      description: [
          "We offer pro bono technology consulting to our partners and sponsors",
          "Consultants are sourced from our pool of talented student members",
      ],
      details: [
          "Strategy and Management Development",
          "Solution Design and Discovery",
          "Technical Implementation"
      ],
      withImage: false,
  },
  {
      title: "Networking Events and Seminars",
      type: "networking",
      description: [
          "We run seminars for our industry partners and sponsors, who will be able to showcase their work, culture and hiring practices",
          "Networking events are held once every semester. Industry partners and club members have to opportunity to share ideas and network",
      ],
      details: [
        <Image src={networkPhoto} key={networkPhoto} alt="photo of a networking event"/>,
      ],
      withImage: true,
  }
]

const consultingProjects = [
    {
      title: "Exergenics Business Review",
      description: [
        "Exergenics develops software to help improve the energy efficiency of commercial air condition with the use of algorithms to monitor and analzye multiple mechanical plants.",
        "In order to increase market share and keep consistent development, we collaborate to identify opporutnities, risks, and bottlenecks, and gain a better understanding of the internal and external environment",
      ],
      image: techBG
    },
]

const networkingProjects = [
    {
      title: "Seminars",
      description: [
        "EY",
        "IBM x Lexicon",
        "QR_"
      ],
      image: networkPhoto,
    },
    {
      title: "Networking Event",
      description: [],
      image: networkPhoto,
    }
]

export default function Services({pages, screenSize, windowWidth}){

    const [showfloatElement, setShowFloatElement] = useState(false);
    const [projectList, setProjectList] = useState([]);

    function showProjects(projectListType){
      switch(projectListType){
        case "consulting" : setProjectList(consultingProjects); break;
        case "networking" : setProjectList(networkingProjects); break;
        default: setProjectList([]);
      }
      setShowFloatElement(!showfloatElement);
    }

    function closeProject(){
      setShowFloatElement(false);
    }

    return <Layout {...{pages, screenSize, windowWidth}}>
    <Head>
      <title>MTech Consulting</title>
      <meta name="description" content="backend submission system" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mtech-logo.svg" />
    </Head>
      <div className={styles.container}>
        {services.map(service => <Service key={service.title} {...{service, showProjects}}/>)}
        {/* {showfloatElement && <FloatingCarousel {...{projectList, closeProject}}/>} */}
      </div>
    <Form/>
    </Layout>
}