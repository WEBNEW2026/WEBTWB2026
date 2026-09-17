import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Home,
    Calendar,
    MessageSquare,
    Settings,
    Package,
    FileText,
    Image,
    Utensils,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: Home, label: 'Villas', path: '/villas' },
        { icon: Package, label: 'Packages', path: '/packages' },
        { icon: Calendar, label: 'Bookings', path: '/bookings' },
        { icon: MessageSquare, label: 'Reviews', path: '/reviews' },
        { icon: FileText, label: 'Blog', path: '/blog' },
        { icon: Image, label: 'Gallery', path: '/gallery' },
        { icon: Utensils, label: 'Menu', path: '/menu' },
        { icon: HelpCircle, label: 'FAQ', path: '/faq' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md flex flex-col fixed h-full z-10">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold text-primary-600">Bougenville</h1>
                    <p className="text-xs text-gray-500 mt-1">Content Management System</p>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-3">
                        {menuItems.map((item) => (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-primary-50 text-primary-600 font-medium'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`
                                    }
                                >
                                    <item.icon size={20} />
                                    <span>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                    <div className="mt-4 flex items-center gap-3 px-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            <img
                                src="https://ui-avatars.com/api/?name=Admin"
                                alt="Admin"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-900">Admin</p>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8 overflow-y-auto">
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
