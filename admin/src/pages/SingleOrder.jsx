import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Container = styled(Box)({
    minHeight: '100vh',
    padding: '30px',
   
})

const Header = styled.apply(Box)({
    
})

const OrderContainer = styled(Box)(({theme}) => ({
    padding: '20px',
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    marginTop: '20px',
}))

const SingleOrder = () => {
    return (
        <Container>
            <Typography
                color={{ color: '#9a9a9a' }}
                variant="h5"
                fontWeight={500}
            >
                Order Detail
            </Typography>
            <OrderContainer>
                <Header>

                </Header>
            </OrderContainer>
        </Container>
    )
}

export default SingleOrder
