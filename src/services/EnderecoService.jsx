import axios from 'axios';

const ENDERECO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Endereco'

class EnderecoService {
    getEndereco(){
        axios.get(ENDERECO_REST_API_URL);
    }

    createEndereco(endereco){
        return axios.post(ENDERECO_REST_API_URL, endereco);
    }

    getEnderecoById(enderecoId){
        return axios.get(ENDERECO_REST_API_URL + '/' + enderecoId);
    }

    updateEndereco(endereco, enderecoId){
        return axios.put(ENDERECO_REST_API_URL + '/' + enderecoId, endereco);
    }

    deleteEndereco(enderecoId){
        return axios.delete(ENDERECO_REST_API_URL + '/' + enderecoId);
    }
}

export default new EnderecoService()