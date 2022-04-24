import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Homepage, About, Faq, Login, Contact, Error404 } from './pages'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='*' element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
