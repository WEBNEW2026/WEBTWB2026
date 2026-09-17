import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import VillasPage from './pages/VillasPage';
import BookingsPage from './pages/BookingsPage';
import ReviewsPage from './pages/ReviewsPage';
import SettingsPage from './pages/SettingsPage';
import PackagesPage from './pages/PackagesPage';
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import MenuPage from './pages/MenuPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import { checkAndPopulateData } from './utils/dataSeeder';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import './index.css';

function App() {
    // Auto-populate initial data on first load
    useEffect(() => {
        checkAndPopulateData();
    }, []);

    return (
        <AuthProvider>
            <ToastProvider>
                <Router>
                    <Routes>
                        {/* Public Route */}
                        <Route path="/login" element={<LoginPage />} />

                        {/* Protected Routes */}
                        <Route
                            path="/*"
                            element={
                                <ProtectedRoute>
                                    <Sidebar>
                                        <Routes>
                                            <Route path="/" element={<Dashboard />} />
                                            <Route path="/villas" element={<VillasPage />} />
                                            <Route path="/bookings" element={<BookingsPage />} />
                                            <Route path="/reviews" element={<ReviewsPage />} />
                                            <Route path="/settings" element={<SettingsPage />} />
                                            <Route path="/packages" element={<PackagesPage />} />
                                            <Route path="/blog" element={<BlogPage />} />
                                            <Route path="/gallery" element={<GalleryPage />} />
                                            <Route path="/menu" element={<MenuPage />} />
                                            <Route path="/faq" element={<FAQPage />} />
                                        </Routes>
                                    </Sidebar>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </ToastProvider>
        </AuthProvider>
    );
}

export default App;
