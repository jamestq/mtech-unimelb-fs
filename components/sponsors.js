import styles from '../styles/Sponsors.module.css'
import Image from 'next/image';

import eyLogo from '../assets/ey.png';
import qrLogo from '../assets/quickrelease.png';

const sponsors = [
    {
        title: "EY",
        image: eyLogo,
    },
    {
        title: "Quick Release",
        image: qrLogo,
    }
]

export default function Sponsors(){
    return <div className={styles.container}>
        <h1>Our Sponsors</h1>
        <div className={styles.sponsorContainer}>
            {
                sponsors.map(sponsor => {
                    return <div className={styles.logoContainer} key={sponsor.title}>
                            <Image 
                            src={sponsor.image}
                            alt={sponsor.title}
                            />
                    </div>
                })
            }
        </div>
    </div>
}