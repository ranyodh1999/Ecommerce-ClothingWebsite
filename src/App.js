import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Detail1 from "./Components/detail-page/Detail1";
import Detail2 from "./Components/detail-page/Detail2";
import Detail3 from "./Components/detail-page/Detail3";
import Detail4 from "./Components/detail-page/Detail4";
import Detail5 from "./Components/detail-page/Detail5";
import Detail6 from "./Components/detail-page/Detail6";
import Detail7 from "./Components/detail-page/Detail7";
import Detail8 from "./Components/detail-page/Detail8";
import Detail9 from "./Components/detail-page/Detail9";
import Detail10 from "./Components/detail-page/Detail10";
import Detail11 from "./Components/detail-page/Detail11";
import Detail12 from "./Components/detail-page/Detail12";
import Detail13 from "./Components/detail-page/Detail13";
import Detail14 from "./Components/detail-page/Detail14";
import Detail15 from "./Components/detail-page/Detail15";
import Detail16 from "./Components/detail-page/Detail16";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
