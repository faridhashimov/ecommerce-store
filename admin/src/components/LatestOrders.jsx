import { MoreVert } from '@mui/icons-material'
import { TableContainer } from '@mui/material'
import { TableHead } from '@mui/material'
import { TableCell } from '@mui/material'
import { Avatar } from '@mui/material'
import { Button } from '@mui/material'
import { TableBody } from '@mui/material'
import { TableRow } from '@mui/material'
import { Paper } from '@mui/material'
import { Table } from '@mui/material'
import { Box, Typography, styled } from '@mui/material'

const StyledTypo = styled(Typography)({
    color: '#9a9a9a',
    lineHeight: 1,
})

const TransactionContainer = styled(Box)(({ theme }) => ({
    padding: 20,
    boxShadow: theme.shadows[2],
    borderRadius: theme.shape.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}))

const Status = styled(Typography)(({ theme }) => ({
    padding: '5px 7px',
    borderRadius: theme.shape.borderRadius,
}))
const ImageContainer = styled(Box)({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
})

function createData(id, customer, email, date, amount, status) {
    return { id, customer, email, date, amount, status }
}

const rows = [
    createData(
        '#1234775',
        'John Smith',
        'john@gmail.com',
        '14 March',
        '$ 134.99',
        'Delivered'
    ),
    createData(
        '#2344775',
        'Alex Merchant',
        'alex@gmail.com',
        '12 - March',
        '$ 14.99',
        'Pending'
    ),
    createData(
        '#6734775',

        'Michael Keaton',
        'michael@gmail.com',
        '10 - March',
        '$ 75.99',
        'Shipped'
    ),
    createData(
        '#9874775',
        'Tom Cruise',
        'tom@gmail.com',
        '07 - March',
        '$ 12.99',
        'Cancelled'
    ),
    createData(
        '#8714775',
        'John Smith',
        'john@gmail.com',
        '05 - March',
        '$ 34.99',
        'Delivered'
    ),
]

const LatestOrders = () => {
    return (
        <TransactionContainer mt={3}>
            <StyledTypo variant="span" mb={3} sx={{ fontWeight: 500 }}>
                LatestTransactions
            </StyledTypo>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell align="left">Customer</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">See Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="left">
                                    {row.customer}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.amount}</TableCell>
                                <TableCell align="left">
                                    <Status
                                        variant="span"
                                        sx={{
                                            backgroundColor:
                                                row.status === 'Delivered'
                                                    ? '#DCF5E0'
                                                    : row.status === 'Pending'
                                                    ? '#FFE8D0'
                                                    : row.status === 'Shipped'
                                                    ? '#9af2fa'
                                                    : '#FDCCCC',
                                            color:
                                                row.status === 'Delivered'
                                                    ? '#006D0E'
                                                    : row.status === 'Pending'
                                                    ? '#985325'
                                                    : row.status === 'Shipped'
                                                    ? '#014f56'
                                                    : '#920000',
                                        }}
                                    >
                                        {row.status}
                                    </Status>
                                </TableCell>
                                <TableCell align="left">
                                    <Button size="small" variant="outlined">
                                        Details
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </TransactionContainer>
    )
}

export default LatestOrders
