import React from 'react';
import styles from './Slogan.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";

const Slogan=(props)=> {
    let st={
        // textTransform: Capitalize,
    }

  return (
    <div className={styles.slogan}>
        <div className={styles.container}>

            <TitleBlock style={st} titleName={props.state.titleName}/>
            {/*<button className="btnBlock">Нанять меня</button>*/}
            <Btn btn={props.state.button}/>
        </div>
    </div>
  );
}

export default Slogan;
