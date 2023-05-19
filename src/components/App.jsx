import '../css/style.css'
import Sidebar from './sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CAccount from './pages/CreateAccount';
import Login from './pages/login';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import MyAccount from './pages/MyAccount';

export default function App() {

    return (
        <BrowserRouter>
          <Sidebar >
          <Routes>
            <Route path='../createaccount' element={<CAccount/>}></Route>
            <Route path='../myaccount' element={<MyAccount/>}></Route>
            <Route path='../login' element={<Login/>}></Route>
            </Routes>
            <Routes>
            <Route path='../productpage' element={<ProductPage/>}></Route>
            <Route path='../cart' element={<Cart/>}></Route>
          </Routes>
          </Sidebar>
        </BrowserRouter>
    );
}
