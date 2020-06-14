import React from 'react';
import styles from './Footer.module.css';
import TitleBlock from "../common/TitleBlock/TitleBlock";
import ava from "../assets/images/my_main_photo.jpg";
import SocialItem from "../common/SocialItem/SocialItem";
import Fade from "react-reveal//Fade";

const Footer = (props) => {
    const imgSecond = {
        backgroundImage: `url('${ava}')`,
        // transform: `translate(100px, 100px)`
    };

    let socials = props.state.socialContacts.map(el => <SocialItem state={el}/>)

    return (
        <div className={styles.footer}>
            <Fade bottom>
                <div className={styles.container}>
                    <TitleBlock titleName={props.state.titleName}/>
                    <div className={styles.social}>
                        {socials}
                    </div>
                    <div className={styles.copyright}>{props.state.copyrightText}</div>
                </div>
            </Fade>
        </div>
    );
}

export default Footer;
