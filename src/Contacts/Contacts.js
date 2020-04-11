import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className='titleBlock'>
                    <h2>Contact Me</h2>
                    <div className="module-line"></div>
                </div>
                <form className={styles.form} action="">
                    <input className="formcontrol" type="text" value="Name"/>
                    <input className="formcontrol" type="text" value="E-mail"/>
                    <textarea className="form-control" name="" id="" cols="30" rows="5"  value="Your message"></textarea>
                    <button className="btn">Sand Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
