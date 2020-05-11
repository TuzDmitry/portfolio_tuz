import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project/Project";
import TitleBlock from "../TitleBlock";
import state from "../state";

import ava from '../assets/images/my_main_photo.jpg'

// import projImgOne from....
// import projImgSecond from....


const Projects=(props) =>{

    const imgOne = {
        // backgroundImage:'url(${a})'
    };

    const projects=props.state.projectItems.map(project=><Project key={project.id}
                                                                  nameOfProject={project.projectName}
                                                                  urlImg={project.srcImgProject}
                                                                  state={props.state}
                                                                  descriptOfProject={project.description} />)

  return (
    <div id='projects' className={styles.projects}>
        <div className={styles.container}>
            <TitleBlock titleName={props.state.titleName}/>

            <div className={styles.projectsContainer}>
                {projects}

                {/*<Project nameOfProject={props.state.projectItems[3].projectName} */}
                {/*         urlImg={props.state.projectItems[3].srcImgProject}  */}
                {/*         descriptOfProject={props.state.projectItems[3].description} />*/}
            </div>
        </div>
    </div>
  );
}

export default Projects;
