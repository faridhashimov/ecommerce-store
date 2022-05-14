import { Search } from '@mui/icons-material'
import { NightsStay, NotificationsActive } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { ListItemButton, Input, Box } from '@mui/material'
import { styled } from '@mui/system'

const Navbar = () => {
    return (
        <Box
            sx={{
                padding: '10px 30px ',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box
                component="div"
                sx={{ width: '30%', display: 'flex', alignItems: 'center' }}
            >
                <TextField type="text" />
                <Box component="div">
                    <Search />
                </Box>
            </Box>

            <Box component="div" sx={{ display: 'flex' }}>
                <Box component="div" sx={{padding: '10px'}}>
                    <NightsStay />
                </Box>
                <Box component="div" sx={{padding: '10px'}}>
                    <NotificationsActive />
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar
