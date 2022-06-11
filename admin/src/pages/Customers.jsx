import { Typography, Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { UsersTable } from '../components'

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
})
const AddNew = styled(Link)({
    padding: '5px 10px',
    textTransform: 'none',
    textDecoration: 'none',
    borderRadius: '5px',
    border: '1px solid green',
    backgroundColor: 'transparent',
    color: 'green',
    '&:hover' : {
        backgroundColor: '#f7f7f7'
    }
})

const Customers = () => {
    return (
        <Box sx={{ padding: '30px' }}>
            <Header>
                <Typography
                    color={{ color: '#9a9a9a' }}
                    variant="h5"
                    fontWeight={500}
                >
                    Customers
                </Typography>
                <AddNew to="/users/new" variant="outlined">
                    Add New
                </AddNew>
            </Header>
            <UsersTable />
        </Box>
    )
}

export default Customers
