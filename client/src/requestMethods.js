import axios from 'axios'

const BASE_URL = 'https://ecommerce-store-backend.vercel.app/api/'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-type': 'application/json' },
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
})
