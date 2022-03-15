import axios from 'axios';

const EMPRESA_REST_API_URL = 'https://colore-back-end.herokuapp.com/PessoaJuridica'

class EmpresaService {
    getEmpresa(){
        axios.get(EMPRESA_REST_API_URL);
    }

    createEmpresa(empresa){
        return axios.post(EMPRESA_REST_API_URL, empresa);
    }

    getEmpresaById(empresaId){
        return axios.get(EMPRESA_REST_API_URL + '/' + empresaId);
    }

    updateEmpresa(empresa, empresaId){
        return axios.put(EMPRESA_REST_API_URL + '/' + empresaId, empresa);
    }

    deleteEmpresa(empresaId){
        return axios.delete(EMPRESA_REST_API_URL + '/' + empresaId);
    }
}

export default new EmpresaService()