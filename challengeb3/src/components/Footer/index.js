import './Footer.css'

function Footer () {
    return (
        <footer className="footer">
            <div className="footer-container">
                <button className="button-footer" id="termos">Termos de Uso e Proteção de Dados</button>
                <button className="button-footer" id="atendimento">Atendimento</button>
                <button className="button-footer" id="denuncias">Canal de Denúncias</button>
                <button className="button-footer" id="idioma">PT (BR)</button>
            </div>
        </footer>
    )
}

export default Footer;