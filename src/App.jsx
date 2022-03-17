import Announcement from './components/Announcement';
import Categories from './components/Categories';
import Feautured from './components/Feautured';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Feautured />
        </div>
    );
}

export default App;
