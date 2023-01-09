import Head from 'next/head';
import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import Layout from '../components/layout'
import {loadEvents, generateMonthYearSet, displayLoad} from '../utility/loadEvents'

export async function getServerSideProps(){
  const eventList = await loadEvents();
  return {
    props: {eventList}
  }
}

export default function Events({pages, screenSize, windowWidth, eventList}){

  const [events, setEvents] = useState([]);
  const [monthYearSet, setMonthYearSet] = useState({});
  const [displayJSX, setDisplayJSX] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const newList = eventList.map(event => ({...event, date: (new Date(event.date))}))
                              .sort((event1, event2) => -(event1.date.getTime() - event2.date.getTime()));
    setEvents(newList);
  }, [eventList])

  useEffect(() => {
    console.log(events);
    if(events.length !== 0){
      const monthYearSet = generateMonthYearSet(events);
      const newdisplayJSX = displayLoad(events, monthYearSet);
      setMonthYearSet(monthYearSet);
      setDisplayJSX(newdisplayJSX);
    }
  }, [events])

  function handleDateChange(trigger){
    
    if(trigger === "reset"){
      console.log("resetting...");
      setCurrentDate(new Date());
      setDisplayJSX(displayLoad(events, monthYearSet));
      return;
    }

    const [filteredEvents, filteredMonthYearSet] = getFromSelectDate(events, trigger);
    setDisplayJSX(displayLoad(filteredEvents, monthYearSet));
    if(filteredEvents.length !== 0) setCurrentDate(trigger);
  }

  function getFromSelectDate(events, filterDate){
    const date = new Date(filterDate);
    if(date === undefined) return [[], {}];
    const filteredEvents = events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
    let customMonthYearSet = {}
    if(filteredEvents.length !== 0) customMonthYearSet = generateMonthYearSet(filteredEvents);
    return [filteredEvents, customMonthYearSet];
  }

  return <Layout {...{pages, screenSize, windowWidth}}>
    <Head>
      <title>MTech Consulting</title>
      <meta name="description" content="backend submission system" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/mtech-logo.svg" />
    </Head>
    <div className="events-page">
        <h1>Events Calendar</h1>
        <div className="button-panel">
            <button className="interactive-button" 
              onClick={() => handleDateChange("reset")}
            >
              Reset Event List Filter
            </button>
        </div>
        <div className="calendar">
            <Calendar 
              onClickDay={(event) => handleDateChange(event)} 
              value={currentDate} 
              showNeighboringMonth={false}
            />
        </div>
        <div className="events-list">
            {displayJSX}
        </div>
    </div>
  </Layout>
}