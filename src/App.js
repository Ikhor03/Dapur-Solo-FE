import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './pages/cart';
import Hero from "./pages/hero";
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Account from './pages/account';
import AddressForm from './pages/address';
import Checkout from './pages/checkout';
import Invoice from './pages/invoices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        <Route path='/address' element={<AddressForm />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/invoice/:id' element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
