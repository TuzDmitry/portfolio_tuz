import {reset} from "redux-form";
import {tryCatch} from "../dal/api";
import {toggleIsPending} from "./settingReducer";


export const ActionThunk = (formData) => {
    return (dispatch) => {
        dispatch(toggleIsPending(true))
        tryCatch(formData)
            .then((data) => {
                    dispatch(toggleIsPending(false))
                    // debugger
                    if (!data) {
                        dispatch(reset('feedback'))
                    } else {
                        alert(data)
                    }
                }
            )
    }
}