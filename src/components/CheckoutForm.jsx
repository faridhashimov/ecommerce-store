import { useEffect, useState } from 'react'
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import styled from 'styled-components'

const CheckOutBtn = styled.button`
    text-transform: uppercase;
    border: 1px solid #eea287;
    outline: none;
    color: #eea287;
    cursor: pointer;
    width: 100%;
    padding: 7px 30px;
    background-color: transparent;
    transition: all 0.2s ease-in;
    margin-top: 10px;
    &:hover {
        background-color: #eea287;
        transition: all 0.2s ease-in;
        color: #fff;
    }
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`
const CheckoutSpinner = styled.div`
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    border-radius: 50%;
    &::before,
    &::after {
        position: absolute;
        content: '';
        border-radius: 50%;
    }

    &:before {
        width: 10.4px;
        height: 20.4px;
        background: #eea287;
        border-radius: 20.4px 0 0 20.4px;
        top: -0.2px;
        left: -0.2px;
        -webkit-transform-origin: 10.4px 10.2px;
        transform-origin: 10.4px 10.2px;
        -webkit-animation: loading 2s infinite ease 1.5s;
        animation: loading 2s infinite ease 1.5s;
    }
    &:after {
        width: 10.4px;
        height: 10.2px;
        background: #eea287;
        border-radius: 0 10.2px 10.2px 0;
        top: -0.1px;
        left: 10.2px;
        -webkit-transform-origin: 0px 10.2px;
        transform-origin: 0px 10.2px;
        -webkit-animation: loading 2s infinite ease;
        animation: loading 2s infinite ease;
    }

    @keyframes loading {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`
const PaymentMessage = styled.div`
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
`
const PaymentForm = styled.div`
    width: 100%;
    margin: 0 auto;
    align-self: center;
    border-radius: 7px;

`

export default function CheckoutForm() {
    const stripe = useStripe()
    const elements = useElements()

    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!stripe) {
            return
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        )

        if (!clientSecret) {
            return
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case 'succeeded':
                    setMessage('Payment succeeded!')
                    break
                case 'processing':
                    setMessage('Your payment is processing.')
                    break
                case 'requires_payment_method':
                    setMessage(
                        'Your payment was not successful, please try again.'
                    )
                    break
                default:
                    setMessage('Something went wrong.')
                    break
            }
        })

    }, [stripe])

    const handleSubmit = async (e) => {
        e.preventDefault()

        
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return
        }

        setIsLoading(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: 'http://localhost:3000/success',
            },
        })

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.
        if (error.type === 'card_error' || error.type === 'validation_error') {
            setMessage(error.message)
        } else {
            setMessage('An unexpected error occured.')
        }

        setIsLoading(false)

       
    }

    return (
        <PaymentForm onSubmit={handleSubmit}>
            <PaymentElement />
            <CheckOutBtn disabled={isLoading || !stripe || !elements}>
                <span>
                    {isLoading ? (
                        <CheckoutSpinner></CheckoutSpinner>
                    ) : (
                        'Pay now'
                    )}
                </span>
            </CheckOutBtn>
            {/* Show any error or success messages */}
            {message && <PaymentMessage>{message}</PaymentMessage>}
        </PaymentForm>
    )
}
