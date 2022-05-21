import axios from 'axios'
import { useState, useEffect } from 'react'

export const useAxios = (url, body = null, headers) => {
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async (
            prodUrl,
            body = null,
            headers = { 'Content-type': 'application/json' }
        ) => {
            setloading(true)
            try {
                const res = await axios.get(prodUrl, { body, headers })

                setData(res.data)
                setloading(false)
            } catch (error) {
                setloading(false)
                setError(error.message)
                throw new Error(error)
            }
        }
        getData(url, body, headers)
    }, [body, headers, url])

    const clearError = () => setError(null)

    return { loading, error, data, clearError }
}
