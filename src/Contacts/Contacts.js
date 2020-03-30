import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.container}>
                <div className='titleBlock'>Мои контакты</div>
                <form className={styles.form} action="">
                    <input type="text" value="Name"/>
                    <input type="text" value="E-mail"/>
                    <textarea name="" id="" cols="30" rows="5"  value="Your message"></textarea>
                    <button>Нанять меня</button>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
