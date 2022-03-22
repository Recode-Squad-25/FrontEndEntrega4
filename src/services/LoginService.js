import axios from 'axios'

const LoginService = axios.create ({
    baseURL: "https://colore-back-end.herokuapp.com/"
})

export default LoginService
