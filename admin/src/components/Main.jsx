import { ShoppingBasket } from '@mui/icons-material'
import { LocalShipping } from '@mui/icons-material'
import { MonetizationOn } from '@mui/icons-material'
import { Stack } from '@mui/material'
import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

const WidgetContainer = styled(Box)(({ theme }) => ({
    padding: '20px',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
}))

const IconContainer = styled(Box)(({ theme }) => ({
    marginRight: 10,
    padding: 12,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
}))

const WidgetHeader = styled(Typography)({
    fontWeight: 500,
    mb: 1,
    fontSize: 16,
})

const Main = () => {
    return (
        <Box sx={{ padding: '30px' }}>
            <Typography variant="h3" mb={3} fontSize={28}>
                Dashboard
            </Typography>

            <Stack direction="row" spacing={3}>
                <WidgetContainer flex={1}>
                    <Box display={'flex'}>
                        <IconContainer sx={{ backgroundColor: '#D6E1FB' }}>
                            <MonetizationOn sx={{ color: '#3167EB' }} />
                        </IconContainer>
                        <Stack>
                            <WidgetHeader variant="h6">
                                Totals Sales
                            </WidgetHeader>
                        </Stack>
                    </Box>
                </WidgetContainer>
                <WidgetContainer flex={1}>
                    <Box display={'flex'}>
                        <IconContainer sx={{ backgroundColor: '#CCF0D1' }}>
                            <LocalShipping sx={{ color: '#00B517' }} />
                        </IconContainer>
                        <Stack>
                            <WidgetHeader variant="h6">
                                Totals Sales
                            </WidgetHeader>
                        </Stack>
                    </Box>
                </WidgetContainer>
                <WidgetContainer flex={1}>
                    <Box display={'flex'}>
                        <IconContainer sx={{ backgroundColor: '#FFE8D0' }}>
                            <ShoppingBasket sx={{ color: '#FD8A14' }} />
                        </IconContainer>
                        <Stack>
                            <WidgetHeader variant="h6">
                                Totals Sales
                            </WidgetHeader>
                        </Stack>
                    </Box>
                </WidgetContainer>
            </Stack>
        </Box>
    )
}

export default Main
