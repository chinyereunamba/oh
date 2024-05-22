import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./pages/Profile"
import Nav from "./components/Nav"
import Footer from "./components/Footer"

function App() {
    return (
        <BrowserRouter>
            <main>
            <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
