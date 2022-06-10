import { Avatar, Box, Stack, styled, Typography } from '@mui/material'
import { Chart, LatestTransactions } from '../components'

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
})

const UserInfoContainer = styled(Container)(({ theme }) => ({
    padding: 20,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    position: 'relative',
    overflow: 'hidden',
}))

const StyledTypo = styled(Typography)({
    color: '#9a9a9a',
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: 10,
    lineHeight: 1,
})

const UserInfoSpan = styled(StyledTypo)({
    fontSize: '16px',
    color: '#9a9a9a',
    fontWeight: 400,
    margin: '10px 0px 5px',
    span: {
        fontWeight: 600,
    },
})

const Edit = styled('div')(({ theme }) => ({
    backgroundColor: '#DDE0F0',
    position: 'absolute',
    color: '#A5A2E2',
    padding: '4px 7px',
    fontSize: '12px',
    cursor: 'pointer',
    fontWeight: 500,
    borderBottomLeftRadius: theme.shape.borderRadius,
    top: 0,
    right: 0,
    '&:hover': { backgroundColor: '#e0e4f9' },
}))

const SingleUser = () => {
    return (
        <Container p={4}>
            <Stack direction="row" spacing={3}>
                <UserInfoContainer flex={1}>
                    <Edit>Edit</Edit>
                    <StyledTypo variant="h2">Information</StyledTypo>
                    <Box sx={{ display: 'flex' }} mt={2}>
                        <Avatar
                            sx={{ width: 120, height: 120 }}
                            src="https://minimaltoolkit.com/images/randomdata/female/49.jpg"
                            alt="avatar"
                        />
                        <Container ml={3}>
                            <StyledTypo variant="h3" sx={{ fontSize: '32px' }}>
                                Jane Doe
                            </StyledTypo>
                            <UserInfoSpan variant="p">
                                <span>Email:</span> janedoe@gmail.com
                            </UserInfoSpan>
                            <UserInfoSpan variant="p">
                                <span>Phone:</span> +1 729 181 229
                            </UserInfoSpan>
                            <UserInfoSpan variant="p">
                                <span>Adress:</span> Elton St. 234 Garden Yd.
                                New York
                            </UserInfoSpan>
                            <UserInfoSpan variant="p">
                                <span>Country:</span> USA
                            </UserInfoSpan>
                        </Container>
                    </Box>
                </UserInfoContainer>
                <UserInfoContainer flex={1}>
                    <StyledTypo variant="h2">
                        Last 6 Months (spending)
                    </StyledTypo>
                    <Chart />
                </UserInfoContainer>
            </Stack>
            <Box>
                <LatestTransactions />
            </Box>
        </Container>
    )
}

export default SingleUser
