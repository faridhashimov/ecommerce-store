import { SentimentVeryDissatisfied } from '@mui/icons-material'
import { Box, Button, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const StyledLink = styled(Link)({
    textDecoration: 'none', color: 'inherit'
})

const Page404 = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'red',
                fontSize: '20px',
            }}
        >
            <SentimentVeryDissatisfied
                sx={{ margin: '40px', fontSize: '40px' }}
            />
            Page Not Found....
            <Button sx={{ margin: '40px' }} variant="outlined">
                <StyledLink to="/">
                    Home
                </StyledLink>
            </Button>
        </Box>
    )
}

export default Page404
