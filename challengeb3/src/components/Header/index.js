import { Link } from 'react-router-dom';
// import React, {useState} from 'react';
import { FaRegUserCircle } from 'react-icons/fa'
import './Header.css';

function Header() {

    return (
        <>
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/"><img src="/images/b3logo.png" alt="Logo B3" width="40px" /></Link>
                </div>
                <div className="button-container">
                    <button className="button-navbar" id="simulacao-nav"><Link to='/Simulador' style={{ textDecoration: 'none', color: 'inherit' }}>Simulação</Link></button>
                    <button className="button-navbar" id="documentacao-nav"><Link to='/Documentos' style={{ textDecoration: 'none', color: 'inherit' }}>Documentação de processos</Link></button>
                    <button className="button-navbar" id="informacoes-nav"><Link to='Informacao' style={{ textDecoration: 'none', color: 'inherit' }}>Informações gerais</Link></button>
                    <button className="button-navbar" id="login-nav"><FaRegUserCircle/></button>
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