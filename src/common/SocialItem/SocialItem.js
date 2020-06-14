import React from "react";
import style from './SocialItems.module.css'

const SocialItem = (props) => {

    return (
            <a href={props.state.urladress} className={style.socialElement}>
                <img src={props.state.srcLogo}
                     alt={props.state.altText}/>
            </a>
    )
}
export default SocialItem