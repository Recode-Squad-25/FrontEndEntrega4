import axios from 'axios';

const FORMACAO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Endereco'

class EnderecoService {
    getEndereco(){
        axios.get(FORMACAO_REST_API_URL);
    }
}

export default new EnderecoService()