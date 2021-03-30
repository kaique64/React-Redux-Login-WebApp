import { action } from 'typesafe-actions';

export function signInRequest({
    email,
    senha
} : {
    email: string,
    senha: string
}) {
    return action('@auth/SIGN_IN_REQUEST', {
        email,
        senha
    });
}

export function signInSuccess({ token }: { token: string }) {
    return action('@auth/SIGN_IN_SUCCESS', {
        token
    });
}

export function signInFailure() {
    return action('@auth/SIGN_IN_FAILURE');
}