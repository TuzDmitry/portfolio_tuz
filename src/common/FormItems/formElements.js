import React from "react";
import style from './formItems.module.css'

// export const Input = ({input, meta, ...props}) => {
//     const error = meta.error && meta.touched;
//     let classStyle = error ? `${style.error}` : '';
//     return (
//         <div className={classStyle}>
//             <input {...input}{...props}/>
//             {error && <div className={style.errtext}>{meta.error}</div>}
//         </div>
//     )
// }

const ItemsCreator = ({input, meta, child, ...props}) => {
    const error = meta.error && meta.touched;
    let classStyle = error ? `${style.error}` : '';
    return (
        <div className={classStyle}>
            {props.children}
            {error && <div className={style.errtext}>{meta.error}</div>}
        </div>
    )
}
export const Input = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <ItemsCreator {...props}>
            <input {...input}{...restProps}/>
        </ItemsCreator>
    )
}

export const TextArea = (props) => {
    let {input, meta, ...restProps} = props
    return (
        <ItemsCreator {...props}>
            <textarea {...input}{...restProps}/>
        </ItemsCreator>
    )
}

