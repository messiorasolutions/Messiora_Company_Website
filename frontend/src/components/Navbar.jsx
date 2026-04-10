import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white border-b border-gray-300 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-blue-600">
                            MESSIORA
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-6">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium hover:text-blue-600 px-2 py-1 ${location.pathname === link.path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                            Get Quote
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            Menu
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-50 border-t border-gray-200">
                    <div className="px-4 py-2 space-y-1">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md font-medium ${location.pathname === link.path ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-200'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
