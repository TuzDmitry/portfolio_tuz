import React from 'react';
import styles from './Skills.module.css';
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.container}>
                <div className='titleBlock'>Мои скилы</div>
                <div className={styles.skillsContainer}>
                    <Skill imgOfSkill='https://www.pngkey.com/png/detail/222-2224712_react-react-logo-png.png'
                           nameOfSkill='React' descriptOfSkill='Описание React навыка '/>
                    <Skill  imgOfSkill='https://static.tildacdn.com/tild6632-3133-4338-a162-356131643864/59f0515c722dc8122853.png'
                            nameOfSkill='Angular' descriptOfSkill='Описание Angular навыка ' />
                    <Skill  imgOfSkill='https://upread.ru/img/art488-1.png'
                            nameOfSkill='Vue' descriptOfSkill='Описание Vue навыка ' />
                </div>
            </div>
        </div>
    );
}

export default Skills;
