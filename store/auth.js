import * as types from './mutation-types'
import { auth, GoogleAuthProvider } from '../shared/fireinit'

export const state = () => ({
    authUser: null
})

export const getters = {
    activeAuthUser: (state, getters) => {
        return state.authUser
    }
}

export const mutations = {
    [types.SET_AUTH_USER](state, payload) {
        state.authUser = payload
    }
}

export const actions = {
    setGoogleAuthUser({ commit }, payload) {
        commit(types.SET_AUTH_USER, {
            uid: payload.uid,
            email: payload.email,
            photoURL: payload.photoURL,
            displayName: payload.displayName,
        })
    },
    signInWithGoogle({ commit }) {
        commit({ type: types.BEGIN_LOADING }, { root: true });
        return new Promise((resolve, reject) => {
            auth.signInWithRedirect(GoogleAuthProvider)
            resolve()
        })
    },
    signOut({ commit }) {
        commit({ type: types.BEGIN_LOADING }, { root: true });
        return new Promise((resolve, reject) => {
            auth.signOut().then(() => {
                commit({ type: types.STOP_LOADING }, { root: true });
                resolve();
            }).catch(err => {
                commit({ type: types.STOP_LOADING }, { root: true });
                reject(err);
            })
        })
    }
}