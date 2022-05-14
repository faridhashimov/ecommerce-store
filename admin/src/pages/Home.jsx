import { Box } from '@mui/material'
import { Leftbar, Rightbar } from '../components'

const Home = () => {
  return (
    <Box sx={{display: 'flex'}}>
        <Leftbar/>
        <Rightbar/>
    </Box>
  )
}

export default Home