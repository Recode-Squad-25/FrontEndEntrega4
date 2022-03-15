import axios from 'axios';

const EXPERIENCIA_REST_API_URL = 'https://colore-back-end.herokuapp.com/Experiencia'

class ExperienciaService {
    getExperiencia(){
        axios.get(EXPERIENCIA_REST_API_URL);
    }
    
    createExperiencia(experiencia){
        return axios.post(EXPERIENCIA_REST_API_URL, experiencia);
    }

    getExperienciaById(experienciaId){
        return axios.get(EXPERIENCIA_REST_API_URL + '/' + experienciaId);
    }

    updateExperiencia(experiencia, experienciaId){
        return axios.put(EXPERIENCIA_REST_API_URL + '/' + experienciaId, experiencia);
    }

    deleteExperiencia(experienciaId){
        return axios.delete(EXPERIENCIA_REST_API_URL + '/' + experienciaId);
    }
    
}

export default new ExperienciaService()