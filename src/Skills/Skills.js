import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3, faReact} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-solid-svg-icons'
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import TitleBlock from "../common/TitleBlock/TitleBlock";

const Skills = (props) => {


    let skills=props.state.skillItems.map(skill=><Skill key={skill.id}
                                                        imgOfSkill={skill.srcLogo}
                                                        nameOfSkill={skill.skillName}
                                                        descriptOfSkill={skill.description}/>)

    return (
        <div id='skills' className={styles.skills}>
            <div className={styles.container}>
                <TitleBlock titleName={props.state.titleName}/>
                <div className={styles.skillsContainer}>

                    {skills}

                    {/*<Skill imgOfSkill={props.state.skillItems[0].srcLogo}*/}
                    {/*       nameOfSkill={props.state.skillItems[0].skillName}*/}
                    {/*       descriptOfSkill={props.state.skillItems[0].description}/>*/}
                </div>
            </div>
        </div>
    );
}

export default Skills;
