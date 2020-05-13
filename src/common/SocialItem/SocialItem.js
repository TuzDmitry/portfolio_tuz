import React from "react";

const SocialItem = (props) => {

    let styleA = {
        paddingLeft: 10,
        paddingRight: 10,
    }


    return (
        <a style={styleA} href={props.state.urladress}><img src={props.state.srcLogo}
                                                                     alt={props.state.altText}/></a>
    )
}
export default SocialItem