import React from 'react';
import styles from './Contacts.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import Btn from "../common/Button/Btn";
import Fade from "react-reveal//Fade";
import {Field, reduxForm} from "redux-form";
import {email, required} from "../utils/validators";
import {Input, TextArea} from "../common/FormItems/formElements";
import {connect} from "react-redux";
import {SendForm} from "../business/thunk";

const Contacts = (props) => {

    let sendForm = (formData) => {
        console.log(formData)

        props.SendForm(formData)
    }


    return (
        <div id='contacts' className={styles.contacts}>
            <div className={styles.container}>
                <Fade bottom><TitleBlock titleName={props.state.titleName}/></Fade>
                <ReduxFeedbackForm isDisabled={props.isPending} btn={props.state.button} onSubmit={sendForm}/>
            </div>
        </div>

    );
}

class FeedbackForm extends React.Component {
    render() {
        return (
            <form className={styles.form} onSubmit={this.props.handleSubmit}>
                <Fade bottom>
                    <Field placeholder="Name"
                           component={Input}
                           name={'name'}
                           validate={[required]}
                    />
                </Fade>
                <Fade bottom>
                    <Field placeholder="Email"
                           component={Input}
                           name={'email'}
                           validate={[required, email]}
                    />
                </Fade>
                <Fade bottom>
                    <Field placeholder="Your message"
                           component={TextArea}
                           name={'message'}
                           cols="30"
                           rows="5"
                           validate={[required]}
                    />
                </Fade>

                <Btn btn={this.props.btn} isDisabled={this.props.isDisabled}/>
            </form>
        )
    }
}

const ReduxFeedbackForm = reduxForm({form: "feedback"})(FeedbackForm)

const mstp = (state) => {
    return {
        isPending: state.formBlock.isPending
    }
}

export default connect(mstp, {SendForm})(Contacts);
