import Navbar from "./navbar";
import styles from '../styles/Layout.module.css';

export default function Layout({pages, screenSize, windowWidth, children}){
    return <div className={styles.container}>
        <Navbar {...{pages, screenSize, windowWidth}}/>
        {children}
    </div>
}