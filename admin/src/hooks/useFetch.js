import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'

const useFetch = (url, method, body, headers) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState(undefined)

    const getData = useCallback(
        async (url, method = 'GET', body = null, headers = null) => {
            try {
                const res = await axios({ url, method, body, headers })
                setData(res.data)
                setLoading(false)
            } catch (error) {
                setData(undefined)
                setLoading(false)
                setError(error.message)
            }
        },
        []
    )

    useEffect(() => {
        getData(url, method, body, headers)
    }, [url])

    return { loading, error, data }
}

export default useFetch
