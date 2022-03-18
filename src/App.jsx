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
} from './components';

function App() {
    return (
        <div>
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
        </div>
    );
}

export default App;
