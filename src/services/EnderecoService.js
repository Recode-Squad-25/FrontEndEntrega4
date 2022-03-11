import axios from 'axios';

const ENDERECO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Endereco'

class EnderecoService {
    getEndereco(){
        axios.get(ENDERECO_REST_API_URL);
    }
}

export default new EnderecoService()