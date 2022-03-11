import axios from 'axios';

const EMPRESA_REST_API_URL = 'https://colore-back-end.herokuapp.com/PessoaJuridica'

class EmpresaService {
    getEmpresa(){
        axios.get(EMPRESA_REST_API_URL);
    }
}

export default new EmpresaService()