import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';
import Detail from'./pages/Detail.jsx';
import ProductList from './pages/ProductList.jsx';
import Login from './component/member/Login.jsx';
import Signup from './component/member/Signup.jsx';
import CartLayout from './component/cart/CartLayout.jsx';
import Order from './component/cart/Order.jsx';

function App() {
  const cartInfo = (data) => {
    console.log('cart data',data);    
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<KurlyMain />} />
              <Route path="/goods/list" element={<ProductList />} />
              <Route path="/goods/detail/:pid" element={<Detail cartInfo={cartInfo} />} />
              <Route path="/member/login" element={<Login />} />
              <Route path="/member/signup" element={<Signup />} />
              <Route path="/cart" element={<CartLayout />} />
              <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;