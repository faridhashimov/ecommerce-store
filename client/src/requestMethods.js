import axios from 'axios'

const BASE_URL = 'https://ecommerce-store-backend.vercel.app/api/'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json' },
})

const user = JSON.parse(localStorage.getItem('persist:root'))?.user
const currentUser = user && JSON.parse(user).user
const token = currentUser?.accessToken

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json', token: `Bearer ${token} ` },
})
