import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project/Project";
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Fade from "react-reveal//Fade";

const Projects=(props) =>{

    const projects=props.state.projectItems.map(project=><Project key={project.id}
                                                                  nameOfProject={project.projectName}
                                                                  urlImg={project.srcImgProject}
                                                                  state={props.state}
                                                                  descriptOfProject={project.description} />)

  return (
    <div id='projects' className={styles.projects}>
        <Fade bottom>
            <div className={styles.container}>
                <TitleBlock titleName={props.state.titleName}/>

                <div className={styles.projectsContainer}>
                    {projects}
                </div>
            </div>
        </Fade>
    </div>
  );
}

export default Projects;
