import styles from '../styles/Home.module.css'

export default function FormTemplate(){
    return <form action="/api/form" method="post" className={styles.form}>
        <div className={styles.formSection}>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" required/>
        </div>
        <div className={styles.formSection}>
        <label htmlFor="description">Description: </label>
        <textarea id="description" name="description" cols="50" rows="20" required></textarea>
        </div>
        <div className={styles.formSection}>
        <label htmlFor="skills">Skills</label>
        <textarea id="skills" name="skills" cols="50" row="20" required></textarea>
        </div>
        <div className={styles.formSection}>
        <label htmlFor="link">Application Link</label>
        <input type="text" id="link" name="link" required/>
        </div>
        <button type="submit">Submit</button>
    </form>
}