import { useEffect, useState } from "react"
import styles from "../styles/FloatingCarousel.module.css"

export default function FloatingCarousel({projectList, closeProject}){

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [currentProject, setCurrentProject] = useState(projectList[0]);
    const [backgroundImage, setBackgroundImage] = useState(projectList[0].image);

    function nextProject(step){
        const newIndex = currentProjectIndex + step;
        if(newIndex >= projectList.length){
            setCurrentProjectIndex(0);
        }else if(newIndex < 0 ){
            setCurrentProjectIndex(projectList  .length-1);
        }else{
            setCurrentProjectIndex(newIndex);
        }
    }

    useEffect(() => {
        setCurrentProject(projectList[currentProjectIndex]);
        setBackgroundImage(projectList[currentProjectIndex].image);
    }, [currentProjectIndex])

    return <div className={styles.container}>
        <div className={styles.slider} style={{backgroundImage: `url(${backgroundImage})`}}>
            <button onClick={closeProject} id={styles.close}>X</button>
            <button onClick={() => nextProject(1)} id={styles.next}>{">"}</button>
            <button onClick={() => nextProject(-1)} id={styles.previous}>{"<"}</button>
            <div className={styles.slideContainer}>
                <div className={styles.slide}>
                    <h2>{currentProject.title}</h2>
                    {(currentProject.description.length !== 0) && currentProject.description.map(description => <p>{description}</p>)}
                </div>
            </div>
        </div>
    </div>
}