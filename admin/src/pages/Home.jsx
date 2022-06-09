import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Leftbar, Main, Navbar, Rightbar } from '../components'

const Home = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <Leftbar/>
        <Box sx={{ flex: 8 }}>
            <Navbar />
            <Outlet/>
        </Box>
        {/* <Rightbar/> */}
    </Box>
  )
}

export default Home