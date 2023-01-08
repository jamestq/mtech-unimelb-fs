import Image from "next/image"
import styles from '../styles/Banner.module.css';
import mTechBanner from "../assets/mtech-banner.png";

export default function Banner({content}){

    return <div className={styles.bannerGrid}>
        <div className={styles.gridItem}>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
        </div>
        <div className={styles.gridItem}>
            <Image
            src={mTechBanner}
            alt={"group photo of mtech"}
            />
        </div>
    </div>
}