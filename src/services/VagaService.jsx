import axios from 'axios';

const VAGA_REST_API_URL = 'https://colore-back-end.herokuapp.com/Vaga'

class VagaService {
    getVaga(){
        axios.get(VAGA_REST_API_URL);
    }

    createVaga(vaga){
        return axios.post(VAGA_REST_API_URL, vaga);
    }

    getVagaById(vagaId){
        return axios.get(VAGA_REST_API_URL + '/' + vagaId);
    }

    updateVaga(vaga, vagaId){
        return axios.put(VAGA_REST_API_URL + '/' + vagaId, vaga);
    }

    deleteVaga(vagaId){
        return axios.delete(VAGA_REST_API_URL + '/' + vagaId);
    }
}

export default new VagaService()