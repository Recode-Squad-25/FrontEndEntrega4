import axios from 'axios'

const ForgotPassword = axios.create ({
    baseURL: "https://colore-back-end.herokuapp.com/"
})

export default ForgotPassword