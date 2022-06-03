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

const StyledListBtn = styled(ListItemButton)({
    color: '#7451f8',
    borderRadius: 5,
    marginBottom: 5,
    padding: '10px',
    '&:hover': {
        backgroundColor: '#ebedee',
    },
})
const StyledListItemText = styled(Typography)({
    color: '#9a9a9a',
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: 15,
})

const Leftbar = () => {
    return (
        <Box sx={{ flex: 2, borderRight: '1px solid #d8d8d8' }}>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    padding: '8px',
                }}
                component="nav"
                subheader={
                    <ListSubheader
                        component="div"
                        sx={{
                            color: '#7451f8',
                            fontSize: 20,
                            padding: '5px 8px',
                            marginBottom: '10px',
                        }}
                    >
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
