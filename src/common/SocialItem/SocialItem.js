import React from "react";

const SocialItem=(props)=>{
    return(
        <a href={props.state.urladress}><img src={props.state.srcLogo} alt={props.state.altText}/></a>
    )
}
export default SocialItem