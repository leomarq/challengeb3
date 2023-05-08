import { Link } from 'react-router-dom';
// import React, {useState} from 'react';
import './Header.css';

function Header() {

    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/"><img src="/images/b3logo.png" alt="Logo B3" width="40px" /></Link>
                </div>
                <div className="button-container">
                    <button className="button-navbar" id="produtos-servicos">Produtos e Serviços</button>
                    <button className="button-navbar" id="market-data">Market data e Índices</button>
                    <button className="button-navbar" id="solucoes">Soluções</button>
                    <button className="button-navbar" id="regulacao">Regulação</button>
                    <button className="button-navbar" id="b3-navbar">B3</button>
                    <button className="button-navbar" id="mapa-navbar"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Mapa do Site</Link></button>
                    {/* <div className="dropdown-mapa">
                        <ul>
                            <li>Simulação</li>
                            <li>Documentação de processos</li>
                            <li>Informações gerais</li>
                        </ul>
                    </div> */}
                </div>
            </nav>
            <div className="acao-container">
                <p class="acao">AÇÃO 1 | X.XX%</p>
                <p class="acao">AÇÃO 2 | X.XX%</p>
                <p class="acao">AÇÃO 3 | X.XX%</p>
            </div>
        </>
    )
}

export default Header;