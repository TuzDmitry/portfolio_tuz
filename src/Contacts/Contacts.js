import React from 'react';
import styles from './Contacts.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";

function Contacts(props) {
    return (
        <div id='contacts' className={styles.contacts}>
            <div className={styles.container}>
                <TitleBlock titleName={props.state.titleName}/>

                <form className={styles.form} action="">
                    <input className="formcontrol" type="text" value="Name"/>
                    <input className="formcontrol" type="text" value="E-mail"/>
                    <textarea className="form-control" name="" id="" cols="30" rows="5"  value="Your message"></textarea>

                    <Btn btn={props.state.button}/>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
