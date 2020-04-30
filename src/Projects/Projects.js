import React from 'react';
import styles from './Projects.module.css';
import Project from "./Project/Project";
// import projImgOne from....
// import projImgSecond from....


function Projects() {

    const imgOne = {
        backgroundImage: 'url({projImgOne})',
    };
    const imgSecond = {
        backgroundImage: 'url({projImgSecond})',
    };
  return (
    <div id='projects' className={styles.projects}>
        <div className={styles.container}>
            <div className='titleBlock'>
                <h2>My Works</h2>
                <div className="module-line"></div>
            </div>
            <div className={styles.projectsContainer}>
                <Project nameOfProject='Project1' style={imgOne}  descriptOfProject='Описание Project1' pictOfProject='https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'/>
                <Project nameOfProject='Project1' style={imgOne}  descriptOfProject='Описание Project1' pictOfProject='https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'/>
                <Project nameOfProject='Project1' style={imgOne}  descriptOfProject='Описание Project1' pictOfProject='https://avatars.mds.yandex.net/get-altay/247136/2a0000015b861c38531a35339a249d869579/XXL'/>
                <Project nameOfProject='Project2' style={imgSecond} descriptOfProject='Описание Project2' />
            </div>
        </div>
    </div>
  );
}

export default Projects;
