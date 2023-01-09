import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Footer.module.css';
import instagram from '../assets/icons/instagram.svg';
import facebook from '../assets/icons/facebook.svg';
import linkedin from '../assets/icons/linkedin.svg';
import email from '../assets/icons/email.svg';

const socialMedia = [
    {
        type: "social-media",
        icon: instagram,
        link: "https://www.instagram.com/mtech_unimelb/",
    },
    {
        type: "social-media",
        icon: linkedin,
        link: "https://www.linkedin.com/company/mtech-melbourne-technology-consulting-club/mycompany/",
    },
    {
        type: "social-media",
        icon: facebook,
        link: "https://www.facebook.com/profile.php?id=100083439456084",
    },
    {
        type: "email",
        icon: email,
        link: "mailto:melbournetechcc@gmail.com"
    }
]


export default function Footer(){
    return <div className={styles.footer}>
        {socialMedia.map(social => <Link href={social.link}>
            <Image
            src={social.icon}
            width={30}
            height={30}
            />
        </Link>)}
    </div>
}