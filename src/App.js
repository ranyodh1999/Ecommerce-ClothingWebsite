import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ShopContextProvider } from "./Context/shopContext";
import { AuthProvider } from "./Context/AuthContext";
import { ThemeProvider } from "./ThemeContext";
import "./styles.css";  // 全局引入 styles.css

import Cart from "./Cart/Cart";
import Navigation from "./Components/Navigation";
import Home from "./Shopping/Home";
import Detail1 from "./detail-page/Detail1";
import Detail2 from "./detail-page/Detail2";
import Detail3 from "./detail-page/Detail3";
import Detail4 from "./detail-page/Detail4";
import Detail5 from "./detail-page/Detail5";
import Detail6 from "./detail-page/Detail6";
import Detail7 from "./detail-page/Detail7";
import Detail8 from "./detail-page/Detail8";
import Detail9 from "./detail-page/Detail9";
import Detail10 from "./detail-page/Detail10";
import Detail11 from "./detail-page/Detail11";
import Detail12 from "./detail-page/Detail12";
import Detail13 from "./detail-page/Detail13";
import Detail14 from "./detail-page/Detail14";
import Detail15 from "./detail-page/Detail15";
import Detail16 from "./detail-page/Detail16";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/signup" || location.pathname === "/login"; // Corrected path to '/login'

  return (
    <>
      {!hideHeaderFooter && <Navigation />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail-page1" element={<Detail1 />} />
        <Route path="/detail-page2" element={<Detail2 />} />
        <Route path="/detail-page3" element={<Detail3 />} />
        <Route path="/detail-page4" element={<Detail4 />} />
        <Route path="/detail-page5" element={<Detail5 />} />
        <Route path="/detail-page6" element={<Detail6 />} />
        <Route path="/detail-page7" element={<Detail7 />} />
        <Route path="/detail-page8" element={<Detail8 />} />
        <Route path="/detail-page9" element={<Detail9 />} />
        <Route path="/detail-page10" element={<Detail10 />} />
        <Route path="/detail-page11" element={<Detail11 />} />
        <Route path="/detail-page12" element={<Detail12 />} />
        <Route path="/detail-page13" element={<Detail13 />} />
        <Route path="/detail-page14" element={<Detail14 />} />
        <Route path="/detail-page15" element={<Detail15 />} />
        <Route path="/detail-page16" element={<Detail16 />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />{" "}
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <ThemeProvider>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default AppWrapper;
