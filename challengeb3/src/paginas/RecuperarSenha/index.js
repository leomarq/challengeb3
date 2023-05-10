import './RecuperarSenha.css'


function RecuperarSenha() {
    return (
        <div className="conteudo">
            <div className="conteudo-senha">
                <form>
                    <input className='input-senha' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <button className="button-senha" type="submit" id="codigo">Enviar código</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default RecuperarSenha;