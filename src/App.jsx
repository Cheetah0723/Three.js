import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import SideMenu from './component/SideMenu';
import Product from './pages/Product';
import TopPage from './pages/TopPage';
import LogoPanel from './component/LogoPanel';
import CopyRight from './component/CopyRight';

function App() {
  return (
    <BrowserRouter>
      <LogoPanel />
      <CopyRight />
      <SideMenu />
      <Routes>
        <Route path='/toppage' element={<TopPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' exact element={<TopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
