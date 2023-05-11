import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="conteudo">
            <div className="conteudo-conta">
                <img src="/images/perfil.jpg" alt="Imagem do usuário." style={{ width: '15%' }} />
                <form>
                    <input className='input-conta' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <input className='input-conta' type="password" name="senha" id="senha" placeholder="Senha" /><br />
                    <button className="button-conta" type="submit" id="login">Login</button><br /><br />
                    <button className="button-conta" id="esqueceu-senha"><Link to="/RecuperarSenha" style={{ textDecoration: 'none', color: 'inherit' }}>Esqueceu sua senha?</Link></button><br />
                    <button className="button-conta" id="criar-conta"><Link to="/Cadastro" style={{ textDecoration: 'none', color: 'inherit' }}>Crie sua conta.</Link></button>
                </form>
            </div>
        </div>
    )
}

export default Login;