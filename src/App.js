// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Shop from './pages/Shop';
import Collection from './pages/Collection';
import About from './pages/About';
import Detail from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="collection" element={<Collection />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;