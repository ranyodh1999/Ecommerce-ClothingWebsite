import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { ShopContextProvider } from "./Context/shopContext";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

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
import Checkout from "./Components/Checkout";

import Custom from "./Components/Custom";

function App() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/" || location.pathname === "/login";

  return (
    <>
      {!hideHeaderFooter && <Navigation />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/custom"
          element={
            <ProtectedRoute>
              <Custom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page1"
          element={
            <ProtectedRoute>
              <Detail1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page2"
          element={
            <ProtectedRoute>
              <Detail2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page3"
          element={
            <ProtectedRoute>
              <Detail3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page4"
          element={
            <ProtectedRoute>
              <Detail4 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page5"
          element={
            <ProtectedRoute>
              <Detail5 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page6"
          element={
            <ProtectedRoute>
              <Detail6 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page7"
          element={
            <ProtectedRoute>
              <Detail7 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page8"
          element={
            <ProtectedRoute>
              <Detail8 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page9"
          element={
            <ProtectedRoute>
              <Detail9 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page10"
          element={
            <ProtectedRoute>
              <Detail10 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page11"
          element={
            <ProtectedRoute>
              <Detail11 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page12"
          element={
            <ProtectedRoute>
              <Detail12 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/detail-page13"
          element={
            <ProtectedRoute>
              <Detail13 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page14"
          element={
            <ProtectedRoute>
              <Detail14 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page15"
          element={
            <ProtectedRoute>
              <Detail15 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail-page16"
          element={
            <ProtectedRoute>
              <Detail16 />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <Router>
          <App />
        </Router>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default AppWrapper;
