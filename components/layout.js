import Navbar from "./navbar";
import styles from '../styles/Layout.module.css';

export default function Layout(props){
    return <div className={styles.container}>
        <Navbar pages={props.pages} screenSize={props.screenSize} windowWidth={props.windowWidth}/>
        {props.children};
    </div>
}