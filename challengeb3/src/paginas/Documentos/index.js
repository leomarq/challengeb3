import './Documentos.css'

function Documentos() {
    return (
    <div className="conteudo">
        <div className="container-documento">
            <h2>Documentação de Processos</h2><br/><br/>
            <select className="selecao-documento">
                <option value="selecao-documento">Selecione um documento</option>
                <option value="documento1">Documento 1</option>
                <option value="documento2">Documento 2</option>
                <option value="documento3">Documento 3</option>
                <option value="documento4">Documento 4</option>
                <option value="documento5">Documento 5</option>
            </select>
        </div>
        <div className="container-descricao">
            <h2>Documento 1</h2><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum aliquid quae ratione obcaecati? Consectetur suscipit pariatur ducimus nostrum deleniti?</p>
            <br/>
            <p>Clique aqui para saber mais</p>
        </div>
    </div>
    )
}

export default Documentos;