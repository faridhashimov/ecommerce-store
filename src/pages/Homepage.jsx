import {
    Announcement,
    Navbar,
    Categories,
    Slider,
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
            <Categories />
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
