import axios from 'axios';

const REQUISITOS_REST_API_URL = 'https://colore-back-end.herokuapp.com/Requisitos'

class RequisitosService {
    getRequisitos(){
        axios.get(REQUISITOS_REST_API_URL);
    }
}

export default new RequisitosService()