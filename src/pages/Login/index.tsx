import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContainer, Titulo, Icons, InputsLogin, Botao, Erro, Sucesso } from './styles';
import { FaUser, FaKey } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/createStore';
import { signInRequest } from '../../store/ducks/auth/actions';

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

    const { register, handleSubmit, errors } = useForm<LoginInputs>();

    const onSubmit = handleSubmit(
        async (data) => {
            dispatch(signInRequest({
                email: data.email,
                senha: data.senha,
            }))
        }
    )
    
    return (
        <LoginContainer>
            <Titulo> Faça seu Login </Titulo>
            {isSignedIn &&
                (
                <Sucesso> 
                    Logado com sucesso! 
                </Sucesso>
                )
            }
            {error &&
                (
                <Erro> 
                    Email ou senha incorreto! 
                </Erro>
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
            <Botao type="button" onClick={onSubmit}>
                {loadingSignInRequest ? 'Carregando...' : 'Entrar'}
            </Botao>
        </LoginContainer>
  );
}

export default Login;