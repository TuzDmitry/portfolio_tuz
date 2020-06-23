import React from 'react';
import styles from './Contacts.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";
import Fade from "react-reveal//Fade";
import {Field, reduxForm} from "redux-form";
import {tryCatch} from "../dal/api";

function Contacts(props) {
    let sendForm = (formData) => {
        console.log(formData)

        tryCatch(formData)
        // axios.post('http://localhost:3010/sendformdata',
        //     {
        //         name,
        //         email,
        //         message
        //     })
        //     .then(() => alert('everything is ok'))
    }


    return (
        <div id='contacts' className={styles.contacts}>
            <div className={styles.container}>
                <Fade bottom><TitleBlock titleName={props.state.titleName}/></Fade>
                <ReduxFeedbackForm btn={props.state.button} onSubmit={sendForm}/>
            </div>
        </div>

    );
}

const FeedbackForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Fade bottom>
                <Field placeholder="Name"
                       component={'input'}
                       name={'name'}
                />
            </Fade>
            <Fade bottom>
                <Field placeholder="Email"
                       component={'input'}
                       name={'email'}
                />
            </Fade>
            <Fade bottom>
                <Field placeholder="Your message"
                       component={'textarea'}
                       name={'message'}
                       cols="30"
                       rows="5"
                />
            </Fade>

            <Btn btn={props.btn}/>
        </form>
    )
}

const ReduxFeedbackForm = reduxForm({form: "feedback"})(FeedbackForm)


export default Contacts;
