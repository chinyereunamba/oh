import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ContactSection from "./components/Contact"

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <ContactSection />
            <Footer />
        </BrowserRouter>
    )
}

export default App
