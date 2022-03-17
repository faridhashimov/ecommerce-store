import Announcement from './components/Announcement';
import Categories from './components/Categories';
import Feautured from './components/Feautured';
import Navbar from './components/Navbar';
import NewArrivals from './components/NewArrivals';
import Slider from './components/Slider';
import Trending from './components/Trending';

function App() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Feautured />
            <Trending/>
            <NewArrivals/>
        </div>
    );
}

export default App;
