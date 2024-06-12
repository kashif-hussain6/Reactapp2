import "./App.css";
import "./index.css";
import About from "./pages/About";

import Home from "./pages/home";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Layout from "./pages/layout";
import Blogs from "./pages/Blogs";
import Nopage from "./pages/Nopage";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="Services" element={<Services />} />
    //     <Route path="About" element={<About />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="getstarted" element={<GetStarted />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="About" element={<About />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="GetStarted" element={<GetStarted />} />
          <Route path="Nopage" element={<Nopage />} />

          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
