import useFetch from './useFetch'

const BASE_URL = 'http://localhost:5000/api'

const useEcomService = () => {
    const { loading, error, clearError, getData } = useFetch()

    const getProducts = async () => {
        const res = await getData(`${BASE_URL}/products`)
        return res.data
    }
    const getOrder = async (id) => {
        const res = await getData(`${BASE_URL}/orders/${id}`)
        return res
    }
    const getProduct = async (id) => {
        const res = await getData(`${BASE_URL}/products/${id}`)
        return res
    }
    const getAllCategories = async (id) => {
        const res = await getData(`${BASE_URL}/products/find/categories`)
        return res
    }

    return {
        loading,
        error,
        clearError,
        getProducts,
        getOrder,
        getProduct,
        getAllCategories,
    }
}

export default useEcomService
