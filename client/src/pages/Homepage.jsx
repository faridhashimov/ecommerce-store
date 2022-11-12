import {
    Announcement,
    Navbar,
    Slider,
    BannerGroup,
    Feautured,
    NewArrivals,
    RecentArrivals,
    Trending,
    Support,
    Follow,
    Footer,
} from '../components'

const Homepage = () => {
    
    return (
        <>
            <Announcement />
            <Navbar />
            <Slider />
            <BannerGroup />
            <Feautured />
            <Trending />
            <NewArrivals />
            <RecentArrivals />
            <Support />
            <Follow />
            <Footer />
        </>
    )
}

export default Homepage
