import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';
import Detail from'./pages/Detail.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductListCategory from './pages/ProductListCategory.jsx';
import Login from './component/member/Login.jsx';
import Signup from './component/member/Signup.jsx';
import CartLayout from './component/cart/CartLayout.jsx';
import Order from './component/cart/Order.jsx';
import NewProduct from './pages/NewProduct.jsx';
import {PidProvider} from './context/ProductContext.js';

function App() {
  const [ productPid, setProductPid ] = useState('');
  const [ cartCount, setCartCount ] = useState(0);

  const cartInfo = (data) => {
    console.log('cart data',data);
    setProductPid(data.pid);
    setCartCount(cartCount + data.addCount)   
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout cartCount={cartCount} productPid={productPid}/>}>
              <Route index element={<KurlyMain />} />
              <Route path="/main/category/:categoryName" element={<ProductListCategory />} />
              <Route path="/goods/list" element={<ProductList />} />
              <Route path="/goods/detail/:pid" element={<Detail cartInfo={cartInfo} />} />
              <Route path="/member/login" element={<Login />} />
              <Route path="/member/signup" element={<Signup />} />
              <Route path="/cart" element={<CartLayout />} />
              <Route path="/order" element={<Order />} />
              <Route path="/goods/new" element={<NewProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
=======
      <PidProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout cartCount={cartCount} productPid={productPid}/>}>
                <Route index element={<KurlyMain />} />
                <Route path="/goods/list" element={<ProductList />} />
                <Route path="/goods/detail/:pid" element={<Detail cartInfo={cartInfo} />} />
                <Route path="/member/login" element={<Login />} />
                <Route path="/member/signup" element={<Signup />} />
                <Route path="/cart" element={<CartLayout />} />
                <Route path="/order" element={<Order />} />
                <Route path="/goods/new" element={<NewProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PidProvider>
>>>>>>> 79634aed0b33ee22b71e80e5a238c312a7bbc4f9
    </div>
  );
}

export default App;

