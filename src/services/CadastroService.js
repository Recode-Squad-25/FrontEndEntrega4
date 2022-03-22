import axios from 'axios'

const Cadastro = axios.create ({
    baseURL: "https://colore-back-end.herokuapp.com/"
})

export default Cadastro