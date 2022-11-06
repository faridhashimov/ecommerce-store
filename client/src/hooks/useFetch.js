import axios from 'axios'
import { useState, useCallback } from 'react'

const useFetch = (url, method, body, headers) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const request = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-type': 'application/json' }
        ) => {
            try {
                const res = await axios({
                    url,
                    method,
                    data: { ...body },
                    headers,
                })
                setLoading(false)
                return res.data
            } catch (error) {
                setLoading(false)
                setError(error.message)
            } finally {
                setLoading(false)
            }
        },
        []
    )

    const reFetch = async () => {
        setLoading(true)
        try {
            const res = await axios(url)
            setLoading(false)
            return res.data
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    const clearError = useCallback(() => setError(null), [])

    return { loading, error, reFetch, clearError, request }
}

export default useFetch
