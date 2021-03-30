import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContainer, Titulo, Icons, InputsLogin, Botao, Erro, Sucesso } from './styles';
import { FaUser, FaKey } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/ducks/auth/actions';
import api from '../../services/api';

interface LoginInputs {
    email: string;
    senha: string;
}

const Login: React.FC = () => {
    const { loadingSignInRequest, isSignedIn, error } = useSelector((state: StoreState) => state.auth);
    const dispatch = useDispatch();

    console.log('LOADING:', loadingSignInRequest);
    console.log('SIGNED:', isSignedIn);
    console.log('ERROR:', error);

    const [resposta, setResposta] = useState<Boolean>();
    const { register, handleSubmit, errors } = useForm<LoginInputs>();

    const onSubmit = handleSubmit(
        async (data) => {
            const response = await api.post('/auth', data);

            if (response.status === 200) {
                console.log(response.data);
                return setResposta(true);
            }
        }
    )
    
    return (
        <LoginContainer>
            <Titulo> Faça seu Login </Titulo>
            {resposta &&
                (
                <Sucesso> 
                    Logado com sucesso! 
                </Sucesso>
                )
            }
            {errors.email && 
                <Erro> 
                    <AiFillInfoCircle color="#ff4a4a" style={{ marginRight: '1rem'}} /> 
                    Email é obrigatório 
                </Erro>
            }
            <Icons>
                <FaUser color="#FFF" style={{ marginRight: '1rem' }} />
                <InputsLogin name="email" defaultValue="kaiquehenriqu1e.2005@outlook.com" type="email" placeholder="Digite seu email" ref={register({ required: true })} />
            </Icons>
            {errors.senha && 
                <Erro> 
                    <AiFillInfoCircle color="#ff4a4a" style={{ marginRight: '1rem'}} /> 
                    Senha é obrigatório 
                </Erro>
            }
            <Icons>
                <FaKey color="#FFF" style={{ marginRight: '1rem'}} />
                <InputsLogin name="senha" type="password" defaultValue="123456" placeholder="Digite sua senha" ref={register({ required: true })} />
             </Icons>
            <Botao type="button" onClick={() => dispatch(signInRequest({ 
                email: 'kaiquehenriqu1e.2005@outlook.com', 
                senha: '123456' 
            }))}>
                {loadingSignInRequest ? 'Carregando...' : 'Entrar'}
            </Botao>
        </LoginContainer>
  );
}

export default Login;