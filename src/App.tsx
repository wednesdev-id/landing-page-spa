import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import AdminBlog from "./pages/AdminBlog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <HelmetProvider>
      <ConfigProvider theme={{ token: { colorPrimary: '#2563eb' } }}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/new" element={<AdminBlog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
          </Router>
        </AuthProvider>
      </ConfigProvider>
    </HelmetProvider>
  );
}
