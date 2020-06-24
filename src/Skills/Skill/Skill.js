import React from 'react';
import styles from './Skill.module.css';
import Pulse from 'react-reveal/Pulse';

const Skill=(props)=> {
  return (

      <Pulse>
          <div className={styles.skill}>
              <img src={props.imgOfSkill} alt="skill img"/>
              <h3 className={styles.skillName}>{props.nameOfSkill}</h3>
              <div className={styles.skillDescription}>{props.descriptOfSkill}</div>
          </div>
      </Pulse>
  );
}

export default Skill;
