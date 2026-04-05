import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-black-900 border-t border-gold-600/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent tracking-widest mb-4 inline-block">MESSIORA</span>
                        <p className="text-silver-400 text-sm mb-6 leading-relaxed">
                            Empowering your digital future with innovative IT solutions, cutting-edge AI, and premium web architectures.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-silver-400 hover:text-gold-500 transition-colors"><FiTwitter size={20} /></a>
                            <a href="#" className="text-silver-400 hover:text-gold-500 transition-colors"><FiLinkedin size={20} /></a>
                            <a href="#" className="text-silver-400 hover:text-gold-500 transition-colors"><FiInstagram size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Services</h4>
                        <ul className="space-y-2 text-sm text-silver-400">
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">Mobile App Development</Link></li>
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">UI/UX Design</Link></li>
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">AI Solutions</Link></li>
                            <li><Link to="/services" className="hover:text-gold-500 transition-colors">Cloud / DevOps</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Company</h4>
                        <ul className="space-y-2 text-sm text-silver-400">
                            <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
                            <li><Link to="/portfolio" className="hover:text-gold-500 transition-colors">Portfolio</Link></li>
                            <li><Link to="/blog" className="hover:text-gold-500 transition-colors">Blog</Link></li>
                            <li><Link to="/jobs" className="hover:text-gold-500 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 tracking-wide uppercase text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm text-silver-400">
                            <li className="flex items-start">
                                <FiMapPin className="text-gold-500 mr-3 mt-1 flex-shrink-0" size={16} />
                                <span>123 Innovation Drive, Tech District, City 10002</span>
                            </li>
                            <li className="flex items-center">
                                <FiPhone className="text-gold-500 mr-3 flex-shrink-0" size={16} />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center">
                                <FiMail className="text-gold-500 mr-3 flex-shrink-0" size={16} />
                                <span>hello@messiora.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-silver-400/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-silver-400">
                    <p>&copy; {new Date().getFullYear()} Messiora. All rights reserved.</p>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
