import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Singleblog from "./pages/blogs/Single-blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/single-blog/:id" element={<Singleblog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
