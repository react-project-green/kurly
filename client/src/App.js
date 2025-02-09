import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';
import Detail from'./pages/Detail.jsx';
import ProductList from './pages/ProductList.jsx';

function App() {
  const [cartData, setCartData] = useState({});
  //장바구니 정보 가져오기
  const cartInfo = (data) => {
    setCartData(data);
  }  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<KurlyMain />} />
              <Route path="/goods/list" element={<ProductList />} />
              <Route path="/goods/detail/:pid" element={<Detail cartInfo={cartInfo} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
