import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-gray-300 py-10 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-blue-600 mb-3">MESSIORA</h3>
                        <p className="text-gray-600 text-sm">
                            Empowering your digital future with basic and normal IT solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-gray-800">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/services" className="hover:text-blue-600">Web Development</Link></li>
                            <li><Link to="/services" className="hover:text-blue-600">Mobile App Development</Link></li>
                            <li><Link to="/services" className="hover:text-blue-600">UI/UX Design</Link></li>
                            <li><Link to="/services" className="hover:text-blue-600">AI Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-gray-800">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link to="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
                            <li><Link to="/jobs" className="hover:text-blue-600">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-3 text-gray-800">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>123 Innovation Drive</li>
                            <li>+1 (555) 123-4567</li>
                            <li>hello@messiora.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Messiora. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
