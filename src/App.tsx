import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/Game">Game</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Game" element={<Game />} />
            </Routes>
        </Router>
    );
}

export default App;
