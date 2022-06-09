import { PersonOutline } from '@mui/icons-material'
import {
    Inventory,
    StoreRounded,
    Paid,
    AddBoxRounded,
    ShoppingCart,
    AccountCircle,
    BrandingWatermark,
    InsertChart,
    RateReviewSharp,
    Home,
} from '@mui/icons-material'
import { Typography } from '@mui/material'
import {
    Box,
    ListItemButton,
    ListSubheader,
    ListItemText,
    List,
} from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

const StyledListBtn = styled(ListItemButton)({
    color: '#7451f8',
    borderRadius: 5,
    marginBottom: 5,
    padding: '10px',
    '&:hover': {
        backgroundColor: '#EDE7FF',
    },
})
const StyledListItemText = styled(Typography)({
    color: '#9a9a9a',
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: 15,
})

const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    //    padding: '10px 100px 10px 0px'
})

const Leftbar = () => {
    return (
        <Box sx={{ flex: 2, borderRight: '1px solid #d8d8d8' }}>
            <Box sx={{ position: 'fixed', top: '0', width: '20%' }}>
                <Typography
                    variant="h6"
                    sx={{
                        color: '#7451f8',
                        fontSize: 20,
                        padding: '10px 20px',
                        marginBottom: '10px',
                    }}
                >
                    FRED Admin
                </Typography>
                <List
                    sx={{
                        width: '100%',
                        padding: '8px',
                    }}
                    component="nav"
                >
                    <StyledListBtn>
                        <Home />
                        <StyledListItemText>
                            <StyledLink to="/">Home</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <PersonOutline />
                        <StyledListItemText>
                            <StyledLink to="/users">Users</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <Inventory />
                        <StyledListItemText>
                            <StyledLink to="/products">Products</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <ShoppingCart />
                        <StyledListItemText>
                            <StyledLink to="/orders">Orders</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <StoreRounded />
                        <StyledListItemText>
                            <StyledLink to="/sellers">Sellers</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <AddBoxRounded />
                        <StyledListItemText>
                            <StyledLink to="/newproduct">
                                Add product
                            </StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <Paid />
                        <StyledListItemText>
                            <StyledLink to="/transactions">
                                Transactions
                            </StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <AccountCircle />
                        <StyledListItemText>
                            <StyledLink to="/account">Account</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <RateReviewSharp />
                        <StyledListItemText>
                            <StyledLink to="/reviews">Reviews</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <BrandingWatermark />
                        <StyledListItemText>
                            <StyledLink to="/brands">Brands</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                    <StyledListBtn>
                        <InsertChart />
                        <StyledListItemText>
                            <StyledLink to="/statistics">Statistics</StyledLink>
                        </StyledListItemText>
                    </StyledListBtn>
                </List>
            </Box>
        </Box>
    )
}

export default Leftbar
