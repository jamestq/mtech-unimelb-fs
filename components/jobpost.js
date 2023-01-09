import Link from 'next/link'
import styles from '../styles/JobPost.module.css'

export default function JobPost({position}){
    return <div className={styles.post}>
        <h2>{position.title}</h2>
        <ul>
            {position.descriptions.map(description => <li key={description}>{description}</li>)}
        </ul>
        <h2>Skills</h2>
        <ul>
            {position.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <Link href={position.link}>Apply Now</Link>
    </div>
}