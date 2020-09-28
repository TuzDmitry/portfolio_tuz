import {reset} from "redux-form";
import {API} from "../dal/api";
import {toggleIsPending} from "./settingReducer";


export const SendForm = (formData) => {
    return async (dispatch) => {
        dispatch(toggleIsPending(true))
        try {
            let res = await API.postFeedBackForm(formData)
            if (res.status===200) {
                dispatch(reset('feedback'))
                alert(res.data)
            }
        } catch (error) {
            alert(error)
        }
        dispatch(toggleIsPending(false))
    }
}