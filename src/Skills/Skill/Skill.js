import React from 'react';
import styles from './Skill.module.css';

const Skill=(props)=> {
  return (
    <div className={styles.skill}>
        <img src={props.imgOfSkill} alt="skill image"/>
        <div className={styles.skillName}>{props.nameOfSkill}</div>
        <div className={styles.skillDescription}>{props.descriptOfSkill}</div>
    </div>
  );
}

export default Skill;
