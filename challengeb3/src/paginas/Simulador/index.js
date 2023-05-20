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

                <h2>Empresas e Valores das Ações</h2>
                    <table className='tabela-simulador'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Setor</th>
                                <th>Ano de abertura</th>
                                <th>1º Trimestre/2022</th>
                                <th>2º Trimestre/2022</th>
                                <th>3º Trimestre/2022</th>
                                <th>4º Trimestre/2022</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empresas.map((empresa) => (
                                <tr key={empresa.cnpj}>
                                    <td>{empresa.nomeEmpresa}</td>
                                    <td>{empresa.setor}</td>
                                    <td>{empresa.anoAbertura}</td>
                                    <td>R$ {empresa.primeiroTrimestre}</td>
                                    <td>R$ {empresa.segundoTrimestre}</td>
                                    <td>R$ {empresa.terceiroTrimestre}</td>
                                    <td>R$ {empresa.quartoTrimestre}</td>                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Simulador;