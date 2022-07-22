import useFetch from '../hooks/useFetch'

const BASE_URL = 'http://localhost:5000/api'

const useEcomService = () => {
    const { loading, error, clearError, request } = useFetch()

    const getProducts = async () => {
        const res = await request(`${BASE_URL}/products`)
        return res.data
    }
    const getOrder = async (id) => {
        const res = await request(`${BASE_URL}/orders/${id}`)
        return res
    }
    const getProduct = async (id) => {
        const res = await request(`${BASE_URL}/products/${id}`)
        return res
    }
    const getAllCategories = async () => {
        const res = await request(`${BASE_URL}/products/find/categories`)
        return res
    }
    const getUser = async (id) => {
        const res = await request(`${BASE_URL}/users/${id}`)
        return res
    }
    const updateUser = async (id, body) => {
        const res = await request(`${BASE_URL}/users/update/${id}`, 'PUT', body)
        return res
    }
    const registerNewUser = async (body) => {
        const res = await request(`${BASE_URL}/auth/register`, 'POST', body)
        return res
    }

    return {
        loading,
        error,
        clearError,
        getProducts,
        getOrder,
        getProduct,
        getUser,
        getAllCategories,
        updateUser,
        registerNewUser,
    }
}

export default useEcomService
