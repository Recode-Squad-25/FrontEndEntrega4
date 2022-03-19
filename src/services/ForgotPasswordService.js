import axios from 'axios'

const ForgotPassword = axios.create ({
    baseURL: "http://localhost:8080/"
})

export default ForgotPassword