import axios from "axios";

export const tryCatch = async (formData) => {
    let {name, email, message} = formData;
    try{
        await axios.post('http://localhost:3010/sendformdata',
            {
                name,
                email,
                message
            });
        await alert('everything is ok')
    } catch (error) {
        alert(error)
    }
}