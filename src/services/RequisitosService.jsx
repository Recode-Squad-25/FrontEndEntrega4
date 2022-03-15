import axios from 'axios';

const REQUISITOS_REST_API_URL = 'https://colore-back-end.herokuapp.com/Requisitos'

class RequisitosService {
    getRequisitos(){
        axios.get(REQUISITOS_REST_API_URL);
    }

    createRequisitos(requisitos){
        return axios.post(REQUISITOS_REST_API_URL, requisitos);
    }

    getRequisitosById(requisitosId){
        return axios.get(REQUISITOS_REST_API_URL + '/' + requisitosId);
    }

    updateRequisitos(requisitos, requisitosId){
        return axios.put(REQUISITOS_REST_API_URL + '/' + requisitosId, requisitos);
    }

    deleteRequisitos(requisitosId){
        return axios.delete(REQUISITOS_REST_API_URL + '/' + requisitosId);
    }
}

export default new RequisitosService()