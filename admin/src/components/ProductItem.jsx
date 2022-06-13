import { Button, styled, Typography } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import { Box } from '@mui/system'

const Product = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #9a9a9a',
    height: '320px',
    widht: '100px',
    borderRadius: '5px',
    overflow: 'hidden'
})
const InfoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
})
const ButtonContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
})
const StyledButton = styled(Button)({
    padding: '2px 5px',
    textTransform: 'none',
})

const ProductItem = () => {
    return (
        <Product>
            <Box sx={{ height: '65%', borderBottom: '1px solid #9a9a9a' }}>
                <img
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fa3%2Fbf%2Fa3bfc81d2db797e2d85fb0348b88c86e71561dee.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
                    alt="t-shirt"
                />
            </Box>
            <Box sx={{ height: '35%', padding: '10px' }}>
                <InfoContainer>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: '400',
                            marginBottom: '5px',
                        }}
                        variant="span"
                    >
                        Long Fit T-shirt
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#000',
                        }}
                        variant="span"
                    >
                        $ 179.00
                    </Typography>
                </InfoContainer>
                <ButtonContainer>
                    <StyledButton variant="outlined" startIcon={<Edit />}>
                        Edit
                    </StyledButton>
                    <StyledButton
                        variant="outlined"
                        color="error"
                        startIcon={<Delete />}
                    >
                        Delete
                    </StyledButton>
                </ButtonContainer>
            </Box>
        </Product>
    )
}

export default ProductItem
