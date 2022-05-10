import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductModal } from './components'
import { Homepage, About, Faq, Login, Contact, Error404, Cart, Success, Profile, List } from './pages'
import Productpage from './pages/Productpage'
import WishList from './pages/WishList'

function App() {
    const active = useSelector((state) => state.modal.active)

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<Productpage />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/list" element={<List />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
            {active && <ProductModal />}
        </>
    )
}

export default App
