import './App.css';
import Condition from './pages/Condition';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/condition" element={<Condition />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
