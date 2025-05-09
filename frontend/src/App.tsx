
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import FragrancePage from './pages/FragrancePage/index';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/fragrance" element={<FragrancePage />} />
            </Routes>
        </Router>
    );
}

export default App;