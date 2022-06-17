import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { SingleOrderBody, Spinner } from '../components'
import useEcomService from '../hooks/useEcomService'

const MyOrders = styled.div`
    display: flex;
    flex-direction: column;
`

const SingleOrder = () => {
    const [order, setOrder] = useState(null)
    const { id } = useParams()

    const { loading, error, getOrder } = useEcomService()

    useEffect(() => {
        onOrderLoad(id)
    }, [])

    const onOrderLoad = (id) => {
        getOrder(id).then((data) => setOrder(data))
    }

    console.log(order)
    const spinner = loading ? <Spinner /> : null
    const content = !loading && order ? <SingleOrderBody order={order} /> : null
    const errorMsg = error ? <p>Something went wrong...</p> : null

    return (
        <>
            <MyOrders>
                {spinner}
                {content}
                {errorMsg}
            </MyOrders>
        </>
    )
}

export default SingleOrder
