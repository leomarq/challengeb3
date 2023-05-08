import './Simulador.css'

function Simulador() {
    return (
        <div className="conteudo">
            <div className="conteudo-simulador">
                <div className="input-simulador">
                    <form>
                        <input type="text" name="nome-empresa" className="filtro-simulador" id="nome-empresa" placeholder="Nome da empresa" /><br />
                        <input type="text" name="setor-empresa" className="filtro-simulador" id="setor-empresa" placeholder="Setor da empresa" /><br />
                        <input type="text" name="ano-ipo" className="filtro-simulador" id="ano-ipo" placeholder="Ano do IPO" /><br />
                    </form>
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