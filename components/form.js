import styles from "../styles/Form.module.css";

export default function Form(){
    return <div className={styles.form}>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSemt6WaEU6k3cEQNSqNSXb4GIofXirGBUedDi8chhoFu-SFCw/viewform?embedded=true"
        height="800"
        scrolling="no"
        >
                Loading…
        </iframe>
    </div>
}