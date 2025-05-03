import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import ContactUser from "./components/ContactUser";

function App() {
  return (
    <div className="parent-div">
      <div className="navbar">
        <div className="app-logo">Myapp</div>
        <div className="navigations">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/users">
          <Route index="/" element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
          <Route path="contactuser" element={<ContactUser />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
