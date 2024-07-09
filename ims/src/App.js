import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
// import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './navbars/Navbar';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={Home} />

                        <Route path="/login" element={<Login/>} />
                        <Route path="/another-link" element={() => <div><h2>About Us</h2></div>} />
                        <Route path="/link2" element={() => <div><h2>Contact Us</h2></div>} />

                        <Route path="/register" element={<Register/>} />

                        <Route path="/institute-management" element={() => <div><h2>Institute Management System</h2></div>} />
                        <Route path="/project-management" element={() => <div><h2>Project Management System</h2></div>} />
                    </Routes>
                    <Home />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
