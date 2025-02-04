import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from'./pages/Layout.jsx';
import KurlyMain from'./pages/KurlyMain.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route index element={<KurlyMain />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
