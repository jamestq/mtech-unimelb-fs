import { useEffect, useState } from 'react'
import '../styles/globals.css'

const pages = {
  "Home": "/",
  "Our Team": "/about",
  "Services": "/services",
  "Events": "/events",
  "Join Us": "/recruit"
}

const screenSize = {
  xs: 768,
  sm: 992,
  md: 1200,
}

export default function App({ Component, pageProps }) {

  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    function handleWindowChange(){
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowChange);
    handleWindowChange();
    return () => window.removeEventListener('resize', handleWindowChange);
  }, [])

  return <Component {...pageProps} 
        screenSize={screenSize}
        pages={pages}
        windowWidth={windowWidth}
        />
}
