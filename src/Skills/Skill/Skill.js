import React from 'react';
import styles from './Skill.module.css';

const Skill=(props)=> {
  return (
    <div className={styles.skill}>
        <img src={props.imgOfSkill} alt="skill image"/>
        <h3 className={styles.skillName}>{props.nameOfSkill}</h3>
        <div className={styles.skillDescription}>{props.descriptOfSkill}</div>
    </div>
  );
}

export default Skill;
