import './Simulador.css'
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Simulador() {

    const [empresas, setEmpresas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/Empresas/rest/empresa").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setEmpresas(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/Empresas/rest/empresa/${id}`, {
            method: "delete"
        }).then(() => {
            window.location = "/"
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="conteudo">
            <div className="conteudo-simulador">

                <h2>Lista de Empresas</h2>
                    <table className='tabela-simulador'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Setor</th>
                                <th>Ano de abertura</th>
                                <th>1º Trimestre</th>
                                <th>2º Trimestre</th>
                                <th>3º Trimestre</th>
                                <th>4º Trimestre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((empresa) => (
                                <tr key={empresa.cnpj}>
                                    <td>{empresa.nomeEmpresa}</td>
                                    <td>{empresa.setor}</td>
                                    <td>{empresa.anoAbertura}</td>
                                    <td>{empresa.primeiroTrimestre}</td>
                                    <td>{empresa.segundoTrimestre}</td>
                                    <td>{empresa.terceiroTrimestre}</td>
                                    <td>{empresa.quartoTrimestre}</td>                    
                                </tr>
                            ))}
                        </tbody>
                    </table>

                {/* <Routes>
                <Route path='/services' element={<ApiEmpresas/>}/>
                </Routes> */}

                {/* <div className="input-simulador">
                    <select className="filtro-simulador" id='select-empresa'>
                        <option value="selecao-empresa">Selecione uma empresa</option>
                        <option value='12345678910121' id='empresa1'>Magazine</option>
                        <option value='12345678910150' id='empresa2'>Mega Cel</option>
                        <option value='12222879410536' id='empresa3'>PontoQuente</option>
                        <option value='55574108936254' id='empresa4'>Pão Açucarado</option>
                        <option value='96547893214775' id='empresa5'>Vigoroso Alimentos</option>
                        <option value='88875412589783' id='empresa6'>Energize Agroenergia</option>
                        <option value='66047896124730' id='empresa7'>Farma Medicamentos</option>
                    </select> */}
                {/* <button onClick={retornarEmpresa}>Pesquisar</button> */}
                {/* </div>
                <div className="lista-empresas">
                    Lista de empresas
                </div> */}
            </div>
            {/* <div class="resultado-simulador">
                Resultado da simulação
            </div> */}
        </div>
    )
}

export default Simulador;