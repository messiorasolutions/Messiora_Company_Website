import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="text-3xl font-black tracking-tighter text-white group">
                            MESSI<span className="text-sky-400 group-hover:text-sky-300 transition-colors">ORA</span>
                        </Link>
                        <p className="text-gray-400 text-base leading-relaxed">
                            Pioneering the next generation of digital infrastructure. We build software that doesn't just work—it redefines possibilities.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                                <FiTwitter size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                                <FiLinkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-gray-400 hover:bg-sky-500 hover:text-white transition-all">
                                <FiGithub size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/services" className="hover:text-sky-400 transition-colors">Web Systems</Link></li>
                            <li><Link to="/services" className="hover:text-sky-400 transition-colors">Mobile Platforms</Link></li>
                            <li><Link to="/services" className="hover:text-sky-400 transition-colors">AI Architecture</Link></li>
                            <li><Link to="/services" className="hover:text-sky-400 transition-colors">Cloud Transformation</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-sky-400 transition-colors">About Story</Link></li>
                            <li><Link to="/portfolio" className="hover:text-sky-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Tech Blog</Link></li>
                            <li><Link to="/jobs" className="hover:text-sky-400 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-widest">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiMapPin className="text-sky-500 flex-shrink-0" />
                                <span>123 Innovation Drive, Silicon Plains</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiPhone className="text-sky-500 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <FiMail className="text-sky-500 flex-shrink-0" />
                                <span>hello@messiora.io</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} MESSIORA GLOBAL. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
