import axios from 'axios';

const CURRICULO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Curriculo'

class CurriculoService {
    getCurriculo(){
        axios.get(CURRICULO_REST_API_URL);
    }

    createCurriculo(curriculo){
        return axios.post(CURRICULO_REST_API_URL, curriculo);
    }

    getCurriculoById(curriculoId){
        return axios.get(CURRICULO_REST_API_URL + '/' + curriculoId);
    }

    updateCurriculo(curriculo, curriculoId){
        return axios.put(CURRICULO_REST_API_URL + '/' + curriculoId, curriculo);
    }

    deleteCurriculo(curriculoId){
        return axios.delete(CURRICULO_REST_API_URL + '/' + curriculoId);
    }
}

export default new CurriculoService()