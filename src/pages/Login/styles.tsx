import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 55em;
    width: 50rem;
    margin: 2rem 0;
    background: #1a1a1a;
    border-radius: 5px;
`;

export const Titulo = styled.div`
    margin-bottom: 10rem;
    font-family: var(--font-primary);
    font-size: 4rem;
    font-weight: 800;
    color: white;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Erro = styled.span`
    display: flex;
    align-items: flex-start;
    width: 40rem;
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 1rem;
    color: #ff4a4a;
`;

export const Sucesso = styled.span`
    display: flex;
    align-items: flex-start;
    width: 40rem;
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 2rem;
    color: #00ff55;
`;

export const InputsLogin = styled.input`
    height: 4rem;
    width: 40rem;
    margin: 1rem 0;
    padding: .5rem;
    border-radius: 5px;
    color: white;
    font-size: 1.25rem;
    font-family: var(--font-primary);
    background: var(--background-input);
    border: none;
    outline: none;

    &::placeholder {
        font-size: 1.05rem;
        font-weight: 600;
    }

    &:focus {
        transition: .075s ease-in-out;
        outline: none;
        border: 3px solid #6833e4;
    }
`;

export const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 4rem;
    width: 35rem;
    margin: 25px 0;

    border-radius: 5px;
    border: none;
    outline: none;

    font-size: 1.75rem;
    font-weight: 600;
    font-family: var(--font-primary);
    color: white;
    
    background: #6833e4;
    transition: .25s ease-in-out;

    &:hover {
        background: #4613bd;
    }

    &:focus {
        border: 5px solid #5014dd;
    }
`;
