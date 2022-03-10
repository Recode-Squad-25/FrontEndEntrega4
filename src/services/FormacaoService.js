import axios from 'axios';

const FORMACAO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Formacao'

class FormacaoService {
    getFormacao(){
        axios.get(FORMACAO_REST_API_URL);
    }
}

export default new FormacaoService()