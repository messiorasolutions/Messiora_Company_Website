import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiSmartphone, FiCpu } from 'react-icons/fi';

const Home = () => {
    const services = [
        { icon: <FiCode size={40} />, title: 'Web Development', desc: 'Custom, high-performance web applications built for scale.' },
        { icon: <FiSmartphone size={40} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences.' },
        { icon: <FiCpu size={40} />, title: 'AI Solutions', desc: 'Intelligent systems to automate and optimize processes.' }
    ];

    return (
        <div className="w-full bg-white text-gray-900">
            {/* Hero Section */}
            <section className="py-20 text-center bg-gray-100 border-b border-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                        Engineering Your Digital Future
                    </h1>
                    <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                        MESSIORA delivers premium IT solutions combining cutting-edge AI architecture, beautiful user interfaces, and robust systems to elevate your business globally.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                        <Link to="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow">
                            Get a Quote
                        </Link>
                        <Link to="/portfolio" className="px-6 py-3 bg-white border border-gray-400 hover:bg-gray-50 text-gray-800 font-semibold rounded shadow-sm">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-bold text-black mb-2">What We Do</h2>
                        <h3 className="text-xl text-gray-600">Premium Services</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((srv, idx) => (
                            <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
                                <div className="text-blue-600 mb-4">{srv.icon}</div>
                                <h4 className="text-xl font-bold text-black mb-2">{srv.title}</h4>
                                <p className="text-gray-600 mb-4">{srv.desc}</p>
                                <Link to="/services" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                                    Learn More <FiArrowRight className="ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-16 bg-gray-100 border-t border-gray-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="w-full h-[300px] bg-gray-300 flex justify-center items-center rounded">
                            <span className="text-gray-500 font-bold text-2xl">Company Image</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm font-bold text-blue-600 uppercase mb-2">Our Story</h2>
                        <h3 className="text-3xl font-bold text-black mb-4">Building The Future With Precision</h3>
                        <p className="text-gray-700 mb-6">
                            Founded by industry veterans, MESSIORA crafts high-fidelity applications with zero compromise. We merge elegant design aesthetics with uncompromising engineering to deliver products that redefine markets.
                        </p>
                        <div className="flex gap-8 mb-6">
                            <div>
                                <h4 className="text-2xl font-bold text-black">50+</h4>
                                <span className="text-gray-600 text-sm">Projects Delivered</span>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-black">99%</h4>
                                <span className="text-gray-600 text-sm">Client Satisfaction</span>
                            </div>
                        </div>
                        <Link to="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-semibold">
                            Discover Our Mission <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
