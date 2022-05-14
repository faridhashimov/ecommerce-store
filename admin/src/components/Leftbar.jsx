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
import { theme } from '../theme.js'

const StyledListBtn = styled(ListItemButton)({
    color: '#ADB5BD',
    borderRadius: 5,
    marginBottom: 5,
    padding: '10px',
    '&:hover': {
        backgroundColor: '#ebedee',
    },
})
const StyledListItemText = styled(Typography)({
    color: '#29335D',
    fontSize: '16px',
    fontWeight: 700,
    marginLeft: 15,
})

const Leftbar = () => {
    return (
        <Box sx={{ flex: 2 }}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    padding: '8px',
                }}
                component="nav"
                subheader={
                    <ListSubheader component="div" sx={{ fontSize: 20 }}>
                        FRED Admin
                    </ListSubheader>
                }
            >
                <StyledListBtn>
                    <Home />
                    <StyledListItemText>Home</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <Inventory />
                    <StyledListItemText>Products</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <ShoppingCart />
                    <StyledListItemText>Orders</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <StoreRounded />
                    <StyledListItemText>Sellers</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <AddBoxRounded />

                    <StyledListItemText>Add product</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <Paid />

                    <StyledListItemText>Transactions</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <AccountCircle />

                    <StyledListItemText>Account</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <RateReviewSharp />

                    <StyledListItemText>Reviews</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <BrandingWatermark />

                    <StyledListItemText>Brands</StyledListItemText>
                </StyledListBtn>
                <StyledListBtn>
                    <InsertChart />

                    <StyledListItemText>Statistics</StyledListItemText>
                </StyledListBtn>
            </List>
        </Box>
    )
}

export default Leftbar
