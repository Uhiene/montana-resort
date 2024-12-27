import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Rooms from "./pages/Rooms";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  );
}
