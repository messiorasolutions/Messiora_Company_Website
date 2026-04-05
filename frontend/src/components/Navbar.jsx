import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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
        <nav className="fixed w-full z-50 transition-all duration-300 bg-black-900/80 backdrop-blur-md border-b border-gold-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
                            <span className="text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent tracking-widest">MESSIORA</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-gold-400 ${location.pathname === link.path ? 'text-gold-500' : 'text-silver-300'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-gold-500 hover:bg-gold-600 text-black-900 font-bold px-6 py-2 rounded-full transition-transform hover:scale-105">
                            Get Quote
                        </button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-silver-300 hover:text-white"
                        >
                            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-black-800 border-b border-gold-600/20 absolute w-full"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-gold-500/10 text-gold-500' : 'text-silver-300 hover:bg-black-900 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-black-900 font-bold px-6 py-3 rounded-md transition-colors">
                                Get Quote
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
