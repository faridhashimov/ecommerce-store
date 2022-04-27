import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductModal } from './components'
import { Homepage, About, Faq, Login, Contact, Error404, Cart } from './pages'

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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
            {active && <ProductModal />}
        </>
    )
}

export default App
