import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiSmartphone, FiCpu, FiGlobe, FiDatabase, FiCloud } from 'react-icons/fi';
import mainVideo from '../assets/main.mp4';
import mainImage from '../assets/main.jpg';

const Home = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const services = [
        { icon: <FiCode size={36} />, title: 'Web Development', desc: 'Custom, high-performance web applications built for scale and unmatched user experience.' },
        { icon: <FiSmartphone size={36} />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences that engage and retain users natively.' },
        { icon: <FiCpu size={36} />, title: 'AI Solutions', desc: 'Intelligent systems to automate workflows and optimize your business processes.' },
        { icon: <FiGlobe size={36} />, title: 'Digital Transformation', desc: 'Modernizing legacy architectures for the dynamic, highly-connected world.' },
        { icon: <FiDatabase size={36} />, title: 'Big Data', desc: 'Deriving actionable business intelligence from massive enterprise data pools.' },
        { icon: <FiCloud size={36} />, title: 'Cloud Architecture', desc: 'Scalable, secure, and globally available cloud infrastructure design.' }
    ];

    return (
        <div className="w-full bg-neutral-900 text-white min-h-screen">
            {/* Hero Section with Video Background */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40"
                    >
                        {/* A stunning abstract technology video - opting for something blue-ish/dark */}
                        <source src={mainVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Gradient Overlay for better readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white drop-shadow-2xl uppercase">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                                Engineering
                            </span> <br /> Your Digital Future
                        </h1>
                        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light">
                            MESSIORA delivers premium IT solutions combining cutting-edge AI architecture, beautiful user interfaces, and robust systems to elevate your business globally.
                        </p>
                        <div className="flex justify-center flex-wrap gap-6">
                            <Link to="/contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all duration-300"
                                >
                                    Get Started
                                </motion.button>
                            </Link>
                            <Link to="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2.5 bg-transparent border border-gray-400 hover:border-sky-500 text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-colors duration-300"
                                >
                                    View Our Work
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What We Do</h2>
                        <h3 className="text-xl text-sky-400 tracking-wide uppercase font-semibold">Premium Capabilities</h3>
                        <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((srv, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-neutral-800/50 backdrop-blur-md border border-neutral-700/50 rounded-2xl shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group"
                            >
                                <div className="text-sky-500 mb-6 bg-neutral-900 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                    {srv.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{srv.title}</h4>
                                <p className="text-gray-400 mb-6 leading-relaxed">{srv.desc}</p>
                                <Link to="/services" className="text-sky-500 hover:text-sky-400 font-semibold inline-flex items-center group/link">
                                    Learn More <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-16 bg-neutral-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-800">
                                <img src={mainImage} alt="Technology Integration" className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-white font-bold text-2xl tracking-tight">Pioneering Excellence</h3>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <h2 className="text-[11px] font-black text-sky-500 tracking-[0.2em] uppercase mb-3">Our Story</h2>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-5 leading-tight uppercase">Building The Future <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">With Precision</span></h3>
                            <p className="text-gray-400 text-sm mb-7 leading-relaxed font-light max-w-lg">
                                Founded by industry veterans, MESSIORA crafts high-fidelity applications with zero compromise. We merge elegant design aesthetics with uncompromising engineering to deliver products that redefine markets.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-800 border-l-4 border-l-sky-500 shadow-lg">
                                    <h4 className="text-2xl font-black text-white mb-0.5">50+</h4>
                                    <span className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">Projects Delivered</span>
                                </div>
                                <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-800 border-l-4 border-l-blue-600 shadow-lg">
                                    <h4 className="text-2xl font-black text-white mb-0.5">99%</h4>
                                    <span className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">Client Satisfaction</span>
                                </div>
                            </div>

                            <Link to="/about">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center text-white bg-neutral-800 hover:bg-neutral-700 px-6 py-2.5 rounded-full font-bold text-sm transition-all border border-neutral-700"
                                >
                                    Discover Our Mission <FiArrowRight className="ml-2 text-sky-500" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
