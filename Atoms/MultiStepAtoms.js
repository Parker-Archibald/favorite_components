import {atom} from 'recoil';

export const serviceState = atom({
    key: 'serviceState',
    default: 'NA'
})

export const personalInfoState = atom({
    key: 'personalInfoState',
    default: {}
})

export const contentState = atom({
    key: 'contentState',
    default: ''
})

export const illustrationState = atom({
    key: 'illustrationState',
    default: ''
})