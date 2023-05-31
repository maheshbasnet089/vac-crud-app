import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import About from "./pages/about/About";
import Blogs from "./pages/blogs/Blogs";
import Singleblog from "./pages/blogs/Single-blog";
import ResponsiveDrawer from "./pages/dashboard/layout/Layout";
import ListBlog from "./pages/dashboard/blog/ListBlog";
import AddBlog from "./pages/dashboard/blog/AddBlog";
import Login from "./pages/auth/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* login page */}
          <Route path="/login" element={<Login />} />
          {/* user page */}
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/single-blog/:id" element={<Singleblog />} />
          </Route>
          {/* admin dashboard */}
          <Route path="/admin/" element={<ResponsiveDrawer />}>
            <Route path="list" element={<ListBlog />} />
            <Route path="add" element={<AddBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
