import axios from 'axios'
import { useState, useEffect } from 'react'

export const useAxios = (url, body = null, headers) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()
        const getData = async (
            prodUrl,
            body = null,
            headers = { 'Content-type': 'application/json' }
        ) => {
            setLoading(true)
            try {
                const res = await axios.get(prodUrl, {
                    body,
                    headers,
                    cancelToken: source.token,
                })
                if (isMounted) {
                    setData(res.data)
                    setLoading(false)
                    setError(null)
                }
            } catch (error) {
                if (isMounted) {
                    setLoading(false)
                    setError(error.message)
                    throw new Error(error)
                }
            } finally {
                isMounted && setLoading(false)
            }
        }
        getData(url, body, headers)
        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }
        return cleanUp
    }, [body, headers, url])

    const clearError = () => setError(null)

    return { loading, error, data, clearError }
}
