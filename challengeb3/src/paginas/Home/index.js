import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
    <div className="conteudo">
        <div id="ipo-index">
            <img src="images/b3ipo.png" alt="Logo da plataforma IPO da B3, a bolsa de valores do Brasil"/>
            <h2>O novo hub de investimentos da B3</h2>
            <h3>Tudo o que você precisa saber sobre o mercado de ações em um lugar só</h3>
        </div>

        <div className="acesso-index">
            <ul>
                <li id="acesso-rapido"><i>Acesso rápido</i></li>
                <hr/>
                <li id="acesso-simulacao"><Link to='/Simulador' style={{ textDecoration: 'none', color: 'inherit' }}>Simulação</Link></li>
                <li id="acesso-documentacao"><Link to='/Documentos' style={{ textDecoration: 'none', color: 'inherit' }}>Documentação de processos</Link></li>
                <li id="acesso-informacoes"><Link to='Informacao' style={{ textDecoration: 'none', color: 'inherit' }}>Informações gerais</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Home;