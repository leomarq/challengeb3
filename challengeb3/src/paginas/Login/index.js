import './Login.css'

function Login() {
    return (
        <div className="conteudo">
            <div className="conteudo-conta">
                <img src="/images/perfil.jpg" alt="Imagem do usuário." style={{ width: '15%' }} />
                <form>
                    <input className='input-conta' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <input className='input-conta' type="password" name="senha" id="senha" placeholder="Senha" /><br />
                    <button className="button-conta" type="submit" id="login">Login</button><br /><br />
                    <button className="button-conta" id="esqueceu-senha">Esqueceu sua senha?</button><br />
                    <button className="button-conta" id="criar-conta">Crie sua conta.</button>
                </form>
            </div>
        </div>
    )
}

export default Login;