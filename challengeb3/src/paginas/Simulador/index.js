import './Simulador.css'
import apiEmpresas from '../../services/apiEmpresas';
import { useState } from "react";

function Simulador() {

    const [empresa, setEmpresa] = useState("");
    const [valorEmpresa] = useState('');

    async function retornarEmpresa() {
        const responseEmpresa = await apiEmpresas(`${empresa}`);

        console.log(responseEmpresa.data);
    }

    return (
        <div className="conteudo">
            <div className="conteudo-simulador">
                <div className="input-simulador">
                    <select className="filtro-simulador" id='select-empresa'>
                        <option value="selecao-empresa">Selecione uma empresa</option>
                        <option value='12345678910121' id='empresa1'>Magazine</option>
                        <option value='12345678910150' id='empresa2'>Mega Cel</option>
                        <option value='12222879410536' id='empresa3'>PontoQuente</option>
                        <option value='55574108936254' id='empresa4'>Pão Açucarado</option>
                        <option value='96547893214775' id='empresa5'>Vigoroso Alimentos</option>
                        <option value='88875412589783' id='empresa6'>Energize Agroenergia</option>
                        <option value='66047896124730' id='empresa7'>Farma Medicamentos</option>
                    </select>
                    <button onClick={retornarEmpresa}>Pesquisar</button>
                </div>
                <div className="lista-empresas">
                    Lista de empresas
                </div>
            </div>
            <div class="resultado-simulador">
                Resultado da simulação
            </div>
        </div>
    )
}

export default Simulador;