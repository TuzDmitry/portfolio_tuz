import axios from "axios";

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
