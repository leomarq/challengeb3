import './Cadastro.css'
import { useForm } from 'react-hook-form';

function Cadastro() {

    const {register, setValue, setFocus} = useForm();

    const checkCEP = (e) => {

        if (!e.target.value) return;

        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('estado', data.uf);
        setFocus('numero');
    }).catch((err) => console.log(err));
}
    
    return (
        <div className="conteudo">
            <div className="conteudo-cadastro">
                <form>
                    <label for='email'>E-mail:</label><br/>
                    <input className='input-cadastro' type="email" name="email" id="email" placeholder="E-mail" /><br />
                    <input className='input-cadastro' type="email" name="email" id="email" placeholder="Confirme seu E-mail" /><br />

                    <label for='nome'>Nome completo:</label><br/>
                    <input className='input-cadastro' type="text" name="nome" id="nome" placeholder="Nome completo" /><br />

                    <label for='cep'>CEP:</label><br/>
                    <input className='input-cadastro' type="text" name="cep" id="cep" placeholder="CEP" {...register('cep')} onBlur={checkCEP}/><br />

                    <label for='rua'>Rua:</label><br/>
                    <input className='input-cadastro' type="text" name="rua" id="rua" placeholder="Rua" {...register('rua')} /><br />

                    <label for='numero'>Número:</label><br/>
                    <input className='input-cadastro' type="text" name="numero" id="numero" placeholder="Nº" {...register('numero')} /><br />

                    <label for='bairro'>Bairro:</label><br/>
                    <input className='input-cadastro' type="text" name="bairro" id="bairro" placeholder="Bairro" {...register('bairro')} /><br />

                    <label for='cidade'>Cidade:</label><br/>
                    <input className='input-cadastro' type="text" name="cidade" id="cidade" placeholder="Cidade" {...register('cidade')} /><br />

                    <label for='uf'>Estado:</label><br/>
                    <input className='input-cadastro' type="text" name="uf" id="uf" placeholder="Estado" {...register('estado')} /><br />

                    <label for='cpf'>CPF (somente números):</label><br/>
                    <input className='input-cadastro' type="text" name="cpf" id="cpf" placeholder="CPF" /><br />

                    <label for='data-nasc'>Data de Nascimento:</label><br/>
                    <input className='input-cadastro' type="date" name="data-nasc" id="data-nasc"/><br />

                    <label for='cel'>Celular:</label><br/>
                    <input className='input-cadastro' type="text" name="cel" id="cel" placeholder="Celular" /><br />

                    <label for='senha'>Senha:</label><br/>

                    <input className='input-cadastro' type="password" name="senha" id="senha" placeholder="Senha" /><br />
                    <input className='input-cadastro' type="password" name="senha" id="senha" placeholder="Confirme sua senha" /><br />
                    <button className="button-cadastro" type="submit" id="cadastro">Criar conta</button><br /><br />
                </form>
            </div>
        </div>
    )
}

export default Cadastro;