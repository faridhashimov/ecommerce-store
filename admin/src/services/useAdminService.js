import useFetch from '../hooks/useFetch'

const BASE_URL = 'http://localhost:5000/api'

const useAdminService = () => {
    const { loading, error, clearError, getData } = useFetch()

    const getProducts = async (newPage, category, order, title) => {
        const res = await getData(
            `${BASE_URL}/products?page=${newPage}&category=${category}&order=${order}&title=${title}`
        )
        return res
    }
    const getAllUSers = async () => {
        const res = await getData(`${BASE_URL}/users`)
        return res
    }
    const getAllOrders = async () => {
        const res = await getData(`${BASE_URL}/orders`)
        return res
    }
    const getOrder = async (id) => {
        const res = await getData(`${BASE_URL}/orders/${id}`)
        return res
    }

    return {
        loading,
        error,
        clearError,
        getProducts,
        getAllUSers,
        getAllOrders,
        getOrder,
    }
}

export default useAdminService
