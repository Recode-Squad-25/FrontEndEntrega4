import axios from 'axios'

const Cadastro = axios.create ({
    baseURL: "http://localhost:8080/"
})

export default Cadastro