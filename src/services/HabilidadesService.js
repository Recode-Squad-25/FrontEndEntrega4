import axios from 'axios';

const HABILIDADES_REST_API_URL = 'https://colore-back-end.herokuapp.com/Habilidades'

class HabilidadesService {
    getHabilidades(){
        axios.get(HABILIDADES_REST_API_URL);
    }
}

export default new HabilidadesService()