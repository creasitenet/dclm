import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

