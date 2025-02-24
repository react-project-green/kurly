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
import Carts from './pages/Carts.jsx';
import Order from './component/cart/Order.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { PidProvider } from './context/ProductContext.js';
import { CartProvider } from './context/cartContext.js';

function App() {

  const cartInfo = (data) => {
    console.log('cart data',data);
  };

  return (
    <div className="App">
      <CartProvider >
      <PidProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<KurlyMain />} />
                <Route path="/main/category/:categoryName" element={<ProductListCategory />} />
                <Route path="/goods/list" element={<ProductList />} />
                <Route path="/goods/detail/:pid" element={<Detail cartInfo={cartInfo} />} />
                <Route path="/member/login" element={<Login />} />
                <Route path="/member/signup" element={<Signup />} />
                <Route path="/cart" element={<Carts />} />
                <Route path="/order" element={<Order />} />
                <Route path="/goods/new" element={<NewProduct />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PidProvider>
      </CartProvider>
    </div>
  );
}

export default App;

