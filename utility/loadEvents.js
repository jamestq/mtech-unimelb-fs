import mtechOpenNight from "../assets/event-photo/mtech-launch-event-04AUG2022.png";
import mtechEY from "../assets/event-photo/mtechey-seminar-29AUG2022.png";
import mtechIBMLEX from "../assets/event-photo/mtechibmlex-seminar-05SEP2022.png";
import mtechNetwork from "../assets/event-photo/mtech-networking-18NOV2022.png";
import mtechQR from "../assets/event-photo/mtechqr-seminar-22NOV2022.png";
import Image from "next/image";

import styles from "../styles/EventItem.module.css";

const months = {
    1 : "January", 2 : "February", 3 : "March", 4 : "April", 
    5 : "May", 6 : "June", 7 : "July", 8 : "August",
    9 : "September", 10 : "October", 11 : "November", 12 : "December"
  }

const eventList = [
    {
        title: "MTech Opening Night",
        description: "Come along to meet our fellow members and committees. Let's have a chill night together and enjoy the finger food! Please note that this event has a limited capacity therefore tickets are required",
        image: mtechOpenNight,
        link: "https://www.instagram.com/p/CggZm_0P9BH/",
        date: "2022-08-04",
    },
    {
        title: "MTech x EY Seminar",
        description: "EY is in the house! We invite you to join us for an informative yet entertaining evening at the 2022 MTech x EY Seminar, where you will learn from experienced EY tech consultants and enjoy some free pizzas!",
        image: mtechEY,
        link: "https://www.instagram.com/p/ChWLSbPvFm6/",
        date: "2022-08-29",
    },
    {
        title: "MTech x IBM x Lexicon Seminar",
        description: "We are announcing the 2022 MTech x IBM x Lexicon Seminar! Lock your calendars for this informative session presented by our friends from IBM and Lexicon.",
        image: mtechIBMLEX,
        link: "https://www.instagram.com/p/ChokI9fPbka/",
        date: "2022-09-05",
    },
    {
        title: "Networking Night",
        description: "This is a fantastic opportunlity to expand your network with new connections. Food and drinks will be served throughout the night.",
        image: mtechNetwork,
        link: "https://www.instagram.com/p/CkKZ2vuSnok/",
        date: "2022-11-18",
    },
    {
        title: "QR Seminar",
        description: "Learn from QR_ representatives and find out what you can do at QR_",
        image: mtechQR,
        link: "https://www.instagram.com/p/ClBBzzQuITi/",
        date: "2022-11-22"
    }
]

function loadEvents(){
    return new Promise((resolve, reject) => {
        setTimeout(resolve(eventList), Math.random()*1000);
    })
}

function generateMonthYearSet(eventList){
    //Generates a set of years sorted with the most recent year first
    const yearSet = new Set (eventList
        .map(event => event.date.getFullYear())
        .sort((y1, y2) => -(y1-y2))
        );
    //Generates an object with each value as [year] : {a set of months}
    const monthYearSet = Object.assign(...Array.from(yearSet, year => ({[year] : new Set()})));
    eventList.forEach(event => {
    monthYearSet[event.date.getFullYear()].add(event.date.getMonth()+1);
    })
    //Converts the set of months into an array of months sorted with the most recent month first
    // for(const year in monthYearSet) {
    //     monthYearSet[year] = [...monthYearSet[year]]
    // };
    return monthYearSet;
}

function displayLoad(eventList, monthYearSet){
    const displayArray = [];
    for(const year in monthYearSet){
        displayArray.push(generateYearDisplay(year, monthYearSet[year], eventList));
    }
    return displayArray;
}

function generateYearDisplay(year, monthSet, eventList){
    const monthArray = [];
    monthSet.forEach(month => monthArray.push(generateMonthDisplay(month, year, eventList)));
    return <div key={year} className={styles.yearGroup}>
        <h2 className={styles.timeTitle}>{year}</h2>
        <hr/>
        {monthArray}
    </div>
}

function generateMonthDisplay(month, year, eventList){
    return <div key={year.toString() + "-" + month.toString()} className={styles.monthGroup}>
        <h2 className={styles.timeTitle}>{months[month]}</h2>
        {eventList
        .filter(event => filterEventDates(event, month, year))
        .map(event => generateDateDisplay(event))
        }
    </div>
}

function filterEventDates(event, month, year){
    const isSameMonth = (event.date.getMonth()+1) === month;
    const isSameYear = (event.date.getFullYear()).toString() === year;
    return isSameMonth && isSameYear;
}

function generateDateDisplay(event){
    return <div key={event.title} className={styles.eventItem}>
        <Image
        src={event.image}
        alt={event.title}
        />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <a href={event.link}>Register Here</a>
    </div>
}

export {
    loadEvents,
    generateMonthYearSet,
    displayLoad,
};