import axios from 'axios';

const CURRICULO_REST_API_URL = 'https://colore-back-end.herokuapp.com/Curriculo'

class CurriculoService {
    getCurriculo(){
        axios.get(CURRICULO_REST_API_URL);
    }
}

export default new CurriculoService()