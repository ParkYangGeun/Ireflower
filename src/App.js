import './App.css';
import Topbanner from './components/Topbanner';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom'
import Header from './components/Header';
import Home from './page/Home'
import Shop from './page/Shop'
import Watch from './page/Watch'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
      </Routes>
        

    </Router>
  )
}

export default App;
