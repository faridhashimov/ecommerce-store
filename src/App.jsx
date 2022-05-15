import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductModal } from './components'
import {
    Homepage,
    About,
    Faq,
    Login,
    Contact,
    Error404,
    Cart,
    Success,
    Profile,
    List,
    Orders,
    SingleOrder,
} from './pages'
import Productpage from './pages/Productpage'
import WishList from './pages/WishList'
import ScrollToTop from './components/ScrollToTop'
// import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
    const active = useSelector((state) => state.modal.active)

    return (
        <>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product/:id" element={<Productpage />} />
                        <Route path="/wishlist" element={<WishList />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/orders/:id" element={<SingleOrder />} />
                        <Route path="/success" element={<Success />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/list" element={<List />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
            {active && <ProductModal />}
        </>
    )
}

export default App
