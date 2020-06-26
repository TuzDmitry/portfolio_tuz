import axios from "axios";

export const postForm = async (formData) => {
    try {
        let res = await API.postFeedBackForm(formData)
        await console.log(res)
        return res
    } catch (error) {
        return error
    }
}

export const API = {
    postFeedBackForm(formData) {
        let {name, email, message} = formData;
        // return axios.post('http://localhost:3010/sendformdata',
        return axios.post('https://server-nodejs-smtp.herokuapp.com/sendformdata',
            {
                name,
                email,
                message
            });
    }
}
