import React from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/',
})

export const API = {
    Post (success: boolean) {
        return (
            instance.post(`test`, {success})
        )
    },

}