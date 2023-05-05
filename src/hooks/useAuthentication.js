import axios from "axios"

const useAuthentication = () => {

    const createNewUser = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users`
        axios.post(url, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }   

    return { createNewUser }
}

export default useAuthentication