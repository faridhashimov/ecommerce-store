import useFetch from '../hooks/useFetch'

const BASE_URL = 'http://localhost:5000/api'

const useAdminService = () => {
    const { loading, error, clearError, getData } = useFetch()

    const getProducts = async (newPage) => {
        const res = await getData(`${BASE_URL}/products?page=${newPage}`)
        return res
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
    }
}

export default useAdminService
