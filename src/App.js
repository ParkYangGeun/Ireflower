import "./App.css";
import Topbanner from "./components/Topbanner";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./page/Home";
import Shop from "./page/Shop";
import Group from "./components/Group";
import Income from "./components/Income";
import Test from "./components/Test";
import Curious from "./page/Curious"
import Way from "./page/Way"
import Event from "./page/Event"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/group">
          <Route index element={<Group />}></Route>
          <Route path="/group/:groupId" element={<Test />}></Route>
        </Route>
        <Route path="/curious" element={<Curious />}></Route>
        <Route path="/curious/:Id" />
        <Route path="/way" element={<Way />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
