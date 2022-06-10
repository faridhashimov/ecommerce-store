import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './components'
import {
    Customers,
    Home,
    New,
    Page404,
    Products,
    SingleProduct,
    SingleUser,
} from './pages'
import {userInputs} from './data'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Main />} />
                    <Route path="users">
                        <Route index element={<Customers />} />
                        <Route path=":userId" element={<SingleUser />} />
                        <Route path="new" element={<New title={'Add New User'} data={userInputs}/>} />
                    </Route>
                    <Route path="products">
                        <Route index element={<Products />} />
                        <Route path=":productId" element={<SingleProduct />} />
                        <Route path="new" element={<New />} />
                    </Route>
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </Router>
    )
}

export default App
