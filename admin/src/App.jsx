import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './components'
import { Customers, Home, Page404 } from './pages'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/users" element={<Customers />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    )
}

export default App
