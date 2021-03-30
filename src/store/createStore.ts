/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { AuthAction, AuthState } from './ducks/auth/types';

export interface StoreState {
    auth: AuthState;
}

export type StoreAction = AuthAction;

export default (
    reducers: Reducer<StoreState, StoreAction>,
    middlewares: Middleware[]
) => {
    const enhancer = applyMiddleware(...middlewares);

    return createStore(reducers, enhancer);
}
