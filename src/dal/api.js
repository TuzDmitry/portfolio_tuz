import axios from "axios";

export const tryCatch = async (formData) => {
    try {
        await API.postFeedBackForm(formData)
        await alert('The message was sent successful')
        // return 'everything is ok'
    } catch (error) {
        // alert(error)
        return error
    }
}


export const API = {
    postFeedBackForm(formData) {
        let {name, email, message} = formData;
        return axios.post('http://localhost:3010/sendformdata',
            {
                name,
                email,
                message
            });

    }
}