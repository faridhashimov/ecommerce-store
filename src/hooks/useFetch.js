import axios from 'axios'
import { useEffect, useCallback, useState } from 'react'

const useFetch = (query, page) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])

    const sendQuery = useCallback(async () => {
        const source = axios.CancelToken.source()
        try {
            setLoading(true)
            setError(false)
            const res = await axios.get(query, {
                cancelToken: source.token,
            })
            setData((prev) => [...prev, ...res.data])
            setError(null)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setData(null)
        }
        const cleanUp = () => {
            source.cancel()
        }
        return cleanUp
    }, [query])

    useEffect(() => {
        sendQuery(query, page)
    }, [query, sendQuery, page])

    return { loading, error, data }
}

export default useFetch
