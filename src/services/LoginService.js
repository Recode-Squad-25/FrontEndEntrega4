import axios from 'axios'

const LoginService = axios.create ({
    baseURL: "http://localhost:8080/"
})

export default LoginService
