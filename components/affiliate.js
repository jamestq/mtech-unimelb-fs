import styles from '../styles/Affiliate.module.css'
import Image from 'next/image';

import umsuLogo from '../assets/umsu.png';

const sponsors = [
    {
        title: "UMSU",
        image: umsuLogo
    }
]

export default function Affilation(){
    return <div className={styles.container}>
        <h1>University Affiliations</h1>
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