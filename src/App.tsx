import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Main Application Component
import { ConfigProvider, App as AntApp } from "antd";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import AdminBlog from "./pages/AdminBlog";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import DashboardPosts from "./pages/DashboardPosts";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#0f3c3e',
          colorBgLayout: '#f8f6f2'
        }
      }}>
        <AntApp>
          <AuthProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route index element={<DashboardHome />} />
                  <Route path="posts" element={<DashboardPosts />} />
                </Route>
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/new" element={<AdminBlog />} />
                <Route path="/dashboard/posts/edit/:slug" element={<AdminBlog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
            </Router>
          </AuthProvider>
        </AntApp>
      </ConfigProvider>
    </HelmetProvider>
  );
}
