import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';
import Detail from'./pages/Detail.jsx';
import ProductList from './pages/ProductList.jsx';
import Login from './component/member/Login.jsx';
import Signup from './component/member/Signup.jsx';

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
              <Route path="/memeber/login" element={<Login />} />
              <Route path="/memeber/ㄴignup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;