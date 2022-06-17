import axios from 'axios'
import { useState, useCallback } from 'react'

const useFetch = (url, method, body, headers) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const getData = useCallback(
        async (
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-type': 'application/json' }
        ) => {
            try {
                const res = await axios({ url, method, body, headers })
                setLoading(false)
                return res.data
            } catch (error) {
                setLoading(false)
                setError(error.message)
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

    return { loading, error, reFetch, clearError, getData }
}

export default useFetch
