import React from "react";
import style from './Btn.module.css'

const Btn = (props) => {

    return (
        <>
            {(props.btn.buttonClass === 'btnBlock') &&
            <button disabled={props.isDisabled} className={style.btnBlock}>{props.btn.buttonName}</button>}
            {(props.btn.buttonClass === 'btnProject') &&
            <a href={props.hrefBut}>
                <button className={style.btnProject}>{props.btn.buttonName}</button>
            </a>}
        </>
    )
}

export default Btn;