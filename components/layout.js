import Navbar from "./navbar";
import Footer from "./footer";
import styles from '../styles/Layout.module.css';

export default function Layout({pages, screenSize, windowWidth, children}){
    return <div className={styles.container}>
        <Navbar {...{pages, screenSize, windowWidth}}/>
        <main className={styles.main}>
            {children}
        </main>
        <Footer/>
    </div>
}