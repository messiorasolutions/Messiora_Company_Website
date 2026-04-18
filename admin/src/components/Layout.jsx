import React from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiHome, FiSettings, FiImage, FiFileText, FiMessageSquare, FiBriefcase, FiLogOut } from 'react-icons/fi';

const Layout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { path: '/', name: 'Dashboard', icon: <FiHome /> },
        { path: '/services', name: 'Services', icon: <FiSettings /> },
        { path: '/portfolio', name: 'Portfolio', icon: <FiImage /> },
        { path: '/blog', name: 'Blog', icon: <FiFileText /> },
        { path: '/messages', name: 'Messages', icon: <FiMessageSquare /> },
        { path: '/jobs', name: 'Careers', icon: <FiBriefcase /> },
    ];

    return (
        <div className="flex h-screen bg-black-900 flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-black-800 border-r border-gold-600/20 flex flex-col hidden md:flex">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-gold-500 tracking-wider">MESSIORA</h1>
                    <p className="text-silver-400 text-xs mt-1 uppercase">Admin Panel</p>
                </div>
                <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path
                                    ? 'bg-gold-500/10 text-gold-500 border border-gold-500/30'
                                    : 'text-silver-300 hover:bg-black-900 hover:text-white'
                                }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </nav>
                <div className="p-4 border-t border-gold-600/20">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 text-silver-300 hover:text-red-400 w-full px-4 py-3 rounded-lg transition-colors hover:bg-red-400/10"
                    >
                        <FiLogOut />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-black-900 p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
