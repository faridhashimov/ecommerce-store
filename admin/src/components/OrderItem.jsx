import { styled, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Status = styled(Typography)(({ theme }) => ({
    padding: '5px 7px',
    borderRadius: theme.shape.borderRadius,
}))

const StyledLink = styled(Link)({
    padding: '5px 15px',
    backgroundColor: 'transparent',
    border: '1px solid blue',
    color: 'blue',
    textDecoration: 'none',
    borderRadius: '3px',
    '&:hover': { opacity: '.7' },
})

const OrderItem = ({ data }) => {
    return (
        <TableRow
            key={data.id}
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                #{data.id}
            </TableCell>
            <TableCell align="left">{data.customer}</TableCell>
            <TableCell align="left">{data.email}</TableCell>
            <TableCell align="left">{data.date}</TableCell>
            <TableCell align="left">{data.amount}</TableCell>
            <TableCell align="left">
                <Status
                    variant="span"
                    sx={{
                        backgroundColor:
                            data.status === 'Delivered'
                                ? '#DCF5E0'
                                : data.status === 'Pending'
                                ? '#FFE8D0'
                                : data.status === 'Shipped'
                                ? '#9af2fa'
                                : '#FDCCCC',
                        color:
                            data.status === 'Delivered'
                                ? '#006D0E'
                                : data.status === 'Pending'
                                ? '#985325'
                                : data.status === 'Shipped'
                                ? '#014f56'
                                : '#920000',
                    }}
                >
                    {data.status}
                </Status>
            </TableCell>
            <TableCell align="left">
                <StyledLink
                    to={`/orders/${data.id}`}
                    size="small"
                    variant="outlined"
                >
                    Details
                </StyledLink>
            </TableCell>
        </TableRow>
    )
}

export default OrderItem
