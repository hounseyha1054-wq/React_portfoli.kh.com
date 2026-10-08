import { Routes, Route } from 'react-router-dom';
import Layoutpage from "../pages/layoutpage.jsx";
import Home from "../pages/home";
import About from "../pages/aboutme";
import Contact from "../pages/contact";
import Service from "../pages/service";
import Portfolio from "../pages/portfolio";

function Routerpage() {
  return (
    <Routes>
      <Route element={<Layoutpage />}>
        <Route index element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default Routerpage;
