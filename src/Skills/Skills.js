import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Fade from "react-reveal//Fade";

const Skills = (props) => {


    let skills=props.state.skillItems.map(skill=><Skill key={skill.id}
                                                        imgOfSkill={skill.srcLogo}
                                                        nameOfSkill={skill.skillName}
                                                        descriptOfSkill={skill.description}/>)

    return (
        <div id='skills' className={styles.skills}>
            <Fade bottom>
                <div className={styles.container}>
                    <TitleBlock titleName={props.state.titleName}/>
                    <div className={styles.skillsContainer}>
                        {skills}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
