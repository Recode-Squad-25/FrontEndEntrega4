import axios from 'axios';

const EXPERIENCIA_REST_API_URL = 'https://colore-back-end.herokuapp.com/Experiencia'

class ExperienciaService {
    getExperiencia(){
        axios.get(EXPERIENCIA_REST_API_URL);
    }
}

export default new ExperienciaService()