import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/auth/AuthContext.js';
import React, { useEffect, useState } from 'react';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';
import Detail from'./pages/Detail.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductListCategory from './pages/ProductListCategory.jsx';
import ProductListCategoryDetail from './pages/ProductListCategoryDetail.jsx';
import Login from './component/member/Login.jsx';
import Signup from './component/member/Signup.jsx';
import Mypage from './component/member/Mypage.jsx';
import Carts from './pages/Carts.jsx';
import Order from './pages//Order.jsx';
import CheckoutPage from './component/payments/Checkout.jsx';
import SuccessPage from './component/payments/Success.jsx';
import FailPage from './component/payments/Fail.jsx';
import NewProduct from './pages/NewProduct.jsx';
import { CartProvider } from './context/CartContext.js';
import { SearchProvider } from './context/searchContext.js';

function App() {

  return (
    <div className="App">
      <CartProvider >
      <SearchProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<KurlyMain />} />
              <Route path="/main/category/:categoryName" element={<ProductListCategory />} />
              <Route path="/main/categories/:categoryCid" element={<ProductListCategoryDetail />} />
              <Route path="/main/subcategories/:categoryCid/:categorySid" element={<ProductListCategoryDetail />} />
              <Route path="/goods/list" element={<ProductList />} />
              <Route path="/goods/detail/:pid" element={<Detail />} />
              <Route path="/member/login" element={<Login />} />
              <Route path="/member/signup" element={<Signup />} />
              <Route path="/member/mypage" element={<Mypage />} />
              <Route path="/cart" element={<Carts />} />
              <Route path="/order" element={<Order />} />
              <Route path="/sandbox" element={<CheckoutPage />} />
              <Route path="/sandbox/success" element={<SuccessPage />} />
              <Route path="/sandbox/fail" element={<FailPage />} />
              <Route path="/goods/new" element={<NewProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      </SearchProvider>
      </CartProvider>
    </div>
  );
}

export default App;

