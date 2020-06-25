import {reset} from "redux-form";
import {tryCatch} from "../dal/api";


export const ActionThunk=(formData)=>{
    return (dispatch)=>{
        tryCatch(formData)
            .then(() =>{
                dispatch(reset('feedback'))}
            )

    }
}