import {
    CalendarMonth,
    LocalShipping,
    LocationOn,
    Person,
} from '@mui/icons-material'
import {
    Box,
    Button,
    MenuItem,
    Paper,
    Select,
    Stack,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Container = styled(Box)({
    minHeight: '100vh',
    padding: '30px',
})

const OrderContainer = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    marginTop: '20px',
}))

const Header = styled(Box)({
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid #d8d8d8',
})

const OrderTitle = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
})

const SaveBtn = styled(Button)({
    textTransform: 'none',
    borderColor: '#C4C4C4',
    color: '#000',
    '&:hover': {
        borderColor: '#000',
    },
})

const OrderInfo = styled(Box)({
    padding: '20px',
})

const Item = styled(Box)({
    display: 'flex',
})

const IconContainer = styled('div')({
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3167EB',
    backgroundColor: '#D6E1FB',
})

const StyledTypo = styled(Typography)({
    fontWeight: '500',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '4px',
})
const StyledSpan = styled(Typography)({
    fontSize: '16px',
    fontWeight: '300',
    color: '#000',
    margin: '3px 0px',
})
const TableTotal = styled(TableCell)({
    fontSize: '16px',
    fontWeight: '600',
})

const products = [
    {
        id: 1,
        img: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fd0%2F7c%2Fd07c80db8ad6c37a39718220340ed0087c056c94.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        title: 'Slim Fit Linen-blend Shirt',
        size: 'XS',
        color: 'CB9A8C',
        price: 29.99,
        quantity: 1,
    },
    {
        id: 2,
        img: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcc%2Fa7%2Fcca71e6598eca6975cad0f42adc0299d500943d3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_cargo%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        title: 'Regular Fit Knee-length Cargo Shorts',
        size: 'M',
        color: 'A7A9A3',
        price: 39.99,
        quantity: 1,
    },
    {
        id: 3,
        img: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F80%2Fd5%2F80d57bdcdb264c747f001ff9be1b67a766e94877.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        title: 'Strappy Sandals',
        size: 'XS',
        color: 'D8C5A5',
        price: 12.99,
        quantity: 2,
    },
    {
        id: 4,
        img: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F89%2Fbd%2F89bdedcc389057fda3bdbdbbcd4971e0b052140e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        title: 'Backpack',
        color: 'CB9A8C',
        price: 24.99,
        quantity: 1,
    },
]

const SingleOrder = () => {
    const [status, setStatus] = useState('Pending')

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

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
                    <OrderTitle>
                        <Typography
                            variant="h4"
                            fontSize={16}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '4px',
                            }}
                        >
                            <CalendarMonth />
                            Wed, Aug 13, 2020, 4:34PM
                        </Typography>
                        <Typography
                            variant="span"
                            sx={{ fontSize: '14px', color: '#9a9a9a' }}
                        >
                            Order ID: 3453012
                        </Typography>
                    </OrderTitle>
                    <Box sx={{ display: 'flex' }}>
                        <Select
                            size="small"
                            fullWidth
                            value={status}
                            onChange={onStatusChange}
                            sx={{ marginRight: '15px', width: '130px' }}
                        >
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Shipped">Shipped</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                        <SaveBtn variant="outlined">Save</SaveBtn>
                    </Box>
                </Header>
                <OrderInfo>
                    <Stack mb={4} sx={{ width: '100%' }} direction="row">
                        <Item flex={1}>
                            <IconContainer>
                                <Person />
                            </IconContainer>
                            <OrderTitle ml={1}>
                                <StyledTypo variant="h5">Customer</StyledTypo>
                                <StyledSpan variant="span">
                                    John Alexander
                                </StyledSpan>
                                <StyledSpan variant="span">
                                    alex@example.com
                                </StyledSpan>
                                <StyledSpan variant="span">
                                    +998 99 22123456
                                </StyledSpan>
                            </OrderTitle>
                        </Item>
                        <Item flex={1}>
                            <IconContainer>
                                <LocalShipping />
                            </IconContainer>
                            <OrderTitle ml={1}>
                                <StyledTypo variant="h5">Order info</StyledTypo>
                                <StyledSpan variant="span">
                                    Shipping: Fargo Express
                                </StyledSpan>
                                <StyledSpan variant="span">
                                    Payment method: card
                                </StyledSpan>
                                <StyledSpan variant="span">
                                    Status: new
                                </StyledSpan>
                            </OrderTitle>
                        </Item>
                        <Item flex={1}>
                            <IconContainer>
                                <LocationOn />
                            </IconContainer>
                            <OrderTitle ml={1}>
                                <StyledTypo variant="h5">Deliver to</StyledTypo>
                                <StyledSpan variant="span">
                                    City: New York
                                </StyledSpan>
                                <StyledSpan variant="span">
                                    Brooklyn Washington str 123
                                </StyledSpan>
                                <StyledSpan variant="span">901220</StyledSpan>
                            </OrderTitle>
                        </Item>
                    </Stack>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 700 }}
                            aria-label="spanning table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Size</TableCell>
                                    <TableCell>Color</TableCell>
                                    <TableCell>Qty.</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Sum</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <img
                                                style={{
                                                    height: '40px',
                                                    width: '40px',
                                                    borderRadius: '50%',
                                                    marginRight: '10px',
                                                }}
                                                src={product.img}
                                                alt="product.title"
                                            />{' '}
                                            {product.title}
                                        </TableCell>
                                        <TableCell>{product.size}</TableCell>
                                        <TableCell>{product.color}</TableCell>
                                        <TableCell>
                                            {product.quantity}
                                        </TableCell>
                                        <TableCell>${product.price}</TableCell>
                                        <TableCell>
                                            ${product.price * product.quantity}
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={4} />
                                    <TableCell>Subtotal</TableCell>
                                    <TableCell>$130.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={4} />
                                    <TableCell>Shipping cost</TableCell>
                                    <TableCell>$10.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={4} />
                                    <TableCell>Total</TableCell>
                                    <TableTotal>$140.00</TableTotal>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={4} />
                                    <TableCell sx={{ color: '#9a9a9a' }}>
                                        Status
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            style={{
                                                padding: '2px 7px',
                                                borderRadius: '5px',
                                                backgroundColor: 'lightgreen',
                                                color: 'green',
                                            }}
                                        >
                                            Pending
                                        </span>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </OrderInfo>
            </OrderContainer>
        </Container>
    )
}

export default SingleOrder
