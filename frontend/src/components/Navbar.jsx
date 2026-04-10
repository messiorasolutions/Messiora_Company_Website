import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/jobs' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-black tracking-tighter text-white group">
                            MESSI<span className="text-sky-400 group-hover:text-sky-300 transition-colors">ORA</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        {links.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-bold tracking-wide transition-colors hover:text-sky-400 ${location.pathname === link.path ? 'text-sky-400' : 'text-gray-300'}`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600"
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-sky-400 to-blue-600 text-white font-black px-6 py-2.5 rounded-full text-sm shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                            >
                                GET QUOTE
                            </motion.button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-sky-400 transition-colors p-2"
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2 text-center">
                            {links.map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-4 text-xl font-bold transition-colors ${location.pathname === link.path ? 'text-sky-400' : 'text-gray-300 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <button className="w-full bg-sky-500 text-white font-black py-4 rounded-xl">
                                        GET QUOTE
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
