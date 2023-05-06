import axios from "axios"
import getConfigToken from "../components/utils/getConfigToken"

const useCrudCart = () => {
    const addProductToCard = data => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart`
        axios.post(url, data, getConfigToken())
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    return { addProductToCard }

}

export default useCrudCart