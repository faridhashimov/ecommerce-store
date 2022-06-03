import { Group } from '@mui/icons-material'
import {
    MonetizationOn,
    LocalShipping,
    ShoppingBasket,
} from '@mui/icons-material'
import { Stack, Typography, styled, Box } from '@mui/material'

const WidgetContainer = styled(Box)(({ theme }) => ({
    padding: 20,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
}))

const IconContainer = styled(Box)(({ theme }) => ({
    marginRight: 15,
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
}))

const WidgetHeader = styled(Typography)({
    fontWeight: 500,
    marginBottom: 10,
    lineHeight: 1,
    fontSize: 16,
    color: '#9a9a9a',
})

const Widgets = () => {
    return (
        <Stack direction="row" spacing={3}>
            <WidgetContainer flex={1}>
                <Box display={'flex'}>
                    <IconContainer sx={{ backgroundColor: '#E9967A' }}>
                        <Group sx={{ color: '#E32636' }} />
                    </IconContainer>
                    <Stack>
                        <WidgetHeader variant="h6">Total Users</WidgetHeader>
                        <Typography variant="p">2</Typography>
                    </Stack>
                </Box>
            </WidgetContainer>
            <WidgetContainer flex={1}>
                <Box display={'flex'}>
                    <IconContainer sx={{ backgroundColor: '#D6E1FB' }}>
                        <MonetizationOn sx={{ color: '#3167EB' }} />
                    </IconContainer>
                    <Stack>
                        <WidgetHeader variant="h6">Total Sales</WidgetHeader>
                        <Typography variant="p">$19,626,058.20</Typography>
                    </Stack>
                </Box>
            </WidgetContainer>
            <WidgetContainer flex={1}>
                <Box display={'flex'}>
                    <IconContainer sx={{ backgroundColor: '#CCF0D1' }}>
                        <LocalShipping sx={{ color: '#00B517' }} />
                    </IconContainer>
                    <Stack>
                        <WidgetHeader variant="h6">Total Orders</WidgetHeader>
                        <Typography variant="p">86473</Typography>
                    </Stack>
                </Box>
            </WidgetContainer>
            <WidgetContainer flex={1}>
                <Box display={'flex'}>
                    <IconContainer sx={{ backgroundColor: '#FFE8D0' }}>
                        <ShoppingBasket sx={{ color: '#FD8A14' }} />
                    </IconContainer>
                    <Stack>
                        <WidgetHeader variant="h6">Total Products</WidgetHeader>
                        <Typography variant="p">478</Typography>
                    </Stack>
                </Box>
            </WidgetContainer>
        </Stack>
    )
}

export default Widgets
