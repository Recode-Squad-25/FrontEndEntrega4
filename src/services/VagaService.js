import axios from 'axios';

const VAGA_REST_API_URL = 'https://colore-back-end.herokuapp.com/Vaga'

class VagaService {
    getVaga(){
        axios.get(VAGA_REST_API_URL);
    }
}

export default new VagaService()