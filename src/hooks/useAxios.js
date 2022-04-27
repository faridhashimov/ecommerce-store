import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxios = (dataUrl) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        const source = axios.CancelToken.source()
        const getProducts = async (url) => {
            setLoading(true)
            try {
                const res = await axios.get(url, {
                    cancelToken: source.token,
                })
                setLoading(false)
                setData(res.data)
            } catch (err) {
                setLoading(false)
                setError(err.message)
            }
        }
        getProducts(dataUrl)

        const cleanUp = () => {
            source.cancel()
        }
        return cleanUp
    }, [dataUrl])

    return { loading, error, data }
}
