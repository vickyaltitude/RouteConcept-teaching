import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import ContactUser from "./components/ContactUser";
import useTheme from "./components/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme(); // use the hook

  return (
    <div
      className={`parent-div ${
        isDark ? "parent-div-dark" : "parent-div-light"
      }`}
    >
      <div className="navbar">
        <div className="app-logo">Myapp</div>
        <div>
          <button onClick={toggleTheme}>{isDark ? "Light" : "Dark"}</button>
        </div>
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
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/contactuser" element={<ContactUser />} />
      </Routes>
    </div>
  );
}

export default App;
