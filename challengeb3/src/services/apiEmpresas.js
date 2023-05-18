import axios from 'axios';

const apiEmpresas = axios.create({

    baseURL: `http://localhost:8080/Empresas/rest/empresa/`
}
);

export default apiEmpresas;