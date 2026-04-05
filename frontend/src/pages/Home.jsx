import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCode, FiSmartphone, FiLayout, FiCpu, FiCloud } from 'react-icons/fi';

const Home = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const services = [
        { icon: <FiCode size={40} />, title: 'Web Development', desc: 'Custom, high-performance web applications built for scale.' },
        { icon: <FiSmartphone size={40} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences.' },
        { icon: <FiCpu size={40} />, title: 'AI Solutions', desc: 'Intelligent systems to automate and optimize processes.' }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black-900 border-b border-gold-600/20 mix-blend-multiply"></div>
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
                    >
                        Engineering Your <br />
                        <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">Digital Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-6 text-xl text-silver-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        MESSIORA delivers premium IT solutions combining cutting-edge AI architecture, beautiful user interfaces, and robust systems to elevate your business globally.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-600 text-black-900 font-bold rounded-full transition-transform hover:scale-105 flex items-center justify-center">
                            Get a Quote <FiArrowRight className="ml-2" />
                        </Link>
                        <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gold-500/50 hover:bg-gold-500/10 text-gold-500 font-bold rounded-full transition-colors flex items-center justify-center">
                            View Portfolio
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-black-800 border-b border-gold-600/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">What We Do</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white">Premium Services</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((srv, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} transition={{ delay: idx * 0.2 }}
                                className="p-8 bg-black-900 rounded-2xl border border-gold-500/10 hover:border-gold-500/40 transition-colors group cursor-pointer"
                            >
                                <div className="text-gold-500 mb-6 group-hover:scale-110 transition-transform duration-300">{srv.icon}</div>
                                <h4 className="text-2xl font-bold text-white mb-4">{srv.title}</h4>
                                <p className="text-silver-400 leading-relaxed mb-6">{srv.desc}</p>
                                <Link to="/services" className="text-gold-500 font-medium tracking-wide flex items-center group-hover:text-gold-400">
                                    Learn More <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="w-full h-[500px] bg-black-800 rounded-3xl border border-gold-500/20 relative overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent z-10 group-hover:opacity-50 transition-opacity duration-500"></div>
                            {/* In real case, an image would map here */}
                            <span className="text-gold-500 tracking-widest uppercase opacity-20 font-bold text-4xl">INNOVATION</span>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-sm font-bold tracking-widest text-gold-500 uppercase mb-3">Our Story</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Building The Future<br />With Precision</h3>
                        <p className="text-silver-300 text-lg leading-relaxed mb-8">
                            Founded by industry veterans, MESSIORA crafts high-fidelity applications with zero compromise. We merge elegant design aesthetics with uncompromising engineering to deliver products that redefine markets.
                        </p>
                        <div className="flex space-x-12 mb-8 border-l-2 border-gold-500 pl-6">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                                <span className="text-silver-400 text-sm">Projects Delivered</span>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">99%</h4>
                                <span className="text-silver-400 text-sm">Client Satisfaction</span>
                            </div>
                        </div>
                        <Link to="/about" className="inline-flex items-center text-gold-500 font-bold border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors">
                            Discover Our Mission <FiArrowRight className="ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
