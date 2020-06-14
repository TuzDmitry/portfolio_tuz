import React from 'react';
import styles from './Contacts.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";
import Fade from "react-reveal//Fade";
import {Animated} from "react-animated-css";

function Contacts(props) {
    return (

        <div id='contacts' className={styles.contacts}>
            {/*<Fade bottom>*/}
                <div className={styles.container}>
                    <Fade bottom><TitleBlock titleName={props.state.titleName}/></Fade>
                    <form className={styles.form} action="">
                        <Fade bottom><input className="formcontrol" type="text" placeholder="Name"/></Fade>
                        <Fade bottom><input className="formcontrol" type="text" placeholder="Name"/></Fade>
                            <Fade bottom><textarea className="form-control" name="" id="" cols="30" rows="5"
                                  placeholder="Your message"></textarea></Fade>

                        <Btn btn={props.state.button}/>
                    </form>
                </div>
            {/*</Fade>*/}
        </div>

    );
}

export default Contacts;
