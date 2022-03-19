import axios from 'axios';

const FORMACAO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Formacao'

class FormacaoService {
    getFormacao(){
        axios.get(FORMACAO_REST_API_URL);
    }

    createFormacao(formacao){
        return axios.post(FORMACAO_REST_API_URL, formacao);
    }

    getFormacaoById(formacaoId){
        return axios.get(FORMACAO_REST_API_URL + '/' + formacaoId);
    }

    updateFormacao(formacao, formacaoId){
        return axios.put(FORMACAO_REST_API_URL + '/' + formacaoId, formacao);
    }

    deleteFormacao(formacaoId){
        return axios.delete(FORMACAO_REST_API_URL + '/' + formacaoId);
    }

}

export default new FormacaoService()