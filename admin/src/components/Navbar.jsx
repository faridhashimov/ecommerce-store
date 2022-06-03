import {
    NightsStay,
    Mail,
    Search,
    NotificationsActive,
} from '@mui/icons-material'

import { InputBase, Avatar, FormGroup } from '@mui/material'

import { Box, styled } from '@mui/material'

const RightContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '20%',
})

const IconContainer = styled('div')(({ theme }) => ({
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    color: '#adb5bd',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#adb5bd',
        color: '#3167eb',
    },
}))

const SearchIconContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '10%',
    borderRadius: 'none',
    cursor: 'pointer',
    borderLeft: '1px solid #ccc',
    border: '1px solid #fff',
    '&:hover': {
        border: '1px solid #ccc',
    },
})

const SearchBox = styled(Box)({
    width: '60%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
})

const Navbar = () => {
    return (
        <Box
            sx={{
                padding: '15px 30px ',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <SearchBox>
                <InputBase
                    sx={{
                        width: '90%',
                        height: '100%',
                        padding: '0px 10px',
                    }}
                    placeholder="search..."
                />
                <SearchIconContainer>
                    <Search />
                </SearchIconContainer>
            </SearchBox>

            <RightContainer>
                <IconContainer>
                    <NightsStay />
                </IconContainer>

                <IconContainer>
                    <NotificationsActive />
                </IconContainer>
                <IconContainer>
                    <Mail />
                </IconContainer>
                <Avatar
                    sx={{ marginLeft: 2 }}
                    alt="Remy Sharp"
                    src="https://minimaltoolkit.com/images/randomdata/male/80.jpg"
                />
            </RightContainer>
        </Box>
    )
}

export default Navbar
