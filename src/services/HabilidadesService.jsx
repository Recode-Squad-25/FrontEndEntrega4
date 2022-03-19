import axios from 'axios';

const HABILIDADES_REST_API_URL = 'https://colore-back-end.herokuapp.com/Habilidades'

class HabilidadesService {
    getHabilidades(){
        axios.get(HABILIDADES_REST_API_URL);
    }

    createHabilidades(habilidades){
        return axios.post(HABILIDADES_REST_API_URL, habilidades);
    }

    getHabilidadesById(habilidadesId){
        return axios.get(HABILIDADES_REST_API_URL + '/' + habilidadesId);
    }

    updateHabilidades(habilidades, habilidadesId){
        return axios.put(HABILIDADES_REST_API_URL + '/' + habilidadesId, habilidades);
    }

    deleteHabilidades(habilidadesId){
        return axios.delete(HABILIDADES_REST_API_URL + '/' + habilidadesId);
    }
}

export default new HabilidadesService()