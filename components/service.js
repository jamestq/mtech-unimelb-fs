import styles from "../styles/Service.module.css";

export default function Service({service, showProjects}){

    function displayContainer(withImage){
        if(withImage){
            return <>
                {displayDetails(withImage)}
                {displayDescription()}
            </>
        }else{
            return <>
                {displayDescription()}
                {displayDetails(withImage)}
            </>
        }
    }

    function displayDescription(){
        return <div className={styles.descriptionContainer}>
            <h2>{service.title}</h2>
            <div className={styles.description}>
                <div className={styles.desParagraph}>
                    {service.description.map(description => <p key={description}>{description}</p>)}
                </div>
                {/* {displayButton()} */}
            </div>
        </div>
    }

    function displayDetails(withImage){
        const style = withImage? styles.detailImage : styles.detailItem;
        return <div className={styles.detailContainer}>
            {service.details.map(detail => <div key={detail} className={style}>{detail}</div>)}
        </div>
    }

    function displayButton(){
        return <button onClick={() => showProjects(service.type)}>Show {service.title}</button>
    }

    return <div className={styles.container}>
        {displayContainer(service.withImage)}
    </div>
}