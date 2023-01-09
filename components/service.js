import styles from "../styles/Service.module.css";

export default function Service({service}){

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
            {service.description.map(description => <p key={description}>{description}</p>)}
        </div>
    }

    function displayDetails(withImage){
        if(withImage){
            return <div className={styles.detailContainer}>
                {service.details.map(detail => <div key={detail} className={styles.detailImage}>{detail}</div>)}
            </div>
        }else{
            return <div className={styles.detailContainer}>
                {service.details.map(detail => <div key={detail} className={styles.detailItem}>{detail}</div>)}
            </div>
        }
    }

    return <div className={styles.container}>
        {displayContainer(service.withImage)}
    </div>
}