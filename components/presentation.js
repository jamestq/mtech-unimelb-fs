import styles from "../styles/Presentation.module.css"
import Image from "next/image"

export default function Presentation({content}){
    return <div className={styles.presentation}>
        <h1>{content.header}</h1>
        <div className={styles.slide}>
                {content.details.map(statement => 
                    <div key={statement.title} className={styles.slideItem}>
                        <Image
                        src={statement.icon}
                        alt={statement.title}
                        />
                        <h2>{statement.title}</h2>
                        <p>{statement.description}</p>
                    </div>
                )}
        </div>
    </div>
}