import { ArrowDownward } from '@mui/icons-material'
import { ArrowDropDown } from '@mui/icons-material'
import {
    NightsStay,
    Mail,
    Search,
    NotificationsActive,
} from '@mui/icons-material'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import { Button } from '@mui/material'

import { InputBase, Avatar, FormGroup } from '@mui/material'

import { Box, styled } from '@mui/material'
import { useState } from 'react'

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
        backgroundColor: '#eaeaea',
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
})

const SearchBox = styled(Box)({
    width: '60%',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
})
const StyledAvatar = styled(Avatar)({
    marginLeft: 2,
    border: '2px solid #d8d8d8',
    transition: 'all .2s ease-in',
    '&:hover': { border: '2px solid #3167eb', transition: 'all .2s ease-in' },
})
const ProfileContainer = styled(Box)({})

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <Box
            sx={{
                padding: '15px 30px ',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #d8d8d8',
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
                <ProfileContainer>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <StyledAvatar
                            alt="Remy Sharp"
                            src="https://minimaltoolkit.com/images/randomdata/male/80.jpg"
                        />
                        <ArrowDropDown />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </ProfileContainer>
            </RightContainer>
        </Box>
    )
}

export default Navbar
