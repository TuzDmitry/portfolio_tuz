import {reset} from "redux-form";
import {postForm} from "../dal/api";
import {toggleIsPending} from "./settingReducer";


export const SendForm = (formData) => {
    return (dispatch) => {
        dispatch(toggleIsPending(true))
        postForm(formData)
            .then((res) => {
                    dispatch(toggleIsPending(false))

                    if (res.status===200) {
                        dispatch(reset('feedback'))
                        alert(res.data)
                    } else {
                        alert(res)
                    }
                }
            )
    }
}