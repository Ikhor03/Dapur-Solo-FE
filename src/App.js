import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart';
import Hero from "./pages/hero";
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
